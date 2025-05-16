import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate } from "react-router-dom";
import OtpModal from "../components/OtpModal";
import Swal from "sweetalert2";
import axios from "axios";


const BasicDetails = () => {
  const navigate = useNavigate();

  const [showOTPModal, setShowOTPModal] = useState(false);
  const [verifyingField, setVerifyingField] = useState(null);
  const [otp, setOtp] = useState("");
  const [btnLoading, setbtnLoading] = useState(false);
  const [OtpId, setOtpId] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    alternateMobile: "",
    email: "",
  });

  const [verifiedFields, setVerifiedFields] = useState({
    mobile: false,
    alternateMobile: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedForm = localStorage.getItem("basicDetails");
    if (savedForm) {
      const parsedData = JSON.parse(savedForm);
      setFormData(parsedData);
    }

    const savedVerified = localStorage.getItem("verifiedFields");
    if (savedVerified) {
      setVerifiedFields(JSON.parse(savedVerified));
    }
  }, []);

  // const handleVerifyClick = (field) => {
  //   console.log("Verifying field:", field);
  //   setVerifyingField(field);
  //   setShowOTPModal(true);
  // };



  const handleVerifyClick = async (field) => {
  console.log("Verifying field:", field);

  // Example: extract mobile number from your form state
  const mobileNumber = formData.mobile; // Adjust this if your state uses a different key

  if (!mobileNumber) {
    Swal.fire({
      title: "Missing Number",
      text: "Please enter a mobile number before verifying.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  try {
    const response = await axios.post(
      "https://gateway.dhanushop.com/api/users/VerifyMobileNumber",
      { MobileNumber: mobileNumber },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("OTP Response:", response.data);

    if (response.data.success) {
      // Optional: Store OTP ID if needed for verification later
      setOtpId(response.data.otpid);
      setVerifyingField(field);
      setShowOTPModal(true);

      Swal.fire({
        title: "OTP Sent",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Failed",
        text: response.data.message || "Failed to send OTP.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  } catch (error) {
    console.error("Verification API Error:", error);
    Swal.fire({
      title: "Error",
      text: "An error occurred while sending the OTP.",
      icon: "error",
      confirmButtonText: "Retry",
    });
  }
};

  // const handleOTPSubmit = () => {
  //   if (verifyingField === "Mobile Number") {
  //     const updatedVerified = { ...verifiedFields, mobile: true };
  //     setVerifiedFields(updatedVerified);
  //     localStorage.setItem("verifiedFields", JSON.stringify(updatedVerified));
  //   }
  //   setShowOTPModal(false);
  //   setOtp("");
  // };


  const handleOTPSubmit = async () => {
  if (!otp) {
    Swal.fire({
      title: "Missing OTP",
      text: "Please enter the OTP.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  try {
    const response = await axios.post(
      "https://gateway.dhanushop.com/api/users/OTPValidator",
      {
        UserId: 0,
        LoginId: OtpId, // assuming this is set from the previous OTP generation step
        OTP: otp,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("OTP Verify Response:", response.data);

    if (response.data.success) {
      if (verifyingField === "Mobile Number") {
        const updatedVerified = { ...verifiedFields, mobile: true };
        setVerifiedFields(updatedVerified);
        localStorage.setItem("verifiedFields", JSON.stringify(updatedVerified));
      }

      Swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
      });

      setShowOTPModal(false);
      setOtp("");
    } else {
      Swal.fire({
        title: "Invalid OTP",
        text: response.data.message || "The OTP you entered is incorrect.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  } catch (error) {
    console.error("OTP Verification Error:", error);
    Swal.fire({
      title: "Verification Failed",
      text: "An error occurred while verifying the OTP.",
      icon: "error",
      confirmButtonText: "Retry",
    });
  }
};
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    localStorage.setItem("basicDetails", JSON.stringify(updatedForm));
  };

  // const handleSubmit = () => {
  //   console.log("Submitting form data:", formData);

  //   if (!formData.firstName || !formData.lastName) {
  //     return Swal.fire({
  //       icon: "error",
  //       title: "Oops!",
  //       text: "First Name and Last Name are required!",
  //     });
  //   }

  //   if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
  //     return Swal.fire({
  //       icon: "error",
  //       title: "Oops!",
  //       text: "Please enter a valid Mobile Number!",
  //     });
  //   }

  //   if (formData.alternateMobile && !/^\d{10}$/.test(formData.alternateMobile)) {
  //     return Swal.fire({
  //       icon: "error",
  //       title: "Oops!",
  //       text: "Please enter a valid Alternate Mobile Number!",
  //     });
  //   }

  //   if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
  //     return Swal.fire({
  //       icon: "error",
  //       title: "Oops!",
  //       text: "Please enter a valid Email ID!",
  //     });
  //   }

  //   // All validation passed
  //   navigate("/residential-details");
  // };





  const handleSubmit = async () => {
    setbtnLoading(true);
    console.log("Submitting form data:", formData);

    if (!formData.firstName || !formData.lastName) {
      return Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "First Name and Last Name are required!",
      });
    }

    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      return Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter a valid Mobile Number!",
      });
    }

    if (formData.alternateMobile && !/^\d{10}$/.test(formData.alternateMobile)) {
      return Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter a valid Alternate Mobile Number!",
      });
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      return Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter a valid Email ID!",
      });
    }

    // API payload
    const payload = {
      UserID: "2",
      UserTypeID: 16,
      RoleID: "19",
      FirstName: formData.firstName,
      LastName: formData.lastName,
      MobileNumber: formData.mobile,
      Email: formData.email,
    };
    console.log("API Payload:", payload);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, payload);
      console.log("API response:", response.data);
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User registered successfully!",
        });
        localStorage.setItem("newUserId", response.data.newUserId);
        setbtnLoading(false);
        navigate("/residential-details");
      } else if (response.data.message == "User Completed All steps") {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User Completed All steps!",
        })
        localStorage.clear();
        setbtnLoading(false);
        navigate("/");

      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: response.data.message,
        });
        localStorage.setItem("newUserId", response.data.userData.NewUserID);
        setbtnLoading(false);
        navigate("/residential-details");
      }
    } catch (error) {
      console.error("API error:", error);
      setbtnLoading(false);
      Swal.fire({
        icon: "error",
        title: "API Error",
        text: error?.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="font-poppins min-h-screen bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center" onClick={() => navigate(-1)}>
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>
      <div className=" min-h-[90vh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6 relative">
        <Stepper currentStep={0} />
        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Basic Details
        </h1>
        <form className="space-y-3">
          {/* First & Last Name */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="input-field w-1/2"
              maxLength="10"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                const key = e.key;
                if (!/^[a-zA-Z]$/.test(key) && key !== "Backspace" && key !== "Tab") {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-field w-1/2"
              maxLength="10"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                const key = e.key;
                if (!/^[a-zA-Z]$/.test(key) && key !== "Backspace" && key !== "Tab") {
                  e.preventDefault();
                }
              }}
            />
          </div>
          {/* Mobile Number */}
          <div className="relative">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="input-field w-full pr-24"
              maxLength="10"
              inputMode="numeric"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only digits
                if (/^\d*$/.test(value)) {
                  // First digit must be 6-9
                  if (value.length === 1 && !/^[6-9]$/.test(value)) return;
                  setFormData({ ...formData, mobile: value });
                }
              }}
              disabled={verifiedFields.mobile}
            />

            <button
              type="button"
              onClick={() => handleVerifyClick("Mobile Number")}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold ${verifiedFields.mobile ? "text-green-400" : "text-[#2C2DCB]"}`}
              disabled={verifiedFields.mobile}
            >
              {verifiedFields.mobile ? "Verified" : "Verify"}
            </button>
          </div>

          {/* Alternate Mobile Number */}
          <div className="relative">
            <input
              type="tel"
              placeholder="Alternate Mobile Number"
              className="input-field w-full pr-24"
              maxLength="10"
              inputMode="numeric"
              name="alternateMobile"
              value={formData.alternateMobile}
              disabled={!verifiedFields.mobile}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only digits
                if (/^\d*$/.test(value)) {
                  // First digit must be 6-9
                  if (value.length === 1 && !/^[6-9]$/.test(value)) return;
                  setFormData({ ...formData, alternateMobile: value });
                }
              }}
            />

          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            className="input-field w-full"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!verifiedFields.mobile}
          />
        </form>

        <button
          onClick={handleSubmit}
          disabled={btnLoading}
          className="mt-6 w-full bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
         {btnLoading ? 'Processing...' : 'Save & Next →'}
        </button>

        <OtpModal
          isOpen={showOTPModal}
          onClose={() => setShowOTPModal(false)}
          onSubmit={handleOTPSubmit}
          otp={otp}
          setOtp={setOtp}
          verifyingField={verifyingField}
        />
      </div>
    </div>
  );
};

export default BasicDetails;
