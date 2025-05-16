import React, { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import { useNavigate, useLocation } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import Swal from "sweetalert2";

// Import the default PAN image (replace with your actual path)
import panImage from "../assets/PAN.png";
import axios from "axios";

const PanDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [basicDetails, setbasicDetails] = useState(location.state?.basicDetails || {});

  const [panNumber, setPanNumber] = useState("");
  const [panFront, setPanFront] = useState(null);
   const [btnLoading, setbtnLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Retrieve stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem("registrationData"));
    if (storedData && storedData.panDetails) {
      setPanNumber(storedData.panDetails.panNumber);
      // If an object URL is available in localStorage, use it for the image
      setPanFront(storedData.panDetails.panFront);
    }
  }, []);

  const handlePanChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (!/^[A-Z0-9]*$/.test(value)) return; // Prevent invalid characters
    setPanNumber(value);
  };

  // Handle PAN Front Image Upload
  // const handlePanFrontUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     // Create object URL for the uploaded file
  //     const objectURL = URL.createObjectURL(file);
  //     setPanFront(objectURL);

  //     // Store the object URL in localStorage for persistence
  //     const updatedData = JSON.parse(localStorage.getItem("registrationData")) || {};
  //     updatedData.panDetails = { ...updatedData.panDetails, panFront: objectURL };
  //     localStorage.setItem("registrationData", JSON.stringify(updatedData));
  //   }
  // };


 const handlePanFrontUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const objectURL = URL.createObjectURL(file);
    setPanFront(objectURL); // 🔁 update preview

    // Optionally: store in localStorage for persistence
    const updatedData = JSON.parse(localStorage.getItem("registrationData")) || {};
    updatedData.panDetails = {
      ...updatedData.panDetails,
      panFront: objectURL,
    };
    localStorage.setItem("registrationData", JSON.stringify(updatedData));
  }
};


  const handleNext = async () => {
    setbtnLoading(true);
  const newUserId = localStorage.getItem("newUserId");

  if (!panNumber || !panFront) {
    Swal.fire({
      title: "Incomplete Details",
      text: "Please fill in the PAN number and upload the PAN front image.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    setbtnLoading(false);
    return;
  }

  const panInput = document.getElementById("panFrontFile");
  const panFile = panInput?.files[0];

  if (!panFile) {
    Swal.fire("Error", "Please upload your PAN front image.", "error");
    setbtnLoading(false);
    return;
  }

  const formData = new FormData();
  formData.append("UserId", newUserId);
  formData.append("newUserId", newUserId);
  formData.append("DocumentType", "pan");
  formData.append("DocumentNumber", panNumber);
  formData.append("FrontImage", panFile);
  formData.append("VideoFile", ""); // optional if required

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
    Swal.fire("Success", "PAN details submitted successfully!", "success");

    // Save to localStorage
    const updatedData = {
      ...location.state?.combinedData,
      panDetails: {
        panNumber,
        panFront, // object URL just for preview, not needed for backend
      },
    };

    localStorage.setItem("registrationData", JSON.stringify(updatedData));
    setbtnLoading(false);
    navigate("/video-kyc");
  } catch (error) {
    console.error("API Error:", error);
    Swal.fire("Error", "Failed to submit PAN details.", "error");
    setbtnLoading(false);
  }
};


  return (
    <div className="font-poppins min-h-screen bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className=" bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={5} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          PAN Details
        </h1>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="PAN No. (AAAAA9999A)"
            className="input-field w-full"
            maxLength={10}
            inputMode="text"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            value={panNumber}
            onChange={handlePanChange}
          />

          {/* PAN Front Upload */}
          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload PAN Front Side
            </label>
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              {/* Display the uploaded image if available, otherwise show a default image */}
              {panFront ? (
                <img
                  src={panFront} // This will be the object URL
                  alt="Upload PAN Front"
                  className="absolute w-full h-full object-contain p-4"
                />
              ) : (
                <img
                  src={panImage} // Default image when no PAN image is uploaded
                  alt="Upload PAN Front"
                  className="absolute w-full h-full object-contain p-4"
                />
              )}
              <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                <FiUploadCloud className="text-white text-4xl" />
              </div>
              <input
                type="file"
                id="panFrontFile"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={handlePanFrontUpload}
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

export default PanDetails;
