import React from 'react';

function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md min-h-[90vh] w-full">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="space-y-4">
          <p><strong>Mobile:</strong> +1 234 567 890</p>
          <p><strong>WhatsApp:</strong> +1 234 567 891</p>
          <p><strong>Email:</strong> support@company.com</p>
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsModal;
