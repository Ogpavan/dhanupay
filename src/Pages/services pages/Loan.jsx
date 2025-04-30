import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const modeConfig = {
  online: {
    url: "https://www.google.com" // Replace with dynamic URL from server later
  }
};

function Loan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // new state
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    loanAmount: '',
    loanType: '',
    occupation: '',
    annualIncome: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://your-api-url.com/submit-loan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      Swal.fire("Success", "Loan application submitted!", "success");
      setShowForm(false);
      setFormData({
        name: '',
        mobile: '',
        address: '',
        loanAmount: '',
        loanType: '',
        occupation: '',
        annualIncome: '',
      });
    } catch (error) {
      console.error("API Error:", error);
      Swal.fire("Error", "Submission failed.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins">
      {/* Header */}
      <div className="pt-10 px-4 pb-2 text-gray-800">
        <div className="flex items-center mb-2 cursor-pointer" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </div>
      </div>

      {/* Main Selection */}
      <div className="flex flex-col items-center justify-start px-6 flex-1 gap-6">
        <h2 className="text-base font-medium text-gray-800 mb-4 mt-4">Select Mode</h2>

        <div className="flex justify-center gap-8 mt-2">
          <button
            className="px-6 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
            onClick={() => {
              window.location.href = modeConfig.online.url;
            }}
          >
            Online
          </button>

          <button
            className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition"
            onClick={() => setShowForm(true)}
          >
            Offline
          </button>
        </div>
      </div>

      {/* Offline Form */}
      {showForm && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Loan Application Form</h2>
            <button onClick={() => setShowForm(false)} className="text-red-500 font-semibold">Close</button>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <InputField label="Name" name="name" value={formData.name} onChange={handleInputChange} />
            <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleInputChange} type="tel" />
            <InputField label="Address" name="address" value={formData.address} onChange={handleInputChange} type="textarea" />
            <InputField label="Loan Amount (INR)" name="loanAmount" value={formData.loanAmount} onChange={handleInputChange} type="number" />
            <InputField label="Loan Type" name="loanType" value={formData.loanType} onChange={handleInputChange} placeholder="Home / Personal / Education etc." />
            <InputField label="Occupation" name="occupation" value={formData.occupation} onChange={handleInputChange} />
            <InputField label="Annual Income" name="annualIncome" value={formData.annualIncome} onChange={handleInputChange} type="number" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition disabled:opacity-60"
            >
              {isSubmitting ? "Please wait..." : "Submit Application"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// Reusable input component
function InputField({ label, name, value, onChange, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="block font-medium text-gray-700">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}
    </div>
  );
}

export default Loan;
