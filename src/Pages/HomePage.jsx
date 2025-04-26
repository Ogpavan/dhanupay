import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerCarousel from "@/components/BannerCrausal"; // You may rename the component file to "BannerCarousel" if it's a typo

// Icons
import Youtube from "../assets/icons/youtube.svg";
import { IoIosNotifications } from "react-icons/io";
import Logout from "../assets/icons/Logout.svg";
import locationIcon from "../assets/icons/location.svg";
import aepsWalletIcon from "../assets/icons/wallet.png";
import walletIcon from "../assets/icons/normalwallet.svg";

// Service Data
// import {
//   financeServices,
//   quickServices,
//   bbpsServices,
// } from "../servicesData/servicesData"; // Centralized service data


import {
  Services,

  OtherServices,
} from "../servicesData/servicesData"; // Centralized service data
import Swal from "sweetalert2";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure want to logout ?',
      // text: 'Do you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with logout if confirmed
        navigate('/');
      }
    });
  };

  return (
    <div className="flex flex-col  bg-indigo-700 font-poppins">
      {/* Top Bar */}
      <div className="px-4 pb-4 text-white">
        <div className="flex items-center justify-between">
          {/* Profile Info */}
          <div className="flex items-center pt-3 gap-3">
            <img
            onClick={() => navigate("/dashboard/profile")}
              src="https://i.pravatar.cc/150?img=32"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-md font-semibold">Radha rani</div>
              <div className="text-xs">2525368</div>
              <div className="text-sm flex items-center">
                {/* <img src={locationIcon} alt="Location" className="w-3.5 h-3.5" /> */}
                Bareilly
              </div>
            </div>
          </div>

          {/* Top Right Icons */}
          <div className="flex items-center gap-3 text-xl">
            {/* <img
              src={Youtube}
              onClick={() => navigate("/Logout")}
              alt="YouTube"
              className="w-10 h-10"
            /> */}
            <IoIosNotifications
              // onClick={() => alert("clicked")}
              className="w-9 h-9 cursor-pointer"
            />
            <img
              src={Logout}
              onClick={handleLogout}
              alt="Logout"
              className="w-9 h-9"
            />
          </div>
        </div>

        {/* Wallet Balances */}
        <div className="flex justify-between bg-white rounded-xl px-2 py-2  mt-4 text-indigo-700 text-sm font-semibold">
          <div className="flex-1 text-center border-r mr-2 border-indigo-300">
            <div className="flex items-center justify-start gap-2">
              <img src={aepsWalletIcon} alt="Wallet" className="w-12 h-12" />
              <div className="flex flex-col">
                <div className="text-sm font-semibold whitespace-nowrap text-left text-indigo-700">
                  AEPS Wallet
                </div>
                <div className="text-base font-bold text-left text-black">
                  ₹ 5382.23
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex items-center justify-start gap-2">
              <img src={walletIcon} alt="Wallet" className="w-12 h-12" />
              <div className="flex flex-col ml-">
                <div className="text-sm font-semibold whitespace-nowrap text-left text-indigo-700">
                  Incentive Wallet
                </div>
                <div className="text-base font-bold text-left text-black">
                  ₹ 5382.23
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-t-3xl pb-24 py-3">
        {/* Banner / Slider */}
        <div className="overflow-hidden rounded-3xl h-36 p-2 pt-0">
          <BannerCarousel />
        </div>

        {/* Finance Section */}
        <Section title="Services">
          <ServiceGrid services={Services} isImage />
        </Section>

        {/* Quick Services */}
        {/* <Section title="Quick Services">
          <ServiceGrid services={quickServices} />
        </Section> */}

        {/* BBPS Services */}
        <Section title="Additional Services">
          <ServiceGrid services={OtherServices} />
        </Section>
      </div>
    </div>
  );
};

// Section Wrapper
const Section = ({ title, children }) => (
  <div className="mt-6 px-4">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold text-black">{title}</h2>
      {/* <span className="text-xs text-gray-500">View more ⌄</span> */}
    </div>
    {children}
  </div>
);

// Reusable Service Grid
const ServiceGrid = ({ services, isImage = true }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-4 text-center text-xs text-gray-700">
      {services.map((service, i) => (
        <div
          key={i}
          onClick={() => service.route && navigate(service.route)}
          className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-xl h-[90px] cursor-pointer hover:bg-gray-200 transition"
        >
          {isImage ? (
            <img src={service.icon} alt={service.label} className="w-8 h-8 mb-1" />
          ) : (
            <div className="text-xl mb-1">{service.icon}</div>
          )}
          <span className="text-[11px] text-center">{service.label}</span>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
