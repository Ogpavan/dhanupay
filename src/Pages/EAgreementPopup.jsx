import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EAgreementPopup({ user, onAgree }) {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [hasAgreed, setHasAgreed] = useState(false); // State for agreement status

  useEffect(() => {
    // Check if the user has already agreed
    const agreementStatus = localStorage.getItem(`agreement_signed_${user?.id}`);
    if (!agreementStatus) {
      setShowPopup(true);
    } else {
      onAgree(); // Proceed to dashboard if already agreed
    }
  }, [user, onAgree]);

  const handleAgree = () => {
    if (isChecked) {
      localStorage.setItem(`agreement_signed_${user?.id}`, 'true');
      setShowPopup(false);
      onAgree(); // Allow dashboard access
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 h-[100%] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg mx-4  h-[90%]  rounded-lg shadow-lg p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-center">E-Agreement for Dhanu Pay</h2>

        <div className="border p-3 mb-4 h-[65vh] overflow-y-auto text-sm text-gray-700 rounded">
          <p className="mb-2 font-semibold">User Terms and Conditions</p>

          <p className="mb-2">
            By accessing and using Dhanu Pay services, you (“the User”) agree to the following terms and conditions,
            which govern your use of the platform. Dhanu Pay is a financial technology platform offering services
            including but not limited to: Aadhaar Enabled Payment System (AEPS), money transfer, mobile/DTH recharge,
            bill payment, PAN services, insurance, and loan facilitation.
          </p>

          <p className="mb-2">
            <strong>1. KYC & Compliance:</strong> You agree to complete full KYC verification and provide valid identity
            documents before using any financial service. False or misleading information may lead to account suspension
            and legal action.
          </p>

          <p className="mb-2">
            <strong>2. User Responsibility:</strong> You are solely responsible for the security of your login credentials
            and any transactions made through your account. In case of suspicious activity, report to
            support@dhanupay.in immediately.
          </p>

          <p className="mb-2">
            <strong>3. Service Usage:</strong> You agree to use Dhanu Pay services for lawful and legitimate purposes
            only. Any misuse including fraudulent transactions, impersonation, or system abuse is strictly prohibited.
          </p>

          <p className="mb-2">
            <strong>4. Settlement & Disputes:</strong> Settlement of transactions may depend on banking and regulatory
            timelines. Any disputes must be raised within 3 business days from the date of transaction.
          </p>

          <p className="mb-2">
            <strong>5. Changes to Terms:</strong> Dhanu Pay reserves the right to modify this agreement at any time.
            Continued use of the services after changes constitutes acceptance of the revised terms.
          </p>

          <p className="mb-2">
            By clicking “I Agree”, you confirm that you have read, understood, and accepted the terms outlined in this
            agreement and will comply with all applicable laws and platform policies.
          </p>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agreementCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="agreementCheckbox" className="text-sm text-gray-700">
            I have read and agree to the Terms and Conditions
          </label>
        </div>

        <button
          onClick={handleAgree}
          className={`w-full py-2 rounded-lg text-white ${isChecked ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          disabled={!isChecked} // Disable button if checkbox is not checked
        >
          I Agree and Continue
        </button>
      </div>
    </div>
  );
}

export default EAgreementPopup;
