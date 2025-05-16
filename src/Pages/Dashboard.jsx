
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import { BiSolidReport } from 'react-icons/bi';
import { MdOutlineChat } from 'react-icons/md';
import EAgreementPopup from './EAgreementPopup'; // Import your Agreement Popup

const Dashboard = () => {
  const [showAgreement, setShowAgreement] = useState(false);
  const [user, setUser] = useState(null); // Simulating user state
  const location = useLocation();

  useEffect(() => {
    // Check if userlogincount is 1 and show the agreement popup
    const isesigndone = localStorage.getItem('isesigndone');
    if (isesigndone === 0) {
      setShowAgreement(true);
    }

    // Simulate fetching user data (could be from context, API, etc.)
    setUser({ id: 'user123' });

    window.scrollTo(0, 0);
  }, []);

  const handleAgreementAccepted = () => {
    localStorage.setItem('isesigndone', 1); // Update login count after agreement
    setShowAgreement(false); // Hide the agreement popup
  };

  return (
    <div className="flex flex-col font-poppins">
      {showAgreement && user ? (
        <EAgreementPopup user={user} onAgree={handleAgreementAccepted} />
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

