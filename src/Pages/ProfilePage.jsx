import React, { useEffect, useState } from 'react';
import transactionsData from '../utils/transactions.json';
import { FaCog, FaArrowLeft } from 'react-icons/fa';
import { GoArrowDownLeft, GoArrowUpRight } from 'react-icons/go';
import profileImg from "../assets/icons/profile.svg";
import todayIcon from "../assets/todayIcon.svg";
import commissionIcon from "../assets/commissionIcon.svg";
import otherIcon from "../assets/otherIcon.svg";
import aepsWalletIcon from "../assets/icons/wallet.png";
import walletIcon from "../assets/icons/normalwallet.svg";
import { useNavigate } from "react-router-dom";
import ContactUsModal from '../utils/ContactUsModal';
import SettingModel from '../utils/SettingModel'; // Import the modal component

function ProfilePage() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [issettingModalOpen, setIssettingModalOpen] = useState(false); 
  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleOpensettingModal = () =>{
    setIssettingModalOpen(true);
  } 
  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseSettingModal = () => setIssettingModalOpen(false);

  return (
    <div className="bg-indigo-700 text-black pb-0 poppins-regular">
      {/* Top Bar */}
      <div className="p-4 text-white">
        <div className="flex items-center justify-between">
          <FaArrowLeft onClick={() => navigate("/dashboard/home")} className="text-xl" />
          <h1 className="text-lg poppins-semibold">Profile</h1>
          <FaCog onClick={handleOpensettingModal} className="text-xl" />
        </div>

        {/* Profile Section */}
        <div className="flex flex-row justify-evenly items-center mt-2">
          {/* Left: Profile Picture and User Info */}
          <div className="flex flex-col items-center border-r pr-4">
            <div className="relative">
              <img
                src={profileImg}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
            <div className="text-white text-center mt-2">
              <h2 className="text-xl poppins-bold">Radha Rani</h2>
              <p className="text-lg text-white/80 poppins-medium">25256363</p>
            </div>
          </div>

          {/* Right: Wallet Info */}
          <div className="mt-4 sm:mt-0 flex flex-col gap-2">
            <div className="flex items-center p-3 bg-white rounded-xl shadow">
              <img src={aepsWalletIcon} alt="AEPS" className="w-10 h-10 mr-4" />
              <div>
                <p className="text-xs sm:text-sm text-gray-600 poppins-regular">AEPS Wallet</p>
                <p className="font-bold text-black text-lg poppins-semibold">₹ 5382.23</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-white rounded-xl shadow">
              <img src={walletIcon} alt="Wallet" className="w-10 h-10 mr-4" />
              <div>
                <p className="text-xs sm:text-sm text-gray-600 poppins-regular">Incentive Wallet</p>
                <p className="font-bold text-black text-lg poppins-semibold">₹ 5382.23</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white rounded-t-3xl pt-6 pb-24 px-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white text-center py-4 rounded-xl shadow border">
            <img src={todayIcon} alt="Today" className="mx-auto w-12 h-12 mb-1 -mt-1" />
            <p className="text-sm text-gray-500 poppins-regular">Today<br /> AEPS</p>
            <p className="font-bold pt-1 poppins-semibold">₹ 5382.23</p>
          </div>
          <div className="bg-white text-center py-4 rounded-xl shadow border">
            <img src={commissionIcon} alt="Commission" className="mx-auto w-10 h-10 mb-1" />
            <p className="text-sm text-gray-500 poppins-regular">Total Commission</p>
            <p className="font-bold pt-1 poppins-semibold">₹ 5382.23</p>
          </div>
          <div className="bg-white text-center py-4 rounded-xl shadow border">
            <img src={otherIcon} alt="Other" className="mx-auto w-10 h-10 mb-1" />
            <p className="text-sm text-gray-500 poppins-regular">Other Transaction</p>
            <p className="font-bold pt-1 poppins-semibold">₹ 5382.23</p>
          </div>
        </div>

        {/* Transactions List */}
        <div>
          <h2 className="text-lg font-semibold mb-3 poppins-semibold">Recent Transactions</h2>
          <div className="space-y-3">
            {transactions.map((txn, idx) => {
              const isCredit = txn.amount.startsWith('+');
              const Icon = isCredit ? GoArrowDownLeft : GoArrowUpRight;

              return (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-gray-50 rounded-xl p-3 shadow-sm"
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${isCredit ? 'bg-green-100' : 'bg-purple-100'}`}>
                      <Icon className={`${isCredit ? 'text-green-600' : 'text-purple-600'}`} />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold poppins-medium">{txn.type}</p>
                      <p className="text-sm text-gray-500 poppins-light">{txn.date}</p>
                    </div>
                  </div>
                  <p className={`font-bold ${isCredit ? 'text-green-600' : 'text-red-600'} poppins-semibold`}>
                    ₹{txn.amount.replace('+', '').replace('-', '')}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-center mt-4 text-blue-500 font-medium poppins-medium">View more</p>
        </div>

        {/* Bottom Links */}
        <div className="mt-6 space-y-4 text-sm poppins-regular">
          <div className="flex justify-between items-center">
            <p className="font-medium">Submit Complaints</p>
            <FaArrowLeft className="rotate-180" />
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium">Privacy & Policy</p>
            <FaArrowLeft className="rotate-180" />
          </div>
          <div  onClick={handleOpenModal} className="flex justify-between items-center">
            <p className="font-medium">Contact Us</p>
            <FaArrowLeft className="rotate-180" />
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium text-red-600">Log Out</p>
            <FaArrowLeft className="rotate-180 text-red-600" />
          </div>
        </div>
      </div>

      {/* Contact Us Modal */}
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <SettingModel isOpen={issettingModalOpen} onClose={handleCloseSettingModal} />
    </div>
  );
}

export default ProfilePage;
