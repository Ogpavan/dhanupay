// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function PrevewRegistration() {
//   const location = useLocation();
//   const { finalData } = location.state || {};

//   useEffect(() => {
//     if (finalData) {
//       console.log("Final Registration Data:", finalData);
//     } else {
//       console.warn("No registration data found.");
//     }
//   }, [finalData]);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-semibold">Preview Registration</h1>
//       <pre className="mt-4 bg-gray-100 p-4 rounded text-sm overflow-x-auto">
//         {JSON.stringify(finalData, null, 2)}
//       </pre>
//     </div>
//   );
// }

// export default PrevewRegistration;



import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Section = ({ title, children }) => (
  <div className="bg-white p-4 rounded-xl shadow-md mb-4">
    <h2 className="text-lg font-semibold text-[#2C2DCB] mb-2">{title}</h2>
    <div className="space-y-1 text-gray-700 text-sm">{children}</div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="font-medium">{label}</span>
    <span>{value || "—"}</span>
  </div>
);

function PreviewRegistration() {
  const location = useLocation();
  const navigate = useNavigate();
  const { finalData } = location.state || {};
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (finalData) {
      console.log("Final Registration Data:", finalData);
    } else {
      console.warn("No registration data found.");
    }
  }, [finalData]);

  const handleConfirm = () => {
    if (agreed) {
      localStorage.clear(); // Clear stored data
      navigate("/KYCSucessScreen");
    }
  };

  if (!finalData) {
    return (
      <div className="p-4 text-center text-red-500 font-semibold">
        No registration data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6fa] p-4 font-poppins">
      <h1 className="text-2xl font-bold text-center mb-6 text-[#121649]">
        Preview Your Registration Details
      </h1>

      <Section title="Basic Details">
        <InfoRow label="First Name" value={finalData.basicDetails.firstName} />
        <InfoRow label="Last Name" value={finalData.basicDetails.lastName} />
        <InfoRow label="Mobile" value={finalData.basicDetails.mobile} />
        <InfoRow label="Alternate Mobile" value={finalData.basicDetails.alternateMobile} />
        <InfoRow label="Email" value={finalData.basicDetails.email} />
      </Section>

      <Section title="Residential Address">
        <InfoRow label="House No." value={finalData.residentialData.houseNo} />
        <InfoRow label="Address" value={finalData.residentialData.address} />
        <InfoRow label="Landmark" value={finalData.residentialData.landmark} />
        <InfoRow label="Pincode" value={finalData.residentialData.pincode} />
        <InfoRow label="City" value={finalData.residentialData.city} />
        <InfoRow label="State" value={finalData.residentialData.state} />
      </Section>

      <Section title="Business Details">
        <InfoRow label="Shop Name" value={finalData.businessDetails.shopName} />
        <InfoRow label="Address" value={finalData.businessDetails.address} />
        <InfoRow label="Landmark" value={finalData.businessDetails.landmark} />
        <InfoRow label="Pincode" value={finalData.businessDetails.pincode} />
        <InfoRow label="City" value={finalData.businessDetails.city} />
        <InfoRow label="State" value={finalData.businessDetails.state} />
      </Section>

      <Section title="Aadhaar Details">
        <InfoRow label="Aadhaar No." value={finalData.aadhaarDetails.aadhaarNo} />
        {finalData.aadhaarDetails.aadhaarFront && (
          <img
            src={URL.createObjectURL(finalData.aadhaarDetails.aadhaarFront)}
            alt="Aadhaar Front"
            className="w-48 h-auto mt-2 rounded border"
          />
        )}
        {finalData.aadhaarDetails.aadhaarBack && (
          <img
            src={URL.createObjectURL(finalData.aadhaarDetails.aadhaarBack)}
            alt="Aadhaar Back"
            className="w-48 h-auto mt-2 rounded border"
          />
        )}
      </Section>


      <Section title="PAN Details">
        <InfoRow label="PAN No." value={finalData.panDetails.panNumber} />
        {finalData.panDetails.panFront && (
          <img
            src={URL.createObjectURL(finalData.panDetails.panFront)}
            alt="PAN Front"
            className="w-48 h-auto mt-2 rounded border"
          />
        )}
      </Section>


      <Section title="Video KYC">
        {finalData.videoKyc.profilePhoto && (
          <img
            src={URL.createObjectURL(finalData.videoKyc.profilePhoto)}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border mb-2"
          />
        )}
        {finalData.videoKyc.shopPhoto && (
          <img
            src={URL.createObjectURL(finalData.videoKyc.shopPhoto)}
            alt="Shop"
            className="w-48 h-auto rounded border mb-2"
          />
        )}
        {finalData.videoKyc.kycVideo && (
          <video
            controls
            className="w-full max-w-md rounded border"
          >
            <source src={URL.createObjectURL(finalData.videoKyc.kycVideo)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Section>


      <div className="mt-4 flex items-center space-x-2">
        <input
          type="checkbox"
          id="agreement"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="w-5 h-5 text-blue-600 rounded"
        />
        <label htmlFor="agreement" className="text-sm text-gray-800">
          I confirm that all the information provided is true and correct.
        </label>
      </div>

      <button
        disabled={!agreed}
        onClick={handleConfirm}
        className={`mt-6 w-full py-3 rounded-xl font-semibold text-white text-lg transition ${agreed ? "bg-[#2C2DCB] hover:bg-[#1e1eb8]" : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Confirm & Submit →
      </button>
    </div>
  );
}

export default PreviewRegistration;
