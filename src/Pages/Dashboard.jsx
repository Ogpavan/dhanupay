
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import { BiSolidReport } from 'react-icons/bi';
import { MdOutlineChat } from 'react-icons/md';
import EAgreementPopup from './EAgreementPopup'; // Import your Agreement Popup
import axios from 'axios';

const Dashboard = () => {
  const [showAgreement, setShowAgreement] = useState("");
  const [user, setUser] = useState(null); // Simulating user state
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('Token');
    const eSignStatus = localStorage.getItem('eSignStatus');
    setShowAgreement(eSignStatus.toLowerCase());
    const userId = localStorage.getItem('UserId');


    if (eSignStatus.toLowerCase() === "pending") {
      // setShowAgreement(true);

      axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/esign/request`,
        {
          UserId: userId,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )  
        .then(response => {
          console.log("eSign Response:", response.data);
          console.log("eSign Response signedUrl:", response.data?.signedUrl);
          const signedUrl = response.data?.signedUrl;
          console.log("eSign Response signedUrl variable:", signedUrl);
          if (signedUrl) {
            // Redirect to the signed URL
            // window.location.href = signedUrl;
          } else {
            console.error("signedUrl not found in response:", response.data);
          }
        })
        .catch(error => {
          console.error("Error calling eSign API:", error);
        });
    }
    window.scrollTo(0, 0);
  }, []);

  // const handleAgreementAccepted = () => {
  //   localStorage.setItem('isesigndone', " 1"); // Update login count after agreement
  //   setShowAgreement(false); // Hide the agreement popup
  // };

  return (
    <div className="flex flex-col font-poppins">
      {showAgreement==="pending" && user ? (
        // <EAgreementPopup user={user} onAgree={handleAgreementAccepted} />
        <h1 className='text-center text-3xl'>eSign Pending <span>redirecting to esign page ...</span></h1>
      ) : (
        <>
          {/* Main Content */}
          <div className="flex-1">
            <Outlet />
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 w-full bg-white shadow-md border-t px-6 py-2 flex justify-between items-center text-sm text-gray-600">
            <NavIcon label="Home" icon={GrHomeRounded} route="/dashboard/home" active={location.pathname === "/dashboard/home"} />
            <NavIcon label="Search" icon={FaSearch} route="/dashboard/search" active={location.pathname === "/dashboard/search"} />
            <NavIcon label="Report" icon={BiSolidReport} route="/dashboard/report" active={location.pathname === "/dashboard/report"} />
            <NavIcon label="Chat" icon={MdOutlineChat} route="/dashboard/chat" active={location.pathname === "/dashboard/chat"} />
          </div>
        </>
      )}
    </div>
  );
};

const NavIcon = ({ label, icon: Icon, route, active }) => {
  const navigate = useNavigate();
  const activeColor = active ? "text-indigo-700" : "text-gray-600";  // Active/inactive color

  return (
    <div
      className={`flex flex-col items-center cursor-pointer ${activeColor}`}
      onClick={() => navigate(route)}
    >
      <Icon className={`w-6 h-6 mb-1 ${active ? "text-indigo-700" : "text-gray-600"}`} />
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default Dashboard;

