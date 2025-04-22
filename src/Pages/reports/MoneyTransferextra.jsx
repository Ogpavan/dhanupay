import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function MoneyTransfer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromDate = queryParams.get('from');
  const toDate = queryParams.get('to');
  return (
    <div className='h-screen bg-orange-300'>
      {/* Header with back button and title */}
      <div className='flex items-center bg-white shadow px-4 py-3'>
        <button
          className='text-xl font-bold text-indigo-700 mr-4'
          onClick={() => navigate(-1)}
        >
          &#8592;
        </button>
        <h1 className='text-xl font-semibold'>MoneyTransfer Report</h1>
      </div>

      {/* Report Content */}
      <div className='text-center p-5'>
        <div className='text-2xl font-semibold mb-4'>MoneyTransfer Report</div>
        <div className='text-lg'>
          From Date: <span className='font-medium'>{fromDate}</span>
        </div>
        <div className='text-lg'>
          To Date: <span className='font-medium'>{toDate}</span>
        </div>
      </div>
    </div>
  )
}

export default MoneyTransfer