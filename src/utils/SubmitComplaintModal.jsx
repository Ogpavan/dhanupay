import React, { useState } from 'react';
import Swal from 'sweetalert2';

function SubmitComplaintModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    issueType: '',
    transactionId: '',
    mobileNumber: '',
    description: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachment') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a readable log
    console.log('Complaint Form Submitted:');
    console.log('Issue Type:', formData.issueType);
    console.log('Transaction ID:', formData.transactionId || 'N/A');
    console.log('Mobile Number:', formData.mobileNumber);
    console.log('Description:', formData.description);
    const initialState = {
        issueType: '',
        transactionId: '',
        mobileNumber: '',
        description: '',
        attachment: null,
      };
    if (formData.attachment) {
      console.log('Attachment:', {
        name: formData.attachment.name,
        size: `${(formData.attachment.size / 1024).toFixed(2)} KB`,
        type: formData.attachment.type,
      });
      Swal.fire({
        title: "Success",
        text: "Complaint submitted successfully!",
        icon: "success"
      });

    } else {
      console.log('Attachment: None');
    }
  // ✅ Reset form data
  setFormData(initialState);

    // Optional: Reset form or close modal
    onClose();
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md min-h-[90vh] w-full overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Submit Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Issue Type */}
          <div>
            <label className="block mb-1 font-medium">Issue Type</label>
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            >
              <option value="">Select Issue</option>
              <option value="transaction">Transaction Issue</option>
              <option value="kyc">KYC / Onboarding</option>
              <option value="aadhar">AEPS / Biometric</option>
              <option value="login">Login / Access Problem</option>
              <option value="settlement">Settlement Delay</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Transaction ID */}
          <div>
            <label className="block mb-1 font-medium">Transaction ID (Optional)</label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              placeholder="Enter Transaction ID"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              placeholder="Enter your registered number"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Issue Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              rows="4"
              placeholder="Describe your issue in detail"
              required
            />
          </div>

          {/* Attachment */}
          <div>
            <label className="block mb-1 font-medium">Attachment (Optional)</label>
            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              className="w-full"
              accept="image/*,.pdf"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitComplaintModal;
