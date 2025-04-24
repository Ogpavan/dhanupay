import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reports } from '../servicesData/reportsData';

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl border border-indigo-700 cursor-pointer hover:bg-gray-200 transition"
            onClick={() => handleOpenModal(report)}
          >
            <div className="flex flex-col items-center">
              {/* Display the icon */}
              <img 
                src={report.icon} 
                alt={report.title} 
                className="w-16 h-16 mb-2" // Adjust size as needed
              />
              <h2 className="text-md font-semibold text-center text-indigo-700">{report.title}</h2>
              <p className="text-xs text-center text-gray-600">{report.description}</p>
            </div>
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
