// // import Dailyreport from '../Pages/reports/Dailyreport';
// import TrainBookingreport from '../Pages/reports/TrainBookingreport';
// import AEPSReport from '../Pages/reports/AEPSReport';
// import MATMReport from '../Pages/reports/MATMReport';
// import MoneyTransferreport from '../Pages/reports/MoneyTransferreport';
// import CashDepositReport from '../Pages/reports/CashDepositReport';
// import Rechargereport from '../Pages/reports/Rechargereport';
// import ElectricityBillReport from '../Pages/reports/ElectricityBillReport';
// import WaterBillReport from '../Pages/reports/WaterBillReport';
// import GasBillReport from '../Pages/reports/GasBillReport';
// import DTHReport from '../Pages/reports/DTHReport';
// import BroadbandReport from '../Pages/reports/BroadbandReport';
// import InsurancePremiumReport from '../Pages/reports/InsurancePremiumReport';
// import EducationFeeReport from '../Pages/reports/EducationFeeReport';
// import CreditCardReport from '../Pages/reports/CreditCardReport';
// import FastTagReport from '../Pages/reports/FastTagReport';
// // import DailyReport from '../Pages/reports/DailyReport';
// import LoanRepaymentReport from '../Pages/reports/LoanRepaymentReport';
// import DailyReport from '../Pages/reports/Dailyreport';

// export const reports = [
//   // General Reports
//   {
//     title: "Daily Sale Report",
//     description: "View all daily shop transactions",
//     route: "/reports/daily-sale",
//     component: DailyReport,
//   },
//   {
//     title: "Train Booking Report",
//     description: "View train booking and ticket history",
//     route: "/reports/train-booking",
//     component: TrainBookingreport,
//   },

//   // Finance Services Reports
//   {
//     title: "AEPS Report",
//     description: "Track Aadhaar Enabled Payment transactions",
//     route: "/reports/aeps",
//     component: AEPSReport,
//   },
//   {
//     title: "M-ATM Transactions",
//     description: "Monitor Mini ATM transaction records",
//     route: "/reports/matm",
//     component: MATMReport,
//   },
//   {
//     title: "Money Transfer Report (DMT)",
//     description: "Review domestic money transfer details",
//     route: "/reports/money-transfer",
//     component: MoneyTransferreport,
//   },
//   {
//     title: "Cash Deposit Report",
//     description: "History of deposited cash to banks",
//     route: "/reports/cash-deposit",
//     component: CashDepositReport,
//   },

//   // Recharge & Utility Reports (Quick Services + BBPS)
//   {
//     title: "Mobile Recharge Report",
//     description: "Check mobile recharge history (Prepaid/Postpaid)",
//     route: "/reports/recharge",
//     component: Rechargereport,
//   },
//   {
//     title: "Electricity Bill Report",
//     description: "View electricity bill payment records",
//     route: "/reports/electricity-bill",
//     component: ElectricityBillReport,
//   },
//   {
//     title: "Water Bill Report",
//     description: "History of water utility payments",
//     route: "/reports/water-bill",
//     component: WaterBillReport,
//   },
//   {
//     title: "Gas Bill Report",
//     description: "Check your gas bill payment status",
//     route: "/reports/gas-bill",
//     component: GasBillReport,
//   },
//   {
//     title: "DTH Recharge Report",
//     description: "Track DTH service top-ups",
//     route: "/reports/dth",
//     component: DTHReport,
//   },
//   {
//     title: "Broadband Report",
//     description: "Monitor broadband recharge or bill history",
//     route: "/reports/broadband",
//     component: BroadbandReport,
//   },
//   {
//     title: "Insurance Premium Report",
//     description: "Track insurance premium payments",
//     route: "/reports/insurance-premium",
//     component: InsurancePremiumReport,
//   },
//   {
//     title: "Education Fee Report",
//     description: "Overview of education-related fee payments",
//     route: "/reports/education-fee",
//     component: EducationFeeReport,
//   },
//   {
//     title: "Credit Card Bill Report",
//     description: "Credit card bill payment status",
//     route: "/reports/credit-card",
//     component: CreditCardReport,
//   },
//   {
//     title: "FASTag Recharge Report",
//     description: "FASTag balance & recharge history",
//     route: "/reports/fast-tag",
//     component: FastTagReport,
//   },
//   {
//     title: "Loan Repayment Report",
//     description: "Loan EMI and repayment transactions",
//     route: "/reports/loan-repayment",
//     component: LoanRepaymentReport,
//   },
// ];



import AEPSReport from '../Pages/reports/AEPSReport';
import MATMReport from '../Pages/reports/MATMReport';
import MoneyTransferreport from '../Pages/reports/MoneyTransferreport';
import CashDepositReport from '../Pages/reports/CashDepositReport';
import Rechargereport from '../Pages/reports/Rechargereport';
import MoveToBankReport from '../Pages/reports/MoveToBankReport'; // Assuming you have this report
// import SmartCollectReport from '../Pages/reports/SmartCollectReport'; // Assuming you have this report
import LedgerReport from '../Pages/reports/LedgerReport'; // Assuming you have this report

// Importing icons
import aadhaarpay from "../assets/icons/aadhaarpay.svg";
import AccountOpening from "../assets/icons/AccountOpening.svg";
import billpayment from "../assets/icons/billpayment.svg";
import cashDeposit from "../assets/icons/cashDeposit.svg";
import flightbooking from "../assets/icons/flightbooking.svg";
import earnmoney from "../assets/icons/earmmoney.svg";
import matm from "../assets/icons/matm.svg";
import Healthinsurance from "../assets/icons/HealthInsurance.svg";
import ledgerReport from "../assets/icons/ledgerReport.svg";

import HealthInsurance from "../assets/icons/HealthInsurance.svg";
import irctc from "../assets/icons/irctc.svg";
import loan from "../assets/icons/loan.svg";
import mobileRecharge from "../assets/icons/mobilerecharge.svg";
import motoininsurance from "../assets/icons/motoinsurance.svg";
import movetobank from "../assets/icons/movetobank.svg";
import personalLoan from "../assets/icons/personalloan.svg";
import financeaeps1 from "../assets/icons/fingerprint 1-1.svg";
import cms from "../assets/icons/cms.svg";
import dBt1 from "../assets/icons/dBt1.svg";


export const reports = [
  // Finance Services Reports
  {
    title: "Ledger Report",
    description: "Track ledger records and transactions",
    route: "/reports/ledger",
    component: LedgerReport, // Assuming you have this report
    icon: ledgerReport, // Ledger icon (placeholder, you can replace it)
  },
  {
    title: "Aadhaar Pay Report",
    description: "Track Aadhaar transactions",
    route: "/reports/ledger",
    component: LedgerReport, // Assuming you have this report
    icon: aadhaarpay, // Ledger icon (placeholder, you can replace it)
  },
  {
    title: "AEPS Report",
    description: "Track Aadhaar Enabled Payment transactions",
    route: "/reports/aeps",
    component: AEPSReport,
    icon: financeaeps1,
  },
  {
    title: "M-ATM Transactions",
    description: "Monitor Mini ATM transaction records",
    route: "/reports/matm",
    component: MATMReport,
    icon: matm, // M-ATM icon
  },
  {
    title: "Money Transfer Report (DMT)",
    description: "Review domestic money transfer details",
    route: "/reports/money-transfer",
    component: MoneyTransferreport,
    icon: dBt1, // DMT icon
  },
  {
    title: "Cash Deposit Report",
    description: "History of deposited cash to banks",
    route: "/reports/cash-deposit",
    component: CashDepositReport,
    icon: cashDeposit, // Cash Deposit icon
  },

  // Recharge & Bill Payment Services Reports
  {
    title: "Mobile Recharge Report",
    description: "Check mobile recharge history (Prepaid/Postpaid)",
    route: "/reports/recharge",
    component: Rechargereport,
    icon: mobileRecharge, // Mobile Recharge icon
  },
  {
    title: "Bill Payment Report",
    description: "History of utility bill payments (Electricity, Water, Gas, etc.)",
    route: "/reports/bill-payment",
    component: CashDepositReport, // Assuming you're using CashDepositReport for bill payments
    icon: billpayment, // Bill Payment icon
  },

  // Other Financial Services Reports
  {
    title: "Move to Bank Report",
    description: "Monitor Move to Bank transactions",
    route: "/reports/move-to-bank",
    component: MoveToBankReport, // Assuming you have this report
    icon: movetobank, // Move to Bank icon
  },
  {
    title: "CMS Report",
    description: "CMS Report",
    route: "/comming-soon",
    component: MoveToBankReport, // Assuming you have this report
    icon: cms,
  },
  {
    title: "Flight Report",
    description: "Flight Report",
    route: "/comming-soon",
    component: MoveToBankReport, // Assuming you have this report
    icon: flightbooking,
  },
 
];
