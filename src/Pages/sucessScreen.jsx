import React from 'react';
import { useNavigate } from "react-router-dom";

const SucessScreen = ({ title,message }) => {
    const navigate = useNavigate();

    const btnclick = () => {
        alert(`Home button clicked Scessfully`);
        onClick=navigate("/dashboard");
      };
    return (
       
        <div className="flex flex-col h-screen bg-white font-poppins">
           
            <div className="px-4 pt-10  pb-4 text-gray-800">
                <div className="flex items-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        onClick={() => navigate(-1)} 
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm poppins-regular">Confirm</span>
                </div>
            </div>
            <div className='h-[80vh]  flex flex-col items-center  gap-6 '>
                <h1 className="text-2xl text-green-500 font-semibold">{title}</h1>
                <img src='./sucess.gif' alt="Loading animation" />;
                <h1 className="text-lg ">{message}</h1>
                <button 
                onClick={btnclick} 
                    className="w-[90vw] mt-28 py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all hover:bg-indigo-800 poppins-medium">
                    Home
                </button>
            </div>
        </div>
    )
}

export default SucessScreen;
