import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import cashIcon from '../assets/cash-withdrawal.svg';
import balanceIcon from '../assets/balance-enquiry.svg';
import miniStatementIcon from '../assets/mini-statement.svg';
import faceIcon from '../assets/face.svg';
import fingerprintIcon from '../assets/Fingerprint.svg';
import retinaIcon from '../assets/retina.svg';
import Swal from 'sweetalert2';
import { Eye, EyeOff } from 'lucide-react';

// Mocked bank list
const bankList = [
    "State Bank of India", "Punjab National Bank", "HDFC Bank", "ICICI Bank",
    "Axis Bank", "Bank of Baroda", "Canara Bank", "IDFC First Bank"
];

function Aeps2() {
    const location = useLocation();
    const { selectedAEPS } = location.state || {};
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedMethod, setSelectedMethod] = useState("Fingerprint");
    const [selectedTransaction, setSelectedTransaction] = useState('Cash Withdrawal');
    const [amount, setAmount] = useState('');
    const [bankName, setBankName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showBankDropdown, setShowBankDropdown] = useState(false);

    const [aadhaar, setAadhaar] = useState('');
    const [maskedAadhaar, setMaskedAadhaar] = useState('');
    const [showAadhaar, setShowAadhaar] = useState(false);

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

    const filteredBanks = bankList.filter(bank =>
        bank.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBankSelect = (bank) => {
        setBankName(bank);
        setSearchTerm(bank);
        setShowBankDropdown(false);
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 12);
        setAadhaar(value);

        let masked = '';
        if (value.length < 9) {
            masked = 'X'.repeat(value.length);
        } else {
            masked = 'X'.repeat(8) + value.slice(8);
        }

        setMaskedAadhaar(masked);
    };

    const toggleAadhaarVisibility = () => {
        setShowAadhaar(!showAadhaar);
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

        const formData = {
            transactionType: selectedTransaction,
            bankName,
            aadhaarNumber: aadhaar,
            mobileNumber,
            amount: selectedTransaction === 'Cash Withdrawal' ? amount : '',
            biometricMethod: selectedMethod,
            SelectedAEPS: selectedAEPS,
        };

        console.log("Form Submitted:", formData);
        Swal.fire({
            title: "Success",
            text: "Transaction Confirmed",
            icon: "success"
        });
    };

    useEffect(() => {
        setAmount('');
        setMobileNumber('');
    }, [selectedTransaction]);

    return (
        <div className="min-h-screen font-poppins bg-white px-4 py-6">
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
                            ${selectedTransaction === option.name ? 'bg-indigo-100' : 'bg-white'}`}
                        >
                            <img src={option.icon} alt={option.name} className="w-7 h-7 mb-2" />
                            <p className={`text-sm font-medium text-center ${selectedTransaction === option.name ? 'text-indigo-600' : 'text-gray-700'}`}>
                                {option.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <form className="space-y-4">
                {/* Bank Search */}
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

                {/* Aadhaar Input with Masking */}


                <div>
                    <label className="block mb-2 text-sm font-medium">Aadhaar Number</label>

                    {/* Container with conditional background */}
                    <div className={`relative w-full rounded-xl ${maskedAadhaar ? 'bg-white' : ''}`}>
                        {/* Masked or plain Aadhaar display */}
                        {!showAadhaar && (
                            <div className="absolute inset-0 flex items-center px-4 py-2 pointer-events-none text-black tracking-widest text-lg">
                                {maskedAadhaar}
                            </div>
                        )}

                        {/* Transparent input behind mask */}
                        <input
                            type="text"
                            inputMode="numeric"
                            value={aadhaar}
                            onChange={handleChange}
                            placeholder="Enter aadhaar number"
                            className={`w-full border border-gray-300 rounded-xl px-4 py-2 tracking-widest text-lg ${showAadhaar ? 'text-black' : 'text-transparent'} caret-black bg-transparent`}
                        />

                        {/* Eye toggle button */}
                        {aadhaar && (
                            <button
                                type="button"
                                onClick={() => setShowAadhaar(!showAadhaar)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                            >
                                {showAadhaar ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        )}
                    </div>

                    {/* <p className="mt-2 text-sm text-gray-600">Digits entered: {aadhaar.length}</p> */}
                </div>

                {/* Mobile Number */}
                <div>
                    <label className="text-sm block mb-1">Mobile number</label>
                    <input
                        type="text"
                        placeholder="Ente 10 digit mobile number"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>

                {/* Amount Input */}
                {selectedTransaction === 'Cash Withdrawal' && (
                    <div>
                        <label className="text-sm block mb-1">Amount</label>
                        <input
                            type="text"
                            placeholder="Enter amount"  
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        />
                    </div>
                )}

                {/* Biometric Options */}
                <div className="flex justify-around py-2">
                    {biometricOptions.map((method) => (
                        <div
                            key={method.name}
                            className={`flex flex-col items-center text-sm cursor-pointer p-2 h-[100px] w-[100px] rounded-xl border-2 transition ${selectedMethod === method.name ? 'border-indigo-600 text-indigo-600' : 'border-gray-300 text-gray-500'}`}
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
