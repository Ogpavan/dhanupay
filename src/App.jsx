// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ForgetPassword from "./Pages/ForgetPassword";
// import Dashboard from "./Pages/Dashboard";
// import MPinScreen from "./Pages/MPinScreen";
// import SignInScreen from "./Pages/SignInScreen";
// import ResetMpinScreen from "./Pages/ResetMpinScreen";
// import Signup from "../src/RegisterPages/BasicDetails";
// import Home from "../src/Pages/Homescreen";
// import BasicDetails from "./RegisterPages/BasicDetails";
// import BusinessDetails from "./RegisterPages/BusinessDetails";
// import ResidentialDetails from "./RegisterPages/ResidentialDetails";
// import AadhaarDetails from "./RegisterPages/AadhaarDetails";
// import PanDetails from "./RegisterPages/PanDetails";
// import VideoKYC from "./RegisterPages/VideoKYC";
// import KYCSucessScreen from "./Pages/KYCSucessScreen";
// import HomePage from "./Pages/HomePage";
// import SearchPage from "./Pages/SearchPage";
// import ReportPage from "./Pages/ReportPage";
// import ProfilePage from "./Pages/ProfilePage";
// import Aeps1 from "./Finance/Aeps1";
// import Aeps2 from "./Finance/Aeps2";
// import CashDeposit from "./Finance/CashDeposit";
// import Dmt1 from "./Finance/Dmt1";
// import Dmt2 from "./Finance/Dmt2";
// import Matm from "./Finance/Matm";
// import MiniAtmTransactionPage from "./Finance/MiniAtmTransactionPage";
// import WaterInvoice from "./QuickServices/waterbill/WaterInvoice";
// import WaterBillFetch from "./QuickServices/waterbill/WaterBillFetch";
// import WaterBill from "./QuickServices/waterbill/WaterBill";
// import GasInvoice from "./QuickServices/gasbill/GasInvoice";
// import GasBillFetch from "./QuickServices/gasbill/GasBillFetch";
// import GasBill from "./QuickServices/gasbill/GasBill";
// import ElectricityInvoice from "./QuickServices/electricitybill/ElectricityInvoice";
// import ElectricityBillFetch from "./QuickServices/electricitybill/ElectricityBillFetch";
// import ElectricityBill from "./QuickServices/electricitybill/ElectricityBill";
// import MobileRecharge from "./QuickServices/MobileRecharge/MobileRecharge";
// import EAgreementPopup from "./Pages/EAgreementPopup";



// // Report sub-pages
// // import Dailyreport from "../src/Pages/reports/Dailyreport";
// // import MoneyTransferreport from "./Pages/reports/MoneyTransferextra";
// // import Rechargereport from "./pages/reports/Recharge";
// // import AadhaarATMreport from "./pages/reports/AadhaarATM";
// // import BillPaymentsreport from "./pages/reports/BillPayments";
// // import TrainBookingreport from "./Pages/reports/TrainBookingextra";

// import { reports } from '../src/servicesData/reportsData';
// import CreditCardBillPayment from "./BBPS/CreditCard/CreditCard";
// import CreditCardFetch from "./BBPS/CreditCard/CreditCardFetch";
// import EducationFee from "./BBPS/Educationbill/EducationFee";
// import EducationFeeFetch from "./BBPS/Educationbill/EducationFeeFetch";
// import InsurancePremium from "./BBPS/Insurance/InsurancePremium";
// import InsurancePremiumFetch from "./BBPS/Insurance/InsurancePremiumFetch";
// import Broadband from "./BBPS/Broadbandbill/Broadband";
// import BroadbandFetch from "./BBPS/Broadbandbill/BroadbandFetch";
// import LoanRepayment from "./BBPS/LoanRepayment/LoanRepayment";
// import LoanRepaymentFetch from "./BBPS/LoanRepayment/LoanRepaymentFetch";
// import DTHPayment from "./BBPS/DTH/DTHPayment";
// import DTHPaymentFetch from "./BBPS/DTH/DTHPaymentFetch";
// import PostpaidMobile from "./BBPS/Postpaid/Postpaid";
// import PostpaidFetch from "./BBPS/Postpaid/PostpaidFetch";
// import FastagRechargeFetch from "./BBPS/Fastag/FastagRechargeFetch";
// import FastagRecharge from "./BBPS/Fastag/FastagRecharge";
// import Chat from "./Pages/Chat";
// import AEPSselect from "./Finance/AEPSselect";
// import DMTselect from "./Finance/DMTselect";
// //coming soon
// import ComingSoon from './Pages/ComingSoon';
// import BillPayment from "./Pages/BillPayment";
// import AadhaarPay from "./Finance/AadhaarPay";
// import MoveToBankSelect from "./Finance/MoveToBankSelect";
// import LifeInsurance from "./Pages/services pages/LifeInsurance";
// import AllMotorInsurance from "./Pages/services pages/AllMotorInsurance";
// import HealthInsurance from "./Pages/services pages/HealthInsurance";
// import Loan from "./Pages/services pages/Loan";
// import OtpPage from "./Pages/OtpPage";
// import SetMpinScreen from "./Pages/setMpinScreen";




// function App() {
//   return (
//     <Router>
//       <Routes>

//         {reports.map((report, index) => (
//           <Route key={index} path={report.route} element={<report.component />} />
//         ))}
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/coming-soon" element={<ComingSoon />} />
//         <Route path="/HealthInsurance" element={<HealthInsurance />} />
//         <Route path="/MotorInsurance" element={<AllMotorInsurance />} />
//         <Route path="/LifeInsurance" element={<LifeInsurance />} />
//         <Route path="/Loan" element={<Loan />} />
//         <Route path="/EAgreement" element={<EAgreementPopup />} />

//         <Route path="/Billpayment" element={<BillPayment />}/>
//         <Route path="/basic-details" element={<BasicDetails />} />
//         <Route path="/business-details" element={<BusinessDetails />} />
//         <Route path="/residential-details" element={<ResidentialDetails />} />
//         <Route path="/aadhaar-details" element={<AadhaarDetails />} />
//         <Route path="/pan-details" element={<PanDetails />} />
//         <Route path="/video-kyc" element={<VideoKYC />} />
//         <Route path="/forget-password" element={<ForgetPassword />} />
//         <Route path="/login" element={<SignInScreen />} />
//         <Route path="/otp" element={<OtpPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forget-m-pin" element={<ResetMpinScreen />} />
//         <Route path="/KYCSucessScreen" element={<KYCSucessScreen />} />
//         <Route path="/MPinScreen" element={<MPinScreen />} />
//         <Route path="/SetMPinScreen" element={<SetMpinScreen />} />
//         <Route path="/Logout" element={<MPinScreen />} />
//         <Route path="/aeps1" element={<Aeps1 />} />
//         <Route path="/AEPSselect" element={<AEPSselect />} />
//         <Route path="/DMTselect" element={<DMTselect />} />
//         <Route path="/aeps2" element={<Aeps2 />} />
//         <Route path="/CashDeposit" element={<CashDeposit />} />
//         <Route path="/Dmt1" element={<Dmt1 />} />
//         <Route path="/Dmt2" element={<Dmt2 />} />
//         <Route path="/aadharpay" element={<AadhaarPay />} />
//         <Route path="/Matm" element={<Matm />} />
//         <Route path="/MoveToBankSelect" element={<MoveToBankSelect />} />
//         <Route path="/MiniAtmTransactionPage" element={<MiniAtmTransactionPage />} />


//         //QuickServices
//         <Route path="/mobilerecharge" element={<MobileRecharge />} />

//         <Route path="/electricitybill" element={<ElectricityBill />} />
//         <Route path="/electricitybillfetch" element={<ElectricityBillFetch />} />
//         <Route path="/electricityinvoice" element={<ElectricityInvoice />} />

//         <Route path="/gasbill" element={<GasBill />} />
//         <Route path="/gasbillfetch" element={<GasBillFetch />} />
//         <Route path="/gasinvoice" element={<GasInvoice />} />

//         <Route path="/waterbill" element={<WaterBill />} />
//         <Route path="/waterbillfetch" element={<WaterBillFetch />} />
//         <Route path="/waterinvoice" element={<WaterInvoice />} />



//         {/* Dashboard and its nested routes */}
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="home" element={<HomePage />} />
//           <Route path="search" element={<SearchPage />} />
//           <Route path="report" element={<ReportPage />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="chat" element={<Chat />} />

//          //chat route
//         </Route>

//         {/* 
//         <Route path="reports/daily-sale" element={<Dailyreport />} />
//           <Route path="reports/money-transfer" element={<MoneyTransferreport />} />
//           <Route path="reports/recharge" element={<Rechargereport />} />
//           <Route path="reports/aadhaar-atm" element={<AadhaarATMreport />} />
//           <Route path="reports/bill-payments" element={<BillPaymentsreport />} />
//           <Route path="reports/train-booking" element={<TrainBookingreport />} /> */}


//           //BBPS services route
//         <Route path="/creditcard" element={<CreditCardBillPayment />} />
//         <Route path="/creditcardfetch" element={<CreditCardFetch />} />

//         <Route path="/educationfee" element={<EducationFee />} />
//         <Route path="/educationfeefetch" element={<EducationFeeFetch />} />

//         <Route path="/insurancepremium" element={<InsurancePremium />} />
//         <Route path="/insurancepremiumfetch" element={<InsurancePremiumFetch />} />


//         <Route path="/Broadband" element={<Broadband />} />
//         <Route path="/Broadbandfetch" element={<BroadbandFetch />} />

//         <Route path="/loanrepayment" element={<LoanRepayment />} />
//         <Route path="/loanrepaymentfetch" element={<LoanRepaymentFetch />} />

//         <Route path="/fastagrecharge" element={<FastagRecharge />} />
//         <Route path="/fastagrechargefetch" element={<FastagRechargeFetch />} />

//         <Route path="/dthpayment" element={<DTHPayment />} />
//         <Route path="/dthpaymentfetch" element={<DTHPaymentFetch />} />

//         <Route path="/postpaid" element={<PostpaidMobile />} />
//         <Route path="/postpaidfetch" element={<PostpaidFetch />} />

//       </Routes>




//     </Router>
//   );
// }

// export default App;




// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages & Components
import ForgetPassword from "./Pages/ForgetPassword";
import Dashboard from "./Pages/Dashboard";
import MPinScreen from "./Pages/MPinScreen";
import SignInScreen from "./Pages/SignInScreen";
import ResetMpinScreen from "./Pages/ResetMpinScreen";
import Signup from "./RegisterPages/BasicDetails";
import Home from "./Pages/Homescreen";
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
import EAgreementPopup from "./Pages/EAgreementPopup";
import CreditCardBillPayment from "./BBPS/CreditCard/CreditCard";
import CreditCardFetch from "./BBPS/CreditCard/CreditCardFetch";
import EducationFee from "./BBPS/Educationbill/EducationFee";
import EducationFeeFetch from "./BBPS/Educationbill/EducationFeeFetch";
import InsurancePremium from "./BBPS/Insurance/InsurancePremium";
import InsurancePremiumFetch from "./BBPS/Insurance/InsurancePremiumFetch";
import Broadband from "./BBPS/Broadbandbill/Broadband";
import BroadbandFetch from "./BBPS/Broadbandbill/BroadbandFetch";
import LoanRepayment from "./BBPS/LoanRepayment/LoanRepayment";
import LoanRepaymentFetch from "./BBPS/LoanRepayment/LoanRepaymentFetch";
import DTHPayment from "./BBPS/DTH/DTHPayment";
import DTHPaymentFetch from "./BBPS/DTH/DTHPaymentFetch";
import PostpaidMobile from "./BBPS/Postpaid/Postpaid";
import PostpaidFetch from "./BBPS/Postpaid/PostpaidFetch";
import FastagRechargeFetch from "./BBPS/Fastag/FastagRechargeFetch";
import FastagRecharge from "./BBPS/Fastag/FastagRecharge";
import Chat from "./Pages/Chat";
import AEPSselect from "./Finance/AEPSselect";
import DMTselect from "./Finance/DMTselect";
import ComingSoon from './Pages/ComingSoon';
import BillPayment from "./Pages/BillPayment";
import AadhaarPay from "./Finance/AadhaarPay";
import MoveToBankSelect from "./Finance/MoveToBankSelect";
import LifeInsurance from "./Pages/services pages/LifeInsurance";
import AllMotorInsurance from "./Pages/services pages/AllMotorInsurance";
import HealthInsurance from "./Pages/services pages/HealthInsurance";
import Loan from "./Pages/services pages/Loan";
import OtpPage from "./Pages/OtpPage";
import SetMpinScreen from "./Pages/setMpinScreen";
import { reports } from './servicesData/reportsData';

// 🔐 Import PrivateRoute
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/HealthInsurance" element={<HealthInsurance />} />
        <Route path="/MotorInsurance" element={<AllMotorInsurance />} />
        <Route path="/LifeInsurance" element={<LifeInsurance />} />
        <Route path="/Loan" element={<Loan />} />
        <Route path="/EAgreement" element={<EAgreementPopup />} />
        <Route path="/login" element={<SignInScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        <Route path="/basic-details" element={<PrivateRoute><BasicDetails /></PrivateRoute>} />
        <Route path="/business-details" element={<PrivateRoute><BusinessDetails /></PrivateRoute>} />
        <Route path="/residential-details" element={<PrivateRoute><ResidentialDetails /></PrivateRoute>} />
        <Route path="/aadhaar-details" element={<PrivateRoute><AadhaarDetails /></PrivateRoute>} />
        <Route path="/pan-details" element={<PrivateRoute><PanDetails /></PrivateRoute>} />
        <Route path="/video-kyc" element={<PrivateRoute><VideoKYC /></PrivateRoute>} />
        <Route path="/KYCSucessScreen" element={<PrivateRoute><KYCSucessScreen /></PrivateRoute>} />
        <Route path="/MPinScreen" element={<PrivateRoute><MPinScreen /></PrivateRoute>} />
        <Route path="/SetMPinScreen" element={<PrivateRoute><SetMpinScreen /></PrivateRoute>} />
        <Route path="/forget-m-pin" element={<PrivateRoute><ResetMpinScreen /></PrivateRoute>} />
        <Route path="/Logout" element={<PrivateRoute><MPinScreen /></PrivateRoute>} />

        <Route path="/aeps1" element={<PrivateRoute><Aeps1 /></PrivateRoute>} />
        <Route path="/aeps2" element={<PrivateRoute><Aeps2 /></PrivateRoute>} />
        <Route path="/AEPSselect" element={<PrivateRoute><AEPSselect /></PrivateRoute>} />
        <Route path="/DMTselect" element={<PrivateRoute><DMTselect /></PrivateRoute>} />
        <Route path="/CashDeposit" element={<PrivateRoute><CashDeposit /></PrivateRoute>} />
        <Route path="/Dmt1" element={<PrivateRoute><Dmt1 /></PrivateRoute>} />
        <Route path="/Dmt2" element={<PrivateRoute><Dmt2 /></PrivateRoute>} />
        <Route path="/aadharpay" element={<PrivateRoute><AadhaarPay /></PrivateRoute>} />
        <Route path="/Matm" element={<PrivateRoute><Matm /></PrivateRoute>} />
        <Route path="/MoveToBankSelect" element={<PrivateRoute><MoveToBankSelect /></PrivateRoute>} />
        <Route path="/MiniAtmTransactionPage" element={<PrivateRoute><MiniAtmTransactionPage /></PrivateRoute>} />

        {/* Quick Services (Protected) */}
        <Route path="/mobilerecharge" element={<PrivateRoute><MobileRecharge /></PrivateRoute>} />
        <Route path="/electricitybill" element={<PrivateRoute><ElectricityBill /></PrivateRoute>} />
        <Route path="/electricitybillfetch" element={<PrivateRoute><ElectricityBillFetch /></PrivateRoute>} />
        <Route path="/electricityinvoice" element={<PrivateRoute><ElectricityInvoice /></PrivateRoute>} />
        <Route path="/gasbill" element={<PrivateRoute><GasBill /></PrivateRoute>} />
        <Route path="/gasbillfetch" element={<PrivateRoute><GasBillFetch /></PrivateRoute>} />
        <Route path="/gasinvoice" element={<PrivateRoute><GasInvoice /></PrivateRoute>} />
        <Route path="/waterbill" element={<PrivateRoute><WaterBill /></PrivateRoute>} />
        <Route path="/waterbillfetch" element={<PrivateRoute><WaterBillFetch /></PrivateRoute>} />
        <Route path="/waterinvoice" element={<PrivateRoute><WaterInvoice /></PrivateRoute>} />
        <Route path="/Billpayment" element={<PrivateRoute><BillPayment /></PrivateRoute>} />

        {/* BBPS (Protected) */}
        <Route path="/creditcard" element={<PrivateRoute><CreditCardBillPayment /></PrivateRoute>} />
        <Route path="/creditcardfetch" element={<PrivateRoute><CreditCardFetch /></PrivateRoute>} />
        <Route path="/educationfee" element={<PrivateRoute><EducationFee /></PrivateRoute>} />
        <Route path="/educationfeefetch" element={<PrivateRoute><EducationFeeFetch /></PrivateRoute>} />
        <Route path="/insurancepremium" element={<PrivateRoute><InsurancePremium /></PrivateRoute>} />
        <Route path="/insurancepremiumfetch" element={<PrivateRoute><InsurancePremiumFetch /></PrivateRoute>} />
        <Route path="/Broadband" element={<PrivateRoute><Broadband /></PrivateRoute>} />
        <Route path="/Broadbandfetch" element={<PrivateRoute><BroadbandFetch /></PrivateRoute>} />
        <Route path="/loanrepayment" element={<PrivateRoute><LoanRepayment /></PrivateRoute>} />
        <Route path="/loanrepaymentfetch" element={<PrivateRoute><LoanRepaymentFetch /></PrivateRoute>} />
        <Route path="/fastagrecharge" element={<PrivateRoute><FastagRecharge /></PrivateRoute>} />
        <Route path="/fastagrechargefetch" element={<PrivateRoute><FastagRechargeFetch /></PrivateRoute>} />
        <Route path="/dthpayment" element={<PrivateRoute><DTHPayment /></PrivateRoute>} />
        <Route path="/dthpaymentfetch" element={<PrivateRoute><DTHPaymentFetch /></PrivateRoute>} />
        <Route path="/postpaid" element={<PrivateRoute><PostpaidMobile /></PrivateRoute>} />
        <Route path="/postpaidfetch" element={<PrivateRoute><PostpaidFetch /></PrivateRoute>} />

        {/* Report Routes Dynamically Rendered */}
        {reports.map((report, index) => (
          <Route
            key={index}
            path={report.route}
            element={<PrivateRoute>{<report.component />}</PrivateRoute>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
