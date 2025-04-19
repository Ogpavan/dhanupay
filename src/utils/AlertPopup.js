// components/AlertPopup.js
import Swal from 'sweetalert2';

const AlertPopup = ({ title, text, icon }) => {
  Swal.fire({
    title,
    text,
    icon,
  });

  return null; // No actual JSX render needed, just triggers the alert
};

export default AlertPopup;
