import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Stepper from "../components/Stepper";
import { FaCamera } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import Swal from "sweetalert2";
import axios from "axios";

const VideoKYC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { combinedData } = location.state || {};
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [shopPhoto, setShopPhoto] = useState(null);
  const [kycVideo, setKycVideo] = useState(null);

  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleShopPhotoUpload = (e) => {
    const file = e.target.files[0];
    setShopPhoto(file);
  };

  const handleKycVideoUpload = (e) => {
    const file = e.target.files[0];
    setKycVideo(file);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // const handleSubmit = async () => {
  //   if (!profilePhoto || !shopPhoto || !kycVideo) {
  //     Swal.fire({
  //       title: "Incomplete Uploads",
  //       text: "Please upload Profile Photo, Shop Photo, and KYC Video.",
  //       icon: "warning",
  //       confirmButtonText: "OK",
  //     });
  //     return;
  //   }

  //   try {
  //     const profileBase64 = await toBase64(profilePhoto);
  //     const shopBase64 = await toBase64(shopPhoto);
  //     const videoBase64 = await toBase64(kycVideo);

  //     const finalData = {
  //       ...combinedData,
  //       videoKyc: {
  //         profilePhoto: profileBase64,
  //         shopPhoto: shopBase64,
  //         kycVideo: videoBase64,
  //       },
  //     };

  //     localStorage.removeItem("registrationData");
  //     localStorage.setItem("finalKycData", JSON.stringify(finalData));

  //     // navigate("/PrevewRegistration");
  //      navigate("/KYCSuccessScreen");
  //   } catch (error) {
  //     console.error("File conversion error:", error);
  //     Swal.fire({
  //       title: "Error",
  //       text: "Something went wrong while processing the files.",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   }
  // };

  
const handleSubmit = async () => {
   const newUserId = localStorage.getItem("newUserId")
  if (!profilePhoto || !shopPhoto || !kycVideo) {
    Swal.fire({
      title: "Incomplete Uploads",
      text: "Please upload Profile Photo, Shop Photo, and KYC Video.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  try {
    const formData = new FormData();

    // Append files
    formData.append("UserId", newUserId);  // Provide fallback
    formData.append("newUserId", newUserId);
    formData.append("DocumentType", "KYC");
    formData.append("FrontImage", profilePhoto);
formData.append("BackImage", shopPhoto);
formData.append("VideoFile", kycVideo);


    // Append any other combined data fields (flatten if needed)
    if (combinedData) {
      Object.entries(combinedData).forEach(([key, value]) => {
        // You might need to handle nested objects properly here
        // For simplicity, stringify nested objects
        if (typeof value === "object") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });
    }

    // Console log FormData contents (for debugging)
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ": ", pair[1]);
    // }
console.log("Before sendinh kyc",formData)
    // Send API request
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/users/uploadDocuments`, // your API endpoint
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("API Response:", response.data);

    Swal.fire("Success", "Video KYC submitted successfully!", "success");

    // Clear local storage and navigate
    localStorage.removeItem("registrationData");
    localStorage.setItem("finalKycData", JSON.stringify({ ...combinedData })); // Optionally keep combinedData
    localStorage.clear();
    navigate("/KYCSucessScreen");
  } catch (error) {
    console.error("API Error:", error);
    Swal.fire("Error", "Failed to submit Video KYC.", "error");
  }
};
  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6">
        <Stepper currentStep={6} />

        <h1 className="poppins-semibold text-[#121649] text-center py-4">
          Video KYC
        </h1>

        <form className="space-y-6">
          <div className="flex justify-evenly space-x-4">
            <div className="flex flex-col items-center">
              <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
                Upload Profile Photo
              </label>
              <div className="relative w-32 aspect-square bg-gray-100 rounded-full overflow-hidden shadow-md">
                <div className="absolute w-full h-full bg-black bg-opacity-40 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
                  <FaCamera />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                  onChange={handleProfilePhotoUpload}
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
                Upload Shop Photo
              </label>
              <div className="relative w-32 aspect-square bg-gray-100 rounded-full overflow-hidden shadow-md">
                <div className="absolute w-full h-full bg-black bg-opacity-40 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
                  <FaCamera />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                  onChange={handleShopPhotoUpload}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#2C2DCB] text-sm font-semibold mb-2">
              Upload KYC Video (Max 30 seconds)
            </label>
            <div className="relative w-full h-40 bg-gray-100 rounded-xl overflow-hidden">
              <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                <IoVideocam />
              </div>
              <input
                type="file"
                accept="video/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={handleKycVideoUpload}
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
            onClick={handleSubmit}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
            Submit →
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoKYC;
