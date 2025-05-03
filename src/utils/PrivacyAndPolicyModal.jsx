import React from 'react';

function PrivacyAndPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl max-h-[90vh] w-full overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Privacy & Policy</h2>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>1. Personal Information:</strong> We collect information such as your name, phone number, Aadhaar number, PAN, and bank details to facilitate services like AEPS, money transfer, and bill payments.
          </p>

          <p>
            <strong>2. Use of Data:</strong> Your data is used to verify identity, process transactions, comply with regulations (RBI, UIDAI, etc.), and improve user experience.
          </p>

          <p>
            <strong>3. Biometric Data:</strong> For AEPS and KYC services, biometric data (fingerprint scans) may be collected. This data is encrypted and used only for the intended verification purpose in compliance with UIDAI norms.
          </p>

          <p>
            <strong>4. Location Access:</strong> We may request access to your device's location to comply with service-specific guidelines and improve security and fraud prevention.
          </p>

          <p>
            <strong>5. Third-party Sharing:</strong> Your information may be shared with regulatory authorities, financial institutions, or service providers strictly on a need-to-know basis.
          </p>

          <p>
            <strong>6. Data Security:</strong> All user data is encrypted during transmission and storage. We use industry-standard security protocols and regularly audit our systems to prevent unauthorized access.
          </p>

          <p>
            <strong>7. Cookies & App Data:</strong> The app may use cookies or device storage to personalize content, maintain sessions, and remember preferences.
          </p>

          <p>
            <strong>8. Consent:</strong> By using our services, you give consent to collect, store, and process your data as outlined in this policy.
          </p>

          <p>
            <strong>9. Data Retention:</strong> We retain your data for as long as necessary to comply with legal obligations and offer uninterrupted services.
          </p>

          <p>
            <strong>10. Policy Changes:</strong> This policy may be updated from time to time. Continued use of the app after updates means you accept the revised policy.
          </p>

          <p>
            <strong>11. Contact Us:</strong> If you have any questions regarding this policy, contact our support team at <a href="mailto:support@DhanuPay.com" className="text-indigo-600 underline">support@DhanuPay.com</a>.
          </p>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyAndPolicyModal;
