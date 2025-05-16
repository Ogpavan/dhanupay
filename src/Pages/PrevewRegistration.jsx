// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Section = ({ title, children }) => (
//   <div className="bg-white p-4 rounded-xl shadow-md mb-4">
//     <h2 className="text-lg font-semibold text-[#2C2DCB] mb-2">{title}</h2>
//     <div className="space-y-1 text-gray-700 text-sm">{children}</div>
//   </div>
// );

// const InfoRow = ({ label, value }) => (
//   <div className="flex justify-between">
//     <span className="font-medium">{label}</span>
//     <span>{value || "—"}</span>
//   </div>
// );

// function PreviewRegistration() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { finalData } = location.state || {};
//   const [agreed, setAgreed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const [registrationData, setregistrationData] = useState({
//     userID: null,
//     userTypeID: 16,
//     roleID: '',
//     firstName: '',
//     lastName: '',
//     mobileNumber: '',
//     email: '',
//     personalAddressLine1: '',
//     personalAddressLine2: '',
//     personalCityID: '',
//     personalStateID: '',
//     personalPincode: '',
//     shopAddressLine1: '',
//     shopAddressLine2: '',
//     shopCityID: '',
//     shopStateID: '',
//     shopPincode: '',
//   });

//   useEffect(() => {
//     if (finalData) {
//       // setregistrationData({
//       //   userID: null,
//       //   userTypeID: 16,
//       //   roleID: null,
//       //   firstName: finalData?.basicDetails?.firstName || '',
//       //   lastName: finalData?.basicDetails?.lastName || '',
//       //   mobileNumber: finalData?.basicDetails?.mobile || '',
//       //   AlternatemobileNumber: finalData?.basicDetails?.alternateMobile || '',
//       //   email: finalData?.basicDetails?.email || '',
//       //   personalAddressLine1: `${finalData?.residentialData?.houseNo || ''} ${finalData?.residentialData?.address || ''}`.trim(),
//       //   personalAddressLine2: finalData?.residentialData?.landmark || '',
//       //   personalCityID: finalData?.residentialData?.city || '',
//       //   personalStateID: finalData?.residentialData?.state || '',
//       //   personalPincode: finalData?.residentialData?.pincode || '',
//       //   shopAddressLine1: finalData?.businessDetails?.shopName || '',
//       //   shopAddressLine2: `${finalData?.businessDetails?.address || ''} ${finalData?.businessDetails?.landmark || ''}`.trim(),
//       //   shopCityID: finalData?.businessDetails?.city || '',
//       //   shopStateID: finalData?.businessDetails?.state || '',
//       //   shopPincode: finalData?.businessDetails?.pincode || '',
//       // });

//       setregistrationData({
//         userID: null,
//         userTypeID: 16,
//         roleID: null,
//         firstName: finalData.combinedData.basicDetails.firstName || '',
//         lastName: finalData.combinedData.basicDetails.lastName || '',
//         mobileNumber: finalData.combinedData.basicDetails.mobile || '',
//         AlternatemobileNumber: finalData.combinedData.basicDetails.alternateMobile || '',
//         email: finalData.combinedData.basicDetails.email || '',
//         personalAddressLine1: `${finalData.combinedData.residentialData.houseNo || ''} ${finalData.combinedData.residentialData.address || ''}`.trim(),
//         personalAddressLine2: finalData.combinedData.residentialData.landmark || '',
//         personalCityID: finalData.combinedData.residentialData.city || '',
//         personalStateID: finalData.combinedData.residentialData.state || '',
//         personalPincode: finalData.combinedData.residentialData.pincode || '',
//         shopAddressLine1: finalData.combinedData.businessDetails.shopName || '',
//         shopAddressLine2: `${finalData.combinedData.businessDetails.address || ''} ${finalData.combinedData.businessDetails.landmark || ''}`.trim(),
//         shopCityID: finalData.combinedData.businessDetails.city || '',
//         shopStateID: finalData.combinedData.businessDetails.state || '',
//         shopPincode: finalData.combinedData.businessDetails.pincode || ''
//       });

//       console.log("Final Registration Data:", finalData);
//     } else {
//       console.warn("No registration data found.");
//     }
//   }, [finalData]);

//   const uploadDocuments = async () => {
//     setLoading(true);
//     setMessage('');

//     try {
//       const aadhaarResponse = await axios.post('https://gateway.dhanushop.com/api/users/uploadDocuments', {
//         UserId: '2',
//         newUserId: '3',
//         DocumentType: 'Aadhaar',
//         DocumentNumber: finalData?.aadhaarDetails?.aadhaarNo,
//         FrontImage: finalData?.aadhaarDetails?.aadhaarFront,
//         BackImage: finalData?.aadhaarDetails?.aadhaarBack,
//         VideoFile: null,
//       });

//       if (aadhaarResponse.data.success === 'true') {
//         const panResponse = await axios.post('https://gateway.dhanushop.com/api/users/uploadDocuments', {
//           UserId: '2',
//           newUserId: '3',
//           DocumentType: 'PAN',
//           DocumentNumber: finalData?.panDetails?.panNumber,
//           FrontImage: finalData?.panDetails?.panFront,
//           BackImage: null,
//           VideoFile: null,
//         });

//         if (panResponse.data.success === 'true') {
//           const kycResponse = await axios.post('https://gateway.dhanushop.com/api/users/uploadDocuments', {
//             UserId: '2',
//             newUserId: '3',
//             DocumentType: 'KYC',
//             DocumentNumber: null,
//             FrontImage: finalData?.videoKyc?.profilePhoto,
//             BackImage: finalData?.videoKyc?.shopPhoto,
//             VideoFile: finalData?.videoKyc?.kycVideo,
//           });

//           if (kycResponse.data.success === 'true') {
//             setMessage('All documents uploaded successfully!');
//           } else {
//             setMessage('KYC Upload Failed');
//           }
//         } else {
//           setMessage('PAN Upload Failed');
//         }
//       } else {
//         setMessage('Aadhaar Upload Failed');
//       }
//     } catch (error) {
//       console.error('Error during document upload:', error);
//       setMessage('Error during upload process.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleConfirm = async () => {
//     if (agreed) {
//       try {
//         console.log("Registration Data:", registrationData);
//         const response = await axios.post('https://gateway.dhanushop.com/api/users/register', registrationData);

//         if (response.data.success === "true") {
//           console.log("Registration Successful:", response.data);
//           await uploadDocuments();
//           navigate("/KYCSuccessScreen");
//         } else {
//           console.log("Registration Failed:", response.data.message);
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//       }
//     }
//   };

//   if (!finalData) {
//     return (
//       <div className="p-4 text-center text-red-500 font-semibold">
//         No registration data found.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f4f6fa] p-4 font-poppins">
//       <h1 className="text-2xl font-bold text-center mb-6 text-[#121649]">
//         Preview Your Registration Details
//       </h1>

//       <Section title="Basic Details">
//         <InfoRow label="First Name" value={finalData?.basicDetails?.firstName} />
//         <InfoRow label="Last Name" value={finalData?.basicDetails?.lastName} />
//         <InfoRow label="Mobile" value={finalData?.basicDetails?.mobile} />
//         <InfoRow label="Alternate Mobile" value={finalData?.basicDetails?.alternateMobile} />
//         <InfoRow label="Email" value={finalData?.basicDetails?.email} />
//       </Section>

//       <Section title="Residential Address">
//         <InfoRow label="House No." value={finalData?.residentialData?.houseNo} />
//         <InfoRow label="Address" value={finalData?.residentialData?.address} />
//         <InfoRow label="Landmark" value={finalData?.residentialData?.landmark} />
//         <InfoRow label="Pincode" value={finalData?.residentialData?.pincode} />
//         <InfoRow label="City" value={finalData?.residentialData?.city} />
//         <InfoRow label="State" value={finalData?.residentialData?.state} />
//       </Section>

//       <Section title="Business Details">
//         <InfoRow label="Shop Name" value={finalData?.businessDetails?.shopName} />
//         <InfoRow label="Address" value={finalData?.businessDetails?.address} />
//         <InfoRow label="Landmark" value={finalData?.businessDetails?.landmark} />
//         <InfoRow label="Pincode" value={finalData?.businessDetails?.pincode} />
//         <InfoRow label="City" value={finalData?.businessDetails?.city} />
//         <InfoRow label="State" value={finalData?.businessDetails?.state} />
//       </Section>

//       <Section title="Aadhaar Details">
//         <InfoRow label="Aadhaar No." value={finalData?.aadhaarDetails?.aadhaarNo} />
//         {finalData?.aadhaarDetails?.aadhaarFront && (
//           <img
//             src={finalData.aadhaarDetails.aadhaarFront}
//             alt="Aadhaar Front"
//             className="w-48 h-auto mt-2 rounded border"
//           />
//         )}
//         {finalData?.aadhaarDetails?.aadhaarBack && (
//           <img
//             src={finalData.aadhaarDetails.aadhaarBack}
//             alt="Aadhaar Back"
//             className="w-48 h-auto mt-2 rounded border"
//           />
//         )}
//       </Section>

//       <Section title="PAN Details">
//         <InfoRow label="PAN No." value={finalData?.panDetails?.panNumber} />
//         {finalData?.panDetails?.panFront && (
//           <img
//             src={finalData.panDetails.panFront}
//             alt="PAN Front"
//             className="w-48 h-auto mt-2 rounded border"
//           />
//         )}
//       </Section>

//       <Section title="Video KYC">
//         {finalData?.videoKyc?.profilePhoto && (
//           <img
//             src={finalData.videoKyc.profilePhoto}
//             alt="Profile"
//             className="w-32 h-32 object-cover rounded-full border mb-2"
//           />
//         )}
//         {finalData?.videoKyc?.shopPhoto && (
//           <img
//             src={finalData.videoKyc.shopPhoto}
//             alt="Shop"
//             className="w-48 h-auto rounded border mb-2"
//           />
//         )}
//         {finalData?.videoKyc?.kycVideo && (
//           <video controls className="w-full max-w-md rounded border">
//             <source src={finalData.videoKyc.kycVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </Section>

//       <div className="mt-4 flex items-center space-x-2">
//         <input
//           type="checkbox"
//           id="agreement"
//           checked={agreed}
//           onChange={(e) => setAgreed(e.target.checked)}
//           className="w-5 h-5 text-blue-600 rounded"
//         />
//         <label htmlFor="agreement" className="text-sm text-gray-800">
//           I confirm that all the information provided is true and correct.
//         </label>
//       </div>

//       <button
//         disabled={!agreed || loading}
//         onClick={handleConfirm}
//         className={`mt-6 w-full py-3 rounded-xl font-semibold text-white text-lg transition ${agreed ? "bg-[#2C2DCB] hover:bg-[#1e1eb8]" : "bg-gray-400 cursor-not-allowed"
//           }`}
//       >
//         {loading ? "Processing..." : "Confirm & Submit →"}
//       </button>

//       {message && <p className="mt-4 text-center text-green-600 font-medium">{message}</p>}
//     </div>
//   );
// }

// export default PreviewRegistration;



import axios from "axios";
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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [registrationData, setregistrationData] = useState({
    userID: null,
    userTypeID: 16,
    roleID: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    personalAddressLine1: '',
    personalAddressLine2: '',
    personalCityID: '',
    personalStateID: '',
    personalPincode: '',
    shopAddressLine1: '',
    shopAddressLine2: '',
    shopCityID: '',
    shopStateID: '',
    shopPincode: '',
  });

  useEffect(() => {
    if (finalData) {
      setregistrationData({
        userID: null,
        userTypeID: 16,
        roleID: null,
        firstName: finalData.combinedData.basicDetails.firstName || '',
        lastName: finalData.combinedData.basicDetails.lastName || '',
        mobileNumber: finalData.combinedData.basicDetails.mobile || '',
        AlternatemobileNumber: finalData.combinedData.basicDetails.alternateMobile || '',
        email: finalData.combinedData.basicDetails.email || '',
        personalAddressLine1: `${finalData.combinedData.residentialData.houseNo || ''} ${finalData.combinedData.residentialData.address || ''}`.trim(),
        personalAddressLine2: finalData.combinedData.residentialData.landmark || '',
        personalCityID: finalData.combinedData.residentialData.city || '',
        personalStateID: finalData.combinedData.residentialData.state || '',
        personalPincode: finalData.combinedData.residentialData.pincode || '',
        shopAddressLine1: finalData.combinedData.businessDetails.shopName || '',
        shopAddressLine2: `${finalData.combinedData.businessDetails.address || ''} ${finalData.combinedData.businessDetails.landmark || ''}`.trim(),
        shopCityID: finalData.combinedData.businessDetails.city || '',
        shopStateID: finalData.combinedData.businessDetails.state || '',
        shopPincode: finalData.combinedData.businessDetails.pincode || ''
      });

      console.log("Final Registration Data:", finalData);
    } else {
      console.warn("No registration data found.");
    }
  }, [finalData]);

  const uploadDocuments = async () => {
    setLoading(true);
    setMessage('');

    try {
      const aadhaarResponse = await axios.post('https://gateway.dhanushop.com/api/users/uploadDocuments', {
        UserId: '2',
        newUserId: '3',
        DocumentType: 'Aadhaar',
        DocumentNumber: finalData?.aadhaarDetails?.aadhaarNo,
        FrontImage: finalData?.aadhaarDetails?.aadhaarFront,
        BackImage: finalData?.aadhaarDetails?.aadhaarBack,
        VideoFile: null,
      });

      if (aadhaarResponse.data.success === 'true') {
        const panResponse = await axios.post('https://gateway.dhanushop.com/api/users/uploadDocuments', {
          UserId: '2',
          newUserId: '3',
          DocumentType: 'PAN',
          DocumentNumber: finalData?.panDetails?.panNumber,
          FrontImage: finalData?.panDetails?.panFront,
          BackImage: null,
          VideoFile: null,
        });

        if (panResponse.data.success === 'true') {
          const kycResponse = await axios.post('https://gateway.dhanushop.com/api/users/uploadDocuments', {
            UserId: '2',
            newUserId: '3',
            DocumentType: 'KYC',
            DocumentNumber: null,
            FrontImage: finalData?.videoKyc?.profilePhoto,
            BackImage: finalData?.videoKyc?.shopPhoto,
            VideoFile: finalData?.videoKyc?.kycVideo,
          });

          if (kycResponse.data.success === 'true') {
            setMessage('All documents uploaded successfully!');
          } else {
            setMessage('KYC Upload Failed');
          }
        } else {
          setMessage('PAN Upload Failed');
        }
      } else {
        setMessage('Aadhaar Upload Failed');
      }
    } catch (error) {
      console.error('Error during document upload:', error);
      setMessage('Error during upload process.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (agreed) {
      try {
        const response = await axios.post('https://gateway.dhanushop.com/api/users/register', registrationData);

        if (response.data.success === "true") {
          await uploadDocuments();
          navigate("/KYCSuccessScreen");
        } else {
          console.log("Registration Failed:", response.data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
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

      {/* Basic */}
      <Section title="Basic Details">
        <InfoRow label="First Name" value={finalData?.combinedData?.basicDetails?.firstName} />
        <InfoRow label="Last Name" value={finalData?.combinedData?.basicDetails?.lastName} />
        <InfoRow label="Mobile" value={finalData?.combinedData?.basicDetails?.mobile} />
        <InfoRow label="Alternate Mobile" value={finalData?.combinedData?.basicDetails?.alternateMobile} />
        <InfoRow label="Email" value={finalData?.combinedData?.basicDetails?.email} />
      </Section>

      {/* Residential */}
      <Section title="Residential Address">
        <InfoRow label="House No." value={finalData?.combinedData?.residentialData?.houseNo} />
        <InfoRow label="Address" value={finalData?.combinedData?.residentialData?.address} />
        <InfoRow label="Landmark" value={finalData?.combinedData?.residentialData?.landmark} />
        <InfoRow label="Pincode" value={finalData?.combinedData?.residentialData?.pincode} />
        <InfoRow label="City" value={finalData?.combinedData?.residentialData?.city} />
        <InfoRow label="State" value={finalData?.combinedData?.residentialData?.state} />
      </Section>

      {/* Business */}
      <Section title="Business Details">
        <InfoRow label="Shop Name" value={finalData?.combinedData?.businessDetails?.shopName} />
        <InfoRow label="Address" value={finalData?.combinedData?.businessDetails?.address} />
        <InfoRow label="Landmark" value={finalData?.combinedData?.businessDetails?.landmark} />
        <InfoRow label="Pincode" value={finalData?.combinedData?.businessDetails?.pincode} />
        <InfoRow label="City" value={finalData?.combinedData?.businessDetails?.city} />
        <InfoRow label="State" value={finalData?.combinedData?.businessDetails?.state} />
      </Section>

      {/* Aadhaar */}
      <Section title="Aadhaar Details">
        <InfoRow label="Aadhaar No." value={finalData?.aadhaarDetails?.aadhaarNo} />
        {finalData?.aadhaarDetails?.aadhaarFront && (
          <img src={finalData.aadhaarDetails.aadhaarFront} alt="Aadhaar Front" className="w-48 h-auto mt-2 rounded border" />
        )}
        {finalData?.aadhaarDetails?.aadhaarBack && (
          <img src={finalData.aadhaarDetails.aadhaarBack} alt="Aadhaar Back" className="w-48 h-auto mt-2 rounded border" />
        )}
      </Section>

      {/* PAN */}
      <Section title="PAN Details">
        <InfoRow label="PAN No." value={finalData?.panDetails?.panNumber} />
        {finalData?.panDetails?.panFront && (
          <img src={finalData.panDetails.panFront} alt="PAN Front" className="w-48 h-auto mt-2 rounded border" />
        )}
      </Section>

      {/* KYC */}
      <Section title="Video KYC">
        {finalData?.videoKyc?.profilePhoto && (
          <img src={finalData.videoKyc.profilePhoto} alt="Profile" className="w-32 h-32 object-cover rounded-full border mb-2" />
        )}
        {finalData?.videoKyc?.shopPhoto && (
          <img src={finalData.videoKyc.shopPhoto} alt="Shop" className="w-48 h-auto rounded border mb-2" />
        )}
        {finalData?.videoKyc?.kycVideo && (
          <video controls className="w-full max-w-md rounded border">
            <source src={finalData.videoKyc.kycVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Section>

      {/* Agreement + Submit */}
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
        disabled={!agreed || loading}
        onClick={handleConfirm}
        className={`mt-6 w-full py-3 rounded-xl font-semibold text-white text-lg transition ${agreed ? "bg-[#2C2DCB] hover:bg-[#1e1eb8]" : "bg-gray-400 cursor-not-allowed"}`}
      >
        {loading ? "Processing..." : "Confirm & Submit →"}
      </button>

      {message && <p className="mt-4 text-center text-green-600 font-medium">{message}</p>}
    </div>
  );
}

export default PreviewRegistration;
