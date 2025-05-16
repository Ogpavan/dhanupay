import React, { useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";

const BankDetail = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    accountHolderName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    branchName: "",
    bankName: "",
  });
  const [cancelCheque, setCancelCheque] = useState(null);


  const [showAccountNumber, setShowAccountNumber] = useState(false);
  const [showConfirmAccountNumber, setShowConfirmAccountNumber] = useState(false);
  const [btnLoading, setbtnLoading] = useState(false);

  const banks = [
    { BankId: 1, BankName: "State Bank of India" },
    { BankId: 2, BankName: "HDFC Bank" },
    { BankId: 3, BankName: "ICICI Bank" },
    // Add more banks as needed
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "application/pdf"];
      const maxSizeInMB = 5;

      if (!validTypes.includes(file.type)) {
        Swal.fire({
          title: "Invalid File Type",
          text: "Only JPG, PNG, or PDF files are allowed.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      if (file.size / 1024 / 1024 > maxSizeInMB) {
        Swal.fire({
          title: "File Too Large",
          text: `File size should be less than ${maxSizeInMB} MB.`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      setCancelCheque(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;




    setFormData((prev) => ({
      ...prev,
      [name]: name === "ifscCode" ? value.toUpperCase() : value,
    }));
  };

  const handleNext = async () => {
    setbtnLoading(true);
    const {
      accountHolderName,
      accountNumber,
      confirmAccountNumber,
      ifscCode,
      bankName,
      branchName,
    } = formData;

    if (
      !accountHolderName ||
      !accountNumber ||
      !confirmAccountNumber ||
      !ifscCode ||
      !bankName
    ) {
      Swal.fire({
        title: "Incomplete Details",
        text: "Please fill in all required fields.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      setbtnLoading(false);
      return;
    }

    if (accountNumber !== confirmAccountNumber) {
      Swal.fire({
        title: "Mismatch",
        text: "Account number and Confirm account number do not match.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setbtnLoading(false);
      return;
    }

    const payload = {
      UserID: localStorage.getItem("newUserId"),
      NewUserId: localStorage.getItem("newUserId"),
      Stage: "BankDetails",
      AccountHolderName: accountHolderName,
      AccountNumber: accountNumber,
      IFSCCode: ifscCode,
      BankName: bankName,
      BranchName: branchName,
    };

    try {
      console.log("API Payload:", payload);
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/registerbystage`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);
      if (response.data.success) {
        // Upload cancel cheque
        if (cancelCheque) {
          const formData = new FormData();
          formData.append("UserID", localStorage.getItem("newUserId"));
          formData.append("newUserId", localStorage.getItem("newUserId"));
          formData.append("DocumentType", "CancelCheque");
          formData.append("DocumentNumber", "");
          formData.append("FrontImage", cancelCheque);
          formData.append("BackImage", "");
          formData.append("VideoFile", ""); // If not uploading now, send empty or omit

          try {
            const uploadRes = await axios.post(
              `${import.meta.env.VITE_API_BASE_URL}/users/uploadDocuments`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            console.log("Cheque Upload Response:", uploadRes.data);
          } catch (uploadErr) {
            console.error("Cheque Upload Error:", uploadErr);
            Swal.fire({
              title: "Upload Failed",
              text: "Bank details were saved, but cancel cheque upload failed.",
              icon: "warning",
              confirmButtonText: "Continue",
            });
            navigate("/aadhaar-details");
            return;
          }
        }

        Swal.fire({
          title: "Success",
          text: "Bank details submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        navigate("/aadhaar-details");
      }
      else {
        Swal.fire({
          title: "Submission Failed",
          text: "Something went wrong while submitting bank details.",
          icon: "error",
          confirmButtonText: "Retry",
        });
        setbtnLoading(false);
      }

    } catch (error) {
      setbtnLoading(false);
      console.error("API Error:", error);
      Swal.fire({
        title: "Submission Failed",
        text: "Something went wrong while submitting bank details.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  return (
    <div className="font-poppins h-[100dvh] overflow-x-auto bg-[#2C2DCB] mb-10 sm:hidden">
      <div className="h-[20vh] px-4 flex items-center mb-10">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={3} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Bank Details
        </h1>

        <form className="space-y-4 ">
          <input
            type="text"
            placeholder="Account Holder Name"
            name="accountHolderName"
            className="input-field w-full"
            value={formData.accountHolderName}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (!/^[a-zA-Z\s]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                e.preventDefault();
              }
            }}
          />


          <div className="relative">
            <input
              type={showAccountNumber ? "text" : "password"}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Account Number"
              name="accountNumber"
              className="input-field w-full"
              value={formData.accountNumber}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-digits
                setFormData((prev) => ({
                  ...prev,
                  accountNumber: numericValue,
                }));
              }}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
              onClick={() => setShowAccountNumber(!showAccountNumber)}
            >
              {showAccountNumber ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirmAccountNumber ? "text" : "password"}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Confirm Account Number"
              name="confirmAccountNumber"
              className="input-field w-full"
              value={formData.confirmAccountNumber}
              onChange={(e) => {
                // Block non-numeric input
                const numericValue = e.target.value.replace(/\D/g, "");
                setFormData((prev) => ({
                  ...prev,
                  confirmAccountNumber: numericValue,
                }));
              }}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
              onClick={() =>
                setShowConfirmAccountNumber(!showConfirmAccountNumber)
              }
            >
              {showConfirmAccountNumber ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <select
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none ${formData.bankName ? "text-gray-800" : "text-gray-400"
              }`}
          >
            <option value="" disabled>
              Select Bank
            </option>
            {banks.map((bank) => (
              <option key={bank.BankId} value={bank.BankName}>
                {bank.BankName}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Branch Name"
            name="branchName"
            className="input-field w-full"
            value={formData.branchName}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (
                !/^[a-zA-Z\s]$/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Delete" &&
                e.key !== "ArrowLeft" &&
                e.key !== "ArrowRight"
              ) {
                e.preventDefault();
              }
            }}
          />


          <input
            type="text"
            placeholder="IFSC Code"
            name="ifscCode"
            className="input-field w-full uppercase"
            value={formData.ifscCode}
            onChange={handleChange}
            maxLength={11}
          />
          <div>
            <label className="block mb-1 font-medium text-gray-700">Upload Cancel Cheque</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>


          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="w-1/2 bg-gray-200 text-gray-800 text-lg py-2 rounded-xl font-semibold"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={btnLoading}
              className="w-1/2 py-2 bg-[#2C2DCB] text-white rounded-xl"
            >
              {btnLoading ? 'Processing...' : 'Save & Next →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankDetail;
