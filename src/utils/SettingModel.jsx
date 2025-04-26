import React from 'react';
import Swal from 'sweetalert2';

function SettingModel({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Function to handle each clickable action
  const handleDownload = (type) => {
    // Here you can handle the logic for downloading or navigation based on the type
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to ${type.replace(/([A-Z])/g, ' $1').toLowerCase()}?`, // Convert camelCase to human-readable text
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform action based on type
        switch (type) {
          case 'certificate':
            console.log('Downloading certificate...');
            // Add your download logic here
            break;
          case 'identityCard':
            console.log('Downloading identity card...');
            // Add your download logic here
            break;
          case 'changePassword':
            console.log('Navigating to change password...');
            // Add navigation logic for password change
            break;
          case 'changeMPIN':
            console.log('Navigating to change MPIN...');
            // Add navigation logic for MPIN change
            break;
          default:
            break;
        }
        // Optionally close the modal after action
        onClose();
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 shadow-lg max-w-md w-full sm:max-w-lg sm:w-full lg:max-w-md lg:w-full h-full sm:h-auto flex flex-col justify-start">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <div className="space-y-4   overflow-y-auto">
          {/* List of clickable options */}
          <p>
            <button
              onClick={() => handleDownload('certificate')}
              className="text-blue-600 hover:underline"
            >
              Download Certificate
            </button>
          </p>
          <p>
            <button
              onClick={() => handleDownload('identityCard')}
              className="text-blue-600 hover:underline"
            >
              Download Identity Card
            </button>
          </p>
          <p>
            <button
              onClick={() => handleDownload('changePassword')}
              className="text-blue-600 hover:underline"
            >
              Change Password
            </button>
          </p>
          <p>
            <button
              onClick={() => handleDownload('changeMPIN')}
              className="text-blue-600 hover:underline"
            >
              Change MPIN
            </button>
          </p>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingModel;
