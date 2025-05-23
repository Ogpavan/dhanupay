import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Dmt2() {
  const location = useLocation();
  const { selectedDMT } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bankName, setBankName] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showBankDropdown, setShowBankDropdown] = useState(false);

  const bankList = [
    "State Bank of India", "Punjab National Bank", "HDFC Bank", "ICICI Bank",
    "Axis Bank", "Bank of Baroda", "Canara Bank", "IDFC First Bank"
  ];

  const filteredBanks = bankList.filter(bank =>
    bank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBankSelect = (bank) => {
    setBankName(bank);
    setSearchTerm(bank);
    setShowBankDropdown(false);
  };

  const handleConfirm = () => {
    if (!bankName) {
      Swal.fire({
        title: "Alert",
        text: "Please select a bank before proceeding.",
        icon: "warning"
      });
      return;
    }

    if (accountNumber !== confirmAccountNumber) {
      Swal.fire({
        title: "Alert",
        text: "❗ Account numbers do not match!",
        icon: "warning"
      });
      return;
    }

    const formData = {
      BankName: bankName,
      Acount_HolderNAme: accountHolder,
      AcountNumber: accountNumber,
      IfscCode: ifscCode,
      mobileNumber: mobileNumber,
      selectedDMT: selectedDMT,
    };

    console.log("✅ Form Submitted:", formData);
    Swal.fire({
      title: "Success",
      text: "Form submitted successfully!",
      icon: "success"
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-poppins px-5 py-6">
      {/* Back Button */}
      <div className="flex items-center mb-6 cursor-pointer text-gray-700" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </div>

      <h2 className="text-xl font-semibold text-indigo-700 mb-6 text-center">Domestic Money Transfer 2</h2>

      {/* Form */}
      <form className="space-y-4">
        {/* Bank Name */}
        <div className="relative">
          <label className="text-sm block mb-1">Bank Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            placeholder="Search Bank..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowBankDropdown(true);
            }}
            onFocus={() => setShowBankDropdown(true)}
          />
          {showBankDropdown && filteredBanks.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredBanks.map((bank, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => handleBankSelect(bank)}
                >
                  {bank}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Other Fields */}
        <div>
          <label className="text-sm font-medium text-gray-600">Account Holder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Account Number</label>
          <input
            type="password"
            placeholder="123456789012"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Confirm Account Number</label>
          <input
            type="text"
            placeholder="Re-enter Account Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            value={confirmAccountNumber}
            onChange={(e) => setConfirmAccountNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">IFSC Code</label>
          <input
            type="text"
            placeholder="SBIN0001234"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Mobile Number</label>
          <input
            type="text"
            placeholder="9876543210"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition duration-200"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Dmt2;
