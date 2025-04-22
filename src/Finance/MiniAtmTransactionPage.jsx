import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import cashIcon from '../assets/cash-withdrawal.svg';
import balanceIcon from '../assets/balance-enquiry.svg';
import miniStatementIcon from '../assets/mini-statement.svg';
import Swal from 'sweetalert2';

function MiniAtmTransactionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedMachine = location.state?.selectedMachine || "Unknown";

  const [selectedTransaction, setSelectedTransaction] = useState('Cash Withdrawal');
  const [cardType, setCardType] = useState('Credit Card');
  const [amount, setAmount] = useState('');

  const quickAmounts = ['500', '1000', '1500', '2000', '5000'];

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const transactionOptions = [
    { name: 'Cash Withdrawal', icon: cashIcon },
    { name: 'Balance Enquiry', icon: balanceIcon },
    { name: 'Mini Statement', icon: miniStatementIcon },
  ];

  const handleConfirm = () => {
    const formData = {
      machine: selectedMachine,
      transactionType: selectedTransaction,
      cardType,
      amount,
    };
    console.log("Transaction Data:", formData);
    // alert(`Transaction Confirmed for ₹${amount} using ${cardType}`);
    Swal.fire({
      title: "Success",
      text: `Transaction Confirmed for ₹${amount} using ${cardType}`,
      icon: "success"
    });
  };

  const resetForm = () => {
    setAmount('');  // Reset amount
    setCardType('Credit Card');  // Reset card type to default
  };

  const handleTransactionChange = (transactionType) => {
    setSelectedTransaction(transactionType);
    resetForm(); // Reset form fields when transaction type changes
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-white font-poppins">

      {/* Header */}
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700"> Micro-ATM</span>
      </div>

      {/* Machine Type */}
      <div className="text-sm text-center text-gray-500 mb-6">
        <span className="font-semibold text-gray-800">Selected Machine:</span> {selectedMachine}
      </div>

      {/* Transaction Type */}
      <div className="mb-6">
        <h2 className="font-semibold text-base mb-3">Transaction Type</h2>
        <div className="flex gap-4">
          {transactionOptions.map((option) => (
            <div
              key={option.name}
              onClick={() => handleTransactionChange(option.name)}
              className={`flex flex-col items-center justify-center border-2 w-[100px] h-[100px] rounded-2xl shadow-sm cursor-pointer transition-all
              ${selectedTransaction === option.name ? 'bg-indigo-100' : 'bg-white'}`}
            >
              <img src={option.icon} alt={option.name} className="w-7 h-7 mb-2" />
              <p className={`text-sm font-medium text-center whitespace-pre-line ${selectedTransaction === option.name ? 'text-indigo-600' : 'text-gray-700'}`}>
                {option.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Card Type */}
      <div className="mb-6">
        <h2 className="font-semibold text-base mb-2">Card type</h2>
        <div className="flex items-center gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="cardType"
              value="Credit Card"
              checked={cardType === 'Credit Card'}
              onChange={(e) => setCardType(e.target.value)}
              className="accent-indigo-600"
            />
            <span className={`font-medium ${cardType === 'Credit Card' ? 'text-indigo-600' : 'text-gray-700'}`}>Credit Card</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="cardType"
              value="Debit Card"
              checked={cardType === 'Debit Card'}
              onChange={(e) => setCardType(e.target.value)}
              className="accent-indigo-600"
            />
            <span className={`font-medium ${cardType === 'Debit Card' ? 'text-indigo-600' : 'text-gray-700'}`}>Debit Card</span>
          </label>
        </div>
      </div>

      {/* Enter Amount - Only show for Cash Withdrawal */}
      {selectedTransaction === 'Cash Withdrawal' && (
        <div className="mb-6">
          <label className="text-sm block mb-2">Enter amount</label>
          <input
            type="number"
            placeholder="e.g. 500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
          />

          <div className="flex flex-wrap gap-3 mt-4">
            {quickAmounts.map((val) => (
              <button
                key={val}
                type="button"
                className="border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700"
                onClick={() => handleAmountClick(val)}
              >
                ₹ {val}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Confirm Button */}
      <button
        type="button"
        onClick={handleConfirm}
        className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800"
      >
        Confirm
      </button>
    </div>
  );
}

export default MiniAtmTransactionPage;
