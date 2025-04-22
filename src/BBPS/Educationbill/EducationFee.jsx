import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EducationFee = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentId: "",
    state: "",
    institute: "",
    studentName: "",
  });

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      {/* Header */}
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <div className="">
        <h1 className="text-xl font-bold text-blue-700 text-center ">Education Fee</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Pay your Education Fee with ease</h2>
      </div>

      <form className="space-y-5 mt-16">
        {/* Student ID / Enrollment Number */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Student ID / Enrollment No.</label>
          <input
            type="text"
            placeholder="STU123456"
            value={form.studentId}
            onChange={(e) => setForm({ ...form, studentId: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Select State */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Select State</label>
          <select
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none text-gray-800"
          >
            <option value="" disabled>Select State</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
          </select>
        </div>

        {/* Select Institute */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Select Institute</label>
          <select
            value={form.institute}
            onChange={(e) => setForm({ ...form, institute: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none text-gray-800"
          >
            <option value="" disabled>Select Institute</option>
            <option>Delhi Public School</option>
            <option>National Institute of Technology</option>
            <option>Lovely Professional University</option>
          </select>
        </div>

        {/* Student Name */}
        <div>
          <label className="text-sm text-gray-600 font-medium">Student Name</label>
          <input
            type="text"
            placeholder="Rakesh Sharma"
            value={form.studentName}
            onChange={(e) => setForm({ ...form, studentName: e.target.value })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={() => navigate("/educationfeefetch", { state: form })}
          className="w-full mt-4 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
        >
          Fetch Fee Details
        </button>
      </form>
    </div>
  );
};

export default EducationFee;
