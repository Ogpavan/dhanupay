// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaWallet, FaBolt, FaUserCircle } from "react-icons/fa";
// import {
//   MdOutlinePowerSettingsNew,
//   MdPhoneIphone,
//   MdWaterDrop,
//   MdGasMeter,
// } from "react-icons/md";
// import { AiFillCreditCard } from "react-icons/ai";
// import BannerCarousel from "@/components/BannerCrausal";

// import financeaeps1 from "../assets/icons/fingerprint 1-1.svg";
// import financeaeps2 from "../assets/icons/fingerprint 1.svg";
// import financeaeps4 from "../assets/icons/Group 612.svg";
// import financeaeps5 from "../assets/icons/Image19.svg";
// import dBt1 from "../assets/icons/dBt1.svg";
// import Youtube from "../assets/icons/youtube.svg";
// import Logout from "../assets/icons/Logout.svg";
// import locationIcon from "../assets/icons/location.svg";
// import aepsWalletIcon from "../assets/icons/wallet.png";
// import walletIcon from "../assets/icons/normalwallet.svg";
// import MobilePrepaid from "../assets/icons/MobilePrepaid.svg";
// import Home from "../assets/icons/Home.svg";
// import loanreyapment from "../assets/icons/loanreyapment.svg";
// import dthrecharge from "../assets/icons/dthrecharge.svg";
// import postpaidmobile from "../assets/icons/MobilePrepaid.svg";
// import broadband from "../assets/icons/broadband.svg";
// import fastag from "../assets/icons/fastag.svg";
// import Insurance_premium from "../assets/icons/insurance_premium.svg";
// import educationfee from "../assets/icons/educationfee.svg";
// import creditcard from "../assets/icons/creditcard.svg";
// import GasBill from "../assets/icons/GasBill.svg";
// import WaterBill from "../assets/icons/WaterBill.svg";
// import electricityBill from "../assets/icons/electricityBill.svg";
// import search from "../assets/icons/search.svg";
// import report from "../assets/icons/report.svg";
// import profile from "../assets/icons/profile.svg";
// // import  from "../assets/icons/.svg";
// // import  from "../assets/icons/.svg";



// const Dashboard = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col h-screen mb-[38vh] bg-indigo-700 font-poppins">
//       {/* Top Bar */}
//       <div className="px-4 pb-4 text-white">
//         <div className="flex items-center justify-between">
//           {/* Profile Info */}
//           <div className="flex items-center pt-3 gap-3">
//             <img
//               src="https://i.pravatar.cc/150?img=32"
//               alt="profile"
//               className="w-12 h-12 rounded-full"
//             />
//             <div>
//               <div className="text-sm font-semibold">Push Puttichai</div>
//               <div className="text-xs">2525368</div>
//               <div className="text-xs flex items-center ">
//                 <img
//                   src={locationIcon}
//                   alt="Location"
//                   className="w-3.5 h-3.5"
//                 />
//                 Bareilly
//               </div>
//             </div>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center gap-3 text-xl">
//             <img src={Youtube} onClick={() => navigate("/Logout")} alt="YouTube" className="w-12 h-12" />
//             <img src={Logout} onClick={() => navigate("/")} alt="Logout" className="w-10 h-10" />
//           </div>
//         </div>

//         {/* Balances */}
//         <div className="flex justify-between bg-white rounded-xl px-3 py-2 mt-4 text-indigo-700 text-sm font-semibold">
//           <div className="flex-1 text-center border-r border-indigo-300">
//             <div className="flex items-center justify-start gap-3">
//               <img src={aepsWalletIcon} alt="Wallet" className="w-12 h-12" />
//               <div className="flex flex-col">
//                 <div className="text-sm font-semibold text-left text-indigo-700">AEPS Balance</div>
//                 <div className="text-base font-bold text-left text-black">₹ 5382.23</div>
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 text-center">
//             <div className="flex items-center justify-start gap-3">
//               <img src={walletIcon} alt="Wallet" className="w-12 h-12" />
//               <div className="flex flex-col ">
//                 <div className="text-sm font-semibold text-left text-indigo-700">Wallet Balance</div>
//                 <div className="text-base font-bold text-left text-black">₹ 5382.23</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* White Section with Rounded Top */}
//       <div className="flex-1 bg-white rounded-t-3xl py-3">
//         {/* Slider / Banner */}
//         <div className="overflow-hidden rounded-3xl h-36 p-2 pt-0">
//           <BannerCarousel />
//         </div>

//         {/* Finance Section */}
//         <Section title="Finance">
//           <ServiceGrid
//             services={[
//               { label: "AEPS-1", icon: financeaeps1 },
//               { label: "AEPS-2", icon: financeaeps2 },
//               { label: "M-ATM", icon: financeaeps4 },
//               { label: "DMT-1", icon: dBt1 },
//               { label: "DMT-2", icon: dBt1 },
//               { label: "Cash Deposit", icon: financeaeps5 },
//             ]}
//             isImage
//           />
//         </Section>

//         {/* Quick Services */}
//         <Section title="Quick Services">
//           <ServiceGrid
//             services={[
//               { label: "Mobile prepaid", icon: MobilePrepaid },
//               { label: "Electricity bill", icon: electricityBill },
//               { label: "Water bill", icon: WaterBill },
//               { label: "Gas bill", icon: GasBill },
//             ]}
//           />
//         </Section>

//         {/* BBPS Services */}
//         <Section title="BBPS">
//           <ServiceGrid
//             services={[
//               { label: "Credit card", icon: creditcard },
//               { label: "Education Fee", icon: educationfee },
//               { label: "Insurance Premium", icon: Insurance_premium },
//               { label: "Fast Tag", icon: fastag },
//               { label: "Broadband", icon: broadband },
//               { label: "Postpaid", icon: postpaidmobile },
//               { label: "DTH", icon: dthrecharge },
//               { label: "Loan Repayment", icon: loanreyapment },
//             ]}
//           />
//         </Section>

//         {/* Bottom Navigation */}
//         <div className="fixed bottom-0 w-full bg-white shadow-md border-t px-6 py-2 flex justify-between items-center text-sm text-gray-600">
//   <NavIcon label="Home" icon={Home} route="/dashboard/home" active />
//   <NavIcon label="Search" icon={search} route="/dashboard/search" />
//   <NavIcon label="Report" icon={report} route="/dashboard/report" />
//   <NavIcon label="Profile" icon={profile} route="/dashboard/profile" />
// </div>

//       </div>
//     </div>
//   );
// };

// // Section Component
// const Section = ({ title, children }) => (
//   <div className="mt-6 px-4">
//     <div className="flex justify-between items-center mb-2">
//       <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
//       <span className="text-xs text-gray-500">View more ⌄</span>
//     </div>
//     {children}
//   </div>
// );

// // Grid Component
// const ServiceGrid = ({ services, isImage = true }) => (
//   <div className="grid grid-cols-4 gap-4 text-center text-xs text-gray-700">
//     {services.map((service, i) => (
//       <div
//         key={i}
//         className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-xl h-[90px]"
//       >
//         {isImage ? (
//           <img src={service.icon} alt={service.label} className="w-8 h-8 mb-1" />
//         ) : (
//           <div className="text-xl mb-1">{service.icon}</div>
//         )}
//         <span className="text-[11px] text-center">{service.label}</span>
//       </div>
//     ))}
//   </div>
// );

// // Bottom Navigation Icon
// const NavIcon = ({ label, icon, active, route }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className={`flex flex-col items-center ${active ? "text-indigo-700" : ""}`}
//       onClick={() => navigate(route)}
//     >
//       <img src={icon} alt={label} className="w-6 h-6 mb-1" />
//       <span className="text-xs">{label}</span>
//     </div>
//   );
// };



// export default Dashboard;



import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Home from "../assets/icons/Home.svg";
import search from "../assets/icons/search.svg";
import report from "../assets/icons/report.svg";
import profile from "../assets/icons/profile.svg";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col font-poppins">
      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white shadow-md border-t px-6 py-2 flex justify-between items-center text-sm text-gray-600">
        <NavIcon label="Home" icon={Home} route="/dashboard/home" active={location.pathname === "/dashboard/home"} />
        <NavIcon label="Search" icon={search} route="/dashboard/search" active={location.pathname === "/dashboard/search"} />
        <NavIcon label="Report" icon={report} route="/dashboard/report" active={location.pathname === "/dashboard/report"} />
        <NavIcon label="Profile" icon={profile} route="/dashboard/profile" active={location.pathname === "/dashboard/profile"} />
      </div>
    </div>
  );
};

const NavIcon = ({ label, icon, route, active }) => {
  const navigate = useNavigate();
  const activeColor = active ? "text-indigo-700" : "text-gray-600";

  return (
    <div
      className={`flex flex-col items-center cursor-pointer ${activeColor}`}
      onClick={() => navigate(route)}
    >
      <img src={icon} alt={label} className={`w-6 h-6 mb-1 ${active ? "filter brightness-0 saturate-100 invert-14 sepia-79 hue-rotate-199 contrast-94" : ""}`} />
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default Dashboard;
