import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import Logout from "../assets/icons/Logout.svg"; // Make sure the path is correct
import locationIcon from "../assets/icons/location.svg"; // Adjust path if necessary
import { bbpsServices } from "../servicesData/servicesData"; // Import BBPS services from the centralized file

// Reusable Service Grid component (same as in HomePage.jsx)
const ServiceGrid = ({ services, isImage = true }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-5 text-center text-xs text-gray-700">
      {services.map((service, i) => (
        <div
          key={i}
          onClick={() => service.route && navigate(service.route)}
          className="flex flex-col items-center justify-center bg-gray-100 p-4  rounded-xl h-[90px] cursor-pointer hover:bg-gray-200 transition"
        >
          {isImage ? (
            <img src={service.icon} alt={service.label} className="w-10 h-10 mb-1" />
          ) : (
            <div className="text-xl mb-1">{service.icon}</div>
          )}
          <span className="text-[13px] text-center">{service.label}</span>
        </div>
      ))}
    </div>
  );
};

const BillPayment = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-indigo-700 font-poppins">
      {/* Top Bar */}
      <div className="px-5 pt-5 pb-10 text-white">
        <div className="flex items-center justify-between">
          {/* Back Arrow */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate(-1)} // Go back to the previous page
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          <h2 className="text-lg text-center font-semibold">Bill Payment</h2>
          </div>

          {/* Page Title */}
        </div>
      </div>

      {/* BBPS Services Section */}
      <div className="flex-1 bg-white rounded-t-3xl pb-24 py-3">
        <div className="mt-6 px-4">
          <ServiceGrid services={bbpsServices} />
        </div>
      </div>
    </div>
  );
};

export default BillPayment;
