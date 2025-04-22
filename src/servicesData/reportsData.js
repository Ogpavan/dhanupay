// import Dailyreport from '../Pages/reports/Dailyreport';
import TrainBookingreport from '../Pages/reports/TrainBookingreport';
import AEPSReport from '../Pages/reports/AEPSReport';
import MATMReport from '../Pages/reports/MATMReport';
import MoneyTransferreport from '../Pages/reports/MoneyTransferreport';
import CashDepositReport from '../Pages/reports/CashDepositReport';
import Rechargereport from '../Pages/reports/Rechargereport';
import ElectricityBillReport from '../Pages/reports/ElectricityBillReport';
import WaterBillReport from '../Pages/reports/WaterBillReport';
import GasBillReport from '../Pages/reports/GasBillReport';
import DTHReport from '../Pages/reports/DTHReport';
import BroadbandReport from '../Pages/reports/BroadbandReport';
import InsurancePremiumReport from '../Pages/reports/InsurancePremiumReport';
import EducationFeeReport from '../Pages/reports/EducationFeeReport';
import CreditCardReport from '../Pages/reports/CreditCardReport';
import FastTagReport from '../Pages/reports/FastTagReport';
// import DailyReport from '../Pages/reports/DailyReport';
import LoanRepaymentReport from '../Pages/reports/LoanRepaymentReport';
import DailyReport from '../Pages/reports/Dailyreport';

export const reports = [
  // General Reports
  {
    title: "Daily Sale Report",
    description: "View all daily shop transactions",
    route: "/reports/daily-sale",
    component: DailyReport,
  },
  {
    title: "Train Booking Report",
    description: "View train booking and ticket history",
    route: "/reports/train-booking",
    component: TrainBookingreport,
  },

  // Finance Services Reports
  {
    title: "AEPS Report",
    description: "Track Aadhaar Enabled Payment transactions",
    route: "/reports/aeps",
    component: AEPSReport,
  },
  {
    title: "M-ATM Transactions",
    description: "Monitor Mini ATM transaction records",
    route: "/reports/matm",
    component: MATMReport,
  },
  {
    title: "Money Transfer Report (DMT)",
    description: "Review domestic money transfer details",
    route: "/reports/money-transfer",
    component: MoneyTransferreport,
  },
  {
    title: "Cash Deposit Report",
    description: "History of deposited cash to banks",
    route: "/reports/cash-deposit",
    component: CashDepositReport,
  },

  // Recharge & Utility Reports (Quick Services + BBPS)
  {
    title: "Mobile Recharge Report",
    description: "Check mobile recharge history (Prepaid/Postpaid)",
    route: "/reports/recharge",
    component: Rechargereport,
  },
  {
    title: "Electricity Bill Report",
    description: "View electricity bill payment records",
    route: "/reports/electricity-bill",
    component: ElectricityBillReport,
  },
  {
    title: "Water Bill Report",
    description: "History of water utility payments",
    route: "/reports/water-bill",
    component: WaterBillReport,
  },
  {
    title: "Gas Bill Report",
    description: "Check your gas bill payment status",
    route: "/reports/gas-bill",
    component: GasBillReport,
  },
  {
    title: "DTH Recharge Report",
    description: "Track DTH service top-ups",
    route: "/reports/dth",
    component: DTHReport,
  },
  {
    title: "Broadband Report",
    description: "Monitor broadband recharge or bill history",
    route: "/reports/broadband",
    component: BroadbandReport,
  },
  {
    title: "Insurance Premium Report",
    description: "Track insurance premium payments",
    route: "/reports/insurance-premium",
    component: InsurancePremiumReport,
  },
  {
    title: "Education Fee Report",
    description: "Overview of education-related fee payments",
    route: "/reports/education-fee",
    component: EducationFeeReport,
  },
  {
    title: "Credit Card Bill Report",
    description: "Credit card bill payment status",
    route: "/reports/credit-card",
    component: CreditCardReport,
  },
  {
    title: "FASTag Recharge Report",
    description: "FASTag balance & recharge history",
    route: "/reports/fast-tag",
    component: FastTagReport,
  },
  {
    title: "Loan Repayment Report",
    description: "Loan EMI and repayment transactions",
    route: "/reports/loan-repayment",
    component: LoanRepaymentReport,
  },
];
