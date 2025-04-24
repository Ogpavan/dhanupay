// ComingSoon.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ComingSoon = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    // Trigger SweetAlert when the component loads
    Swal.fire({
      icon: 'info',
      title: 'Coming Soon!',
      text: 'Currently Under Development, stay tuned!',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      // Redirect to the home/dashboard after the alert
       // Update with your actual route
       navigate("/dashboard/home");

    });
  }, );

  return <div>Loading...</div>; // Optional loading message while SweetAlert is triggered
};

export default ComingSoon;
