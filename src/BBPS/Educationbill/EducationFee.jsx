import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EducationFee = () => {
  const [searchTermState, setSearchTermState] = useState('');
  const [searchTermInstitute, setSearchTermInstitute] = useState('');
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showInstituteDropdown, setShowInstituteDropdown] = useState(false);

  const [form, setForm] = useState({
    studentId: "",
    state: "",
    institute: "",
    studentName: "",
  });

  const navigate = useNavigate();

  // Mocked state and institute lists
  const stateList = ["Uttar Pradesh", "Maharashtra", "Delhi"];
  const instituteList = [
    "Delhi Public School", 
    "National Institute of Technology", 
    "Lovely Professional University"
  ];

  const filteredStates = stateList.filter(state =>
    state.toLowerCase().includes(searchTermState.toLowerCase())
  );

  const filteredInstitutes = instituteList.filter(institute =>
    institute.toLowerCase().includes(searchTermInstitute.toLowerCase())
  );

  const handleStateSelect = (state) => {
    setForm(prev => ({ ...prev, state: state }));
    setSearchTermState(state);
    setShowStateDropdown(false); // Hide dropdown after selection
  };

  const handleInstituteSelect = (institute) => {
    setForm(prev => ({ ...prev, institute: institute }));
    setSearchTermInstitute(institute);
    setShowInstituteDropdown(false); // Hide dropdown after selection
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { state, institute, studentId, studentName } = form;

    if (!state || !institute || !studentId || !studentName) {
      Swal.fire({
        title: "Alert",
        text: "Please fill all fields",
        icon: "warning",
      });
      return;
    }

    navigate("/educationfeefetch", {
      state: form,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => window.history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-5">
        <div>
          <h1 className="text-xl font-bold text-blue-700 text-center">Education Fee</h1>
          <h2 className="text-md text-gray-600 text-center mb-8">Pay your Education Fee with ease</h2>
        </div>

        

        {/* State Selection */}
        <div className="relative">
          <label className="text-sm text-gray-600 font-medium">Select State</label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            placeholder="Search State..."
            value={searchTermState}
            onChange={(e) => {
              setSearchTermState(e.target.value);
              setShowStateDropdown(true);
            }}
            onFocus={() => setShowStateDropdown(true)}
          />
          {showStateDropdown && filteredStates.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredStates.map((state, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => handleStateSelect(state)}
                >
                  {state}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Institute Selection */}
        <div className="relative">
          <label className="text-sm text-gray-600 font-medium">Select Institute</label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            placeholder="Search Institute..."
            value={searchTermInstitute}
            onChange={(e) => {
              setSearchTermInstitute(e.target.value);
              setShowInstituteDropdown(true);
            }}
            onFocus={() => setShowInstituteDropdown(true)}
          />
          {showInstituteDropdown && filteredInstitutes.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredInstitutes.map((institute, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => handleInstituteSelect(institute)}
                >
                  {institute}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Student ID */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Student ID / Enrollment No.</label>
          <input
            type="text"
            value={form.studentId}
            onChange={(e) => handleChange("studentId", e.target.value)}
            placeholder="STU123456"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Student Name */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Student Name</label>
          <input
            type="text"
            value={form.studentName}
            onChange={(e) => handleChange("studentName", e.target.value)}
            placeholder="Rakesh Sharma"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Fee Details
        </button>
      </div>
    </div>
  );
};

export default EducationFee;
