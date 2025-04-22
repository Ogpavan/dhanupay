import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import cashIcon from '../assets/cash-withdrawal.svg';
import balanceIcon from '../assets/balance-enquiry.svg';
import miniStatementIcon from '../assets/mini-statement.svg';
import faceIcon from '../assets/face.svg';
import fingerprintIcon from '../assets/Fingerprint.svg';
import retinaIcon from '../assets/retina.svg';
import Swal from 'sweetalert2';

function Aeps2() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();

    const [selectedMethod, setSelectedMethod] = useState("Fingerprint");
    const [selectedTransaction, setSelectedTransaction] = useState('Cash Withdrawal');
    const [amount, setAmount] = useState('');
    const [bankName, setBankName] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [addCommission, setAddCommission] = useState('');

    const getCommission = () => {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0) return null;
        if (num <= 1000) return 10;
        return (num * 0.01).toFixed(2);
    };

    const commission = getCommission();

    const biometricOptions = [
        { name: "Face", icon: faceIcon },
        { name: "Fingerprint", icon: fingerprintIcon },
        { name: "Retina", icon: retinaIcon },
    ];

    const transactionOptions = [
        { name: 'Cash Withdrawal', icon: cashIcon },
        { name: 'Balance Enquiry', icon: balanceIcon },
        { name: 'Mini Statement', icon: miniStatementIcon },
    ];

    const handleConfirm = () => {
        if (bankName === '') {
            // alert('Please select a bank before proceeding.');
            Swal.fire({
                title: "Alert",
                text: "Please select a bank before proceeding.",
                icon: "warning"
              });
            return; // Prevent form submission if no bank is selected
        }
        const formData = {
            transactionType: selectedTransaction,
            bankName,
            aadhaarNumber,
            mobileNumber,
            amount: selectedTransaction === 'Cash Withdrawal' ? amount : '',
            commission: selectedTransaction === 'Cash Withdrawal' ? commission : '',
            addCommission: selectedTransaction === 'Cash Withdrawal' ? addCommission : '',
            biometricMethod: selectedMethod,
        };

        console.log("Form Submitted:", formData);
        // alert("Transaction Confirmed");
        Swal.fire({
            title: "Success",
            text: "Transaction Confirmed ",
            icon: "success"
          });
    };

    // Reset the form when the selected transaction type changes
    useEffect(() => {
        setAmount('');
        setAddCommission('');
        setAadhaarNumber('');
        setMobileNumber('');
    }, [selectedTransaction]);

    return (
        <div className="min-h-screen font-poppins bg-white px-4 py-6">

            {/* Header */}
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">AEPS 2</span>
            </div>

            {/* Transaction Type */}
            <div className="mb-6">
                <h2 className="font-semibold text-base mb-3">Transaction Type</h2>
                <div className="flex gap-4">
                    {transactionOptions.map((option) => (
                        <div
                            key={option.name}
                            onClick={() => setSelectedTransaction(option.name)}
                            className={`flex flex-col items-center justify-center border-2 w-[100px] h-[100px] rounded-2xl shadow-sm cursor-pointer transition-all
                            ${selectedTransaction === option.name ? 'bg-indigo-100' : 'bg-white'}
                        `}
                        >
                            <img src={option.icon} alt={option.name} className="w-7 h-7 mb-2" />
                            <p className={`text-sm font-medium text-center whitespace-pre-line ${selectedTransaction === option.name ? 'text-indigo-600' : 'text-gray-700'}`}>
                                {option.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
                <div>
                    <label className="text-sm block mb-1">Bank name</label>
                    <select
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                    >
                        <option value="" disabled>Select Bank</option> {/* Default option */}
                        <option value="Punjab National Bank">Punjab National Bank</option>
                        <option value="State Bank of India">State Bank of India</option>
                        <option value="HDFC Bank">HDFC Bank</option>
                    </select>
                </div>


                <div>
                    <label className="text-sm block mb-1">Aadhaar number</label>
                    <input
                        type="text"
                        placeholder="5064 7363 3872"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        value={aadhaarNumber}
                        onChange={(e) => setAadhaarNumber(e.target.value)}
                    />
                </div>

                <div>
                    <label className="text-sm block mb-1">Mobile number</label>
                    <input
                        type="text"
                        placeholder="0123456789"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>

                {/* Amount and Commission - Only for Cash Withdrawal */}
                {selectedTransaction === 'Cash Withdrawal' && (
                    <>
                        <div>
                            <label className="text-sm block mb-1">Amount</label>
                            <input
                                type="text"
                                placeholder="₹ 1000"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            />
                            {commission && (
                                <p className="text-red-600 text-xs mt-1">
                                    Commission Amount = ₹{commission}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm block mb-1">Add Commission (₹0 – ₹10)</label>
                            <input
                                type="text"
                                placeholder="₹ 10"
                                value={addCommission}
                                onChange={(e) => setAddCommission(e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            />
                        </div>
                    </>
                )}

                {/* Biometric Selection */}
                <div className="flex justify-around py-2">
                    {biometricOptions.map((method) => (
                        <div
                            key={method.name}
                            className={`flex flex-col items-center text-sm cursor-pointer p-2 h-[100px] w-[100px] rounded-xl border-2 transition ${selectedMethod === method.name
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-gray-300 text-gray-500'
                                }`}
                            onClick={() => setSelectedMethod(method.name)}
                        >
                            <img src={method.icon} alt={method.name} className="w-14 h-14 mb-1" />
                            <span>{method.name}</span>
                        </div>
                    ))}
                </div>

                {/* Confirm Button */}
                <button
                    type="button"
                    onClick={handleConfirm}
                    className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
}

export default Aeps2;
