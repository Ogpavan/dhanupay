import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate, useLocation } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import Swal from "sweetalert2";
import aadhaarFrontImage from "../assets/aadhaar_front.png";
import aadhaarBackImage from "../assets/aadhaar_back.png";
import axios from "axios";

const AadhaarDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { combinedData } = location.state || {};
   const [btnLoading, setbtnLoading] = useState(false);

  const [aadhaarNo, setAadhaarNo] = useState("");
  const [aadhaarFront, setAadhaarFront] = useState(null);
  const [aadhaarBack, setAadhaarBack] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedData = JSON.parse(localStorage.getItem("registrationData"));
    if (storedData && storedData.aadhaarDetails) {
      setAadhaarNo(storedData.aadhaarDetails.aadhaarNo);
      setAadhaarFront(storedData.aadhaarDetails.aadhaarFront);
      setAadhaarBack(storedData.aadhaarDetails.aadhaarBack);
    }
  }, []);

  const handleAadhaarChange = (e) => {
    setAadhaarNo(e.target.value);
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "front") {
        setAadhaarFront(URL.createObjectURL(file));
      } else {
        setAadhaarBack(URL.createObjectURL(file));
      }
    }
  };

  const handleNext = async () => {
    setbtnLoading(true);
    const newUserId = localStorage.getItem("newUserId")
    if (!aadhaarNo || !aadhaarFront || !aadhaarBack) {
      Swal.fire({
        title: "Incomplete Details",
        text: "Please fill all the required details, including Aadhaar number and both front and back images.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      setbtnLoading(false);
      return;
    }

    const frontInput = document.getElementById("aadhaarFrontFile");
    const backInput = document.getElementById("aadhaarBackFile");

    const frontFile = frontInput?.files[0];
    const backFile = backInput?.files[0];

    if (!frontFile || !backFile) {
      Swal.fire("Error", "Please upload both Aadhaar images.", "error");
      setbtnLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("UserId", newUserId);  // Provide fallback
    formData.append("newUserId", newUserId);
    formData.append("DocumentType", "Aadhaar");
    formData.append("DocumentNumber", aadhaarNo);
    formData.append("FrontImage", frontFile);
    formData.append("BackImage", backFile);
    formData.append("VideoFile", ""); // If not uploading now, send empty or omit

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/uploadDocuments`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);
      Swal.fire("Success", "Aadhaar details submitted successfully!", "success");

      const updatedData = {
        aadhaarDetails: {
          aadhaarNo,
          aadhaarFront,
          aadhaarBack,
        },
        combinedData,
      };

      localStorage.setItem("registrationData", JSON.stringify(updatedData));
      setbtnLoading(false);
      navigate("/pan-details");
    } catch (error) {
      console.error("API Error:", error);
      setbtnLoading(false);
      Swal.fire("Error", "Failed to submit Aadhaar details.", "error");
    }
  };

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={4} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Aadhaar Details
        </h1>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Aadhaar No. (12 Digits)"
            className="input-field w-full"
            maxLength={12}
            inputMode="numeric"
            value={aadhaarNo}
            onChange={handleAadhaarChange}
            onKeyDown={(e) => {
              if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                e.preventDefault();
              }
            }}
          />

          {/* Aadhaar Front Upload */}
          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload Aadhaar Front Side
            </label>
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <img
                src={aadhaarFront || aadhaarFrontImage}
                alt="Upload Aadhaar Front"
                className="absolute w-full h-full object-contain p-4"
              />
              <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                <FiUploadCloud className="text-white text-4xl" />
              </div>
              <input
                id="aadhaarFrontFile"
                type="file"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileUpload(e, "front")}
              />
            </div>
          </div>
          {/* Aadhaar Back Upload */}
          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload Aadhaar Back Side
            </label>
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <img
                src={aadhaarBack || aadhaarBackImage}
                alt="Upload Aadhaar Back"
                className="absolute w-full h-full object-contain p-4"
              />
              <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                <FiUploadCloud className="text-white text-4xl" />
              </div>
              <input
                id="aadhaarBackFile"
                type="file"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleFileUpload(e, "back")}
              />
            </div>
          </div>
        </form>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-200 text-gray-800 text-lg py-2 rounded-xl font-semibold"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={btnLoading}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
            {btnLoading ? 'Processing...' : 'Save & Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AadhaarDetails;
