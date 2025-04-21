

import financeaeps1 from "../assets/icons/fingerprint 1-1.svg";
import financeaeps2 from "../assets/icons/fingerprint 1.svg";
import financeaeps4 from "../assets/icons/Group 612.svg";
import financeaeps5 from "../assets/icons/Image19.svg";
import dBt1 from "../assets/icons/dBt1.svg";
import MobilePrepaid from "../assets/icons/MobilePrepaid.svg";
import loanreyapment from "../assets/icons/loanreyapment.svg";
import dthrecharge from "../assets/icons/dthrecharge.svg";
import postpaidmobile from "../assets/icons/MobilePrepaid.svg";
import broadband from "../assets/icons/broadband.svg";
import fastag from "../assets/icons/fastag.svg";
import Insurance_premium from "../assets/icons/insurance_premium.svg";
import educationfee from "../assets/icons/educationfee.svg";
import creditcard from "../assets/icons/creditcard.svg";
import GasBill from "../assets/icons/GasBill.svg";
import WaterBill from "../assets/icons/WaterBill.svg";
import electricityBill from "../assets/icons/electricityBill.svg";

// Finance Services
export const financeServices = [
  { label: "AEPS-1", icon: financeaeps1, route: "/aeps1" },
  { label: "AEPS-2", icon: financeaeps2, route: "/aeps2" },
  { label: "M-ATM", icon: financeaeps4, route: "/Matm" },
  { label: "DMT-1", icon: dBt1, route: "/Dmt1" },
  { label: "DMT-2", icon: dBt1, route: "/Dmt2" },
  { label: "Cash Deposit", icon: financeaeps5, route: "/CashDeposit" },
  
];

// Quick Services
export const quickServices = [
  { label: "Mobile prepaid", icon: MobilePrepaid, route: "/mobilerecharge" },
  { label: "Electricity bill", icon: electricityBill, route: "/electricitybill" },
  { label: "Water bill", icon: WaterBill, route: "/waterbill" },
  { label: "Gas bill", icon: GasBill, route: "/gasbill" },
];

// BBPS Services
export const bbpsServices = [
  { label: "Credit card", icon: creditcard, route: "/credit-card" },
  { label: "Education Fee", icon: educationfee, route: "/education-fee" },
  { label: "Insurance Premium", icon: Insurance_premium, route: "/insurance-premium" },
  { label: "Fast Tag", icon: fastag, route: "/fast-tag" },
  { label: "Broadband", icon: broadband, route: "/broadband" },
  { label: "Postpaid", icon: postpaidmobile, route: "/postpaid" },
  { label: "DTH", icon: dthrecharge, route: "/dth" },
  { label: "Loan Repayment", icon: loanreyapment, route: "/loan-repayment" },
];
