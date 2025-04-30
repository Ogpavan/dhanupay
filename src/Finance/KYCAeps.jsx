import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function KYCAeps() {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFingerprintVerification = () => {
    // Simulate fingerprint verification
    setTimeout(() => {
      Swal.fire({
        title: 'Success',
        text: 'Retailer verified successfully for AEPS service.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Store verified state if needed
        localStorage.setItem('userAEPSKYCValid', 'true');
        setIsVerified(true);
        navigate(0); // Refresh page to redirect back to AEPSselect
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins">
      {/* Header */}
      <div className="pt-10 px-4 pb-2 text-gray-800">
        <div
          className="flex items-center mb-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">AEPS KYC</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-6 flex-1 gap-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6691/6691632.png"
          alt="Fingerprint"
          className="w-24 h-24 mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">
          AEPS KYC Required
        </h2>
        <p className="text-sm text-gray-600 max-w-sm">
          To access AEPS services, please verify your identity using your fingerprint.
        </p>

        <button
          onClick={handleFingerprintVerification}
          className="mt-6 w-full max-w-xs py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition"
        >
          Verify with Fingerprint
        </button>
      </div>

      {/* Footer padding */}
      <div className="px-6 pb-6"></div>
    </div>
  );
}

export default KYCAeps;
