// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "./Pages/ForgetPassword";
import Dashboard from "./Pages/Dashboard";
import MPinScreen from "./Pages/MPinScreen";
import SignInScreen from "./Pages/SignInScreen";
import ResetMpinScreen from "./Pages/ResetMpinScreen";
import Signup from "../src/RegisterPages/BasicDetails";
import Home from "../src/Pages/Homescreen";
import BasicDetails from "./RegisterPages/BasicDetails";
import BusinessDetails from "./RegisterPages/BusinessDetails";
import ResidentialDetails from "./RegisterPages/ResidentialDetails";
import AadhaarDetails from "./RegisterPages/AadhaarDetails";
import PanDetails from "./RegisterPages/PanDetails";
import VideoKYC from "./RegisterPages/VideoKYC";
import KYCSucessScreen from "./Pages/KYCSucessScreen";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import ReportPage from "./Pages/ReportPage";
import ProfilePage from "./Pages/ProfilePage";
import Aeps1 from "./Finance/Aeps1";
import Aeps2 from "./Finance/Aeps2";
import CashDeposit from "./Finance/CashDeposit";
import Dmt1 from "./Finance/Dmt1";
import Dmt2 from "./Finance/Dmt2";
import Matm from "./Finance/Matm";
import MiniAtmTransactionPage from "./Finance/MiniAtmTransactionPage";
import WaterInvoice from "./QuickServices/waterbill/WaterInvoice";
import WaterBillFetch from "./QuickServices/waterbill/WaterBillFetch";
import WaterBill from "./QuickServices/waterbill/WaterBill";
import GasInvoice from "./QuickServices/gasbill/GasInvoice";
import GasBillFetch from "./QuickServices/gasbill/GasBillFetch";
import GasBill from "./QuickServices/gasbill/GasBill";
import ElectricityInvoice from "./QuickServices/electricitybill/ElectricityInvoice";
import ElectricityBillFetch from "./QuickServices/electricitybill/ElectricityBillFetch";
import ElectricityBill from "./QuickServices/electricitybill/ElectricityBill";
import MobileRecharge from "./QuickServices/MobileRecharge/MobileRecharge";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/basic-details" element={<BasicDetails />} />
        <Route path="/business-details" element={<BusinessDetails />} />
        <Route path="/residential-details" element={<ResidentialDetails />} />
        <Route path="/aadhaar-details" element={<AadhaarDetails />} />
        <Route path="/pan-details" element={<PanDetails />} />
        <Route path="/video-kyc" element={<VideoKYC />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<SignInScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-m-pin" element={<ResetMpinScreen />} />
        <Route path="/KYCSucessScreen" element={<KYCSucessScreen />} />
        <Route path="/MPinScreen" element={<MPinScreen />} />
        <Route path="/Logout" element={<MPinScreen />} />
        <Route path="/aeps1" element={<Aeps1 />} />
        <Route path="/aeps2" element={<Aeps2 />} />
        <Route path="/CashDeposit" element={<CashDeposit />} />
        <Route path="/Dmt1" element={<Dmt1 />} />
        <Route path="/Dmt2" element={<Dmt2 />} />
        <Route path="/Matm" element={<Matm />} />
        <Route path="/MiniAtmTransactionPage" element={<MiniAtmTransactionPage />} />


        //QuickServices
        <Route path="/mobilerecharge" element={<MobileRecharge />} />

        <Route path="/electricitybill" element={<ElectricityBill />} />
        <Route path="/electricitybillfetch" element={<ElectricityBillFetch />} />
        <Route path="/electricityinvoice" element={<ElectricityInvoice />} />

        <Route path="/gasbill" element={<GasBill />} />
        <Route path="/gasbillfetch" element={<GasBillFetch />} />
        <Route path="/gasinvoice" element={<GasInvoice />} />

        <Route path="/waterbill" element={<WaterBill />} />
        <Route path="/waterbillfetch" element={<WaterBillFetch />} />
        <Route path="/waterinvoice" element={<WaterInvoice />} />



        {/* Dashboard and its nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;