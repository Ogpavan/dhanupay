
// import Dashboard from "./Pages/Dashboard"
// import ForgetPassword from "./Pages/ForgetPassword"
// import MPinScreen from "./Pages/MPinScreen"
// import ResetMpinScreen from "./Pages/ResetMpinScreen"
// import SignInScreen from "./Pages/SignInScreen"
// import SuccessScreen from "./Pages/sucessScreen"

// function App() {
//   return (
//     // <div className="flex items-center justify-center min-h-screen">
//     //   <Button>Click me</Button>
//     // </div>

//     // <MPinScreen/>
//     // <SignInScreen/>
//     <Dashboard/>
//     // <ResetMpinScreen/>
//     // <div>
//     //   <SuccessScreen title="Transaction successful!" message="Your M-PIN Has Been Changed successfully " />
//     // </div>
//     // <ForgetPassword/>
//   )
// }

// export default App


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
import Sucessfull from "./pages/SucessScreen";
import BasicDetails from "./RegisterPages/BasicDetails";
import BusinessDetails from "./RegisterPages/BusinessDetails";
import ResidentialDetails from "./RegisterPages/ResidentialDetails";
import AadhaarDetails from "./RegisterPages/AadhaarDetails";
import PanDetails from "./RegisterPages/PanDetails";
import VideoKYC from "./RegisterPages/VideoKYC";



function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forget-m-pin" element={<ResetMpinScreen />} />
        <Route path="/Sucessfull" element={<Sucessfull />} />
        <Route path="/MPinScreen" element={<MPinScreen />} />
        <Route path="/Logout" element={<MPinScreen />} />
      </Routes>
    </Router>
  );
}

export default App;