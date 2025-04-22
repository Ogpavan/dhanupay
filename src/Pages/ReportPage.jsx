import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reports } from '../servicesData/reportsData';

export const extrareports = [
  // General Reports
  {
    title: "Daily Sale Report",
    description: "View all daily shop transactions",
    route: "/reports/daily-sale",
  },
  {
    title: "Train Booking Report",
    description: "View train booking and ticket history",
    route: "/reports/train-booking",
  },

  // Finance Services Reports
  {
    title: "AEPS Report",
    description: "Track Aadhaar Enabled Payment transactions",
    route: "/reports/aeps",
  },
  {
    title: "M-ATM Transactions",
    description: "Monitor Mini ATM transaction records",
    route: "/reports/matm",
  },
  {
    title: "Money Transfer Report (DMT)",
    description: "Review domestic money transfer details",
    route: "/reports/money-transfer",
  },
  {
    title: "Cash Deposit Report",
    description: "History of deposited cash to banks",
    route: "/reports/cash-deposit",
  },

  // Recharge & Utility Reports (Quick Services + BBPS)
  {
    title: "Mobile Recharge Report",
    description: "Check mobile recharge history (Prepaid/Postpaid)",
    route: "/reports/recharge",
  },
  {
    title: "Electricity Bill Report",
    description: "View electricity bill payment records",
    route: "/reports/electricity-bill",
  },
  {
    title: "Water Bill Report",
    description: "History of water utility payments",
    route: "/reports/water-bill",
  },
  {
    title: "Gas Bill Report",
    description: "Check your gas bill payment status",
    route: "/reports/gas-bill",
  },
  {
    title: "DTH Recharge Report",
    description: "Track DTH service top-ups",
    route: "/reports/dth",
  },
  {
    title: "Broadband Report",
    description: "Monitor broadband recharge or bill history",
    route: "/reports/broadband",
  },
  {
    title: "Insurance Premium Report",
    description: "Track insurance premium payments",
    route: "/reports/insurance-premium",
  },
  {
    title: "Education Fee Report",
    description: "Overview of education-related fee payments",
    route: "/reports/education-fee",
  },
  {
    title: "Credit Card Bill Report",
    description: "Credit card bill payment status",
    route: "/reports/credit-card",
  },
  {
    title: "FASTag Recharge Report",
    description: "FASTag balance & recharge history",
    route: "/reports/fast-tag",
  },
  {
    title: "Loan Repayment Report",
    description: "Loan EMI and repayment transactions",
    route: "/reports/loan-repayment",
  },
];


function ReportPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleOpenModal = (report) => {
    setSelectedReport(report);
    setFromDate('');
    setToDate('');
  };

  const handleContinue = () => {
    if (selectedReport && fromDate && toDate) {
      navigate(`${selectedReport.route}?from=${fromDate}&to=${toDate}`);
    }
  };

  return (
    <div className="h-[90dvh] bg-white text-black px-4 py-6 overflow-y-auto relative">
      <h1 className="text-3xl font-bold text-center mb-6">Reports</h1>
      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 border border-indigo-700 rounded-xl shadow-sm transition"
            onClick={() => handleOpenModal(report)}
          >
            <div>
              <h2 className="text-lg text-indigo-700 font-semibold">{report.title}</h2>
              <p className="text-sm text-gray-600">{report.description}</p>
            </div>
            <div className="text-gray-400 text-xl">&rarr;</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Select Date Range</h2>

            <div className="mb-4">
              <label className="block text-gray-600 mb-1">From Date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-1">To Date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedReport(null)}
                className="text-indigo-700 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleContinue}
                className="bg-indigo-700 text-white px-4 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportPage;