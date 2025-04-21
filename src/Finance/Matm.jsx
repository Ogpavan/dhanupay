import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mSwipeIcon from '../assets/m-swipe.svg'; // replace with your correct path
import mPosIcon from '../assets/m-pos.svg';     // replace with your correct path

function Matm() {
    const navigate = useNavigate();
    const [selectedMachine, setSelectedMachine] = useState(null);

    const handleNext = () => {
        if (!selectedMachine) {
            alert("Please select a machine.");
            return;
        }

        navigate("/MiniAtmTransactionPage", {
            state: { selectedMachine },
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-poppins">

            {/* Header */}
            <div className="pt-10 px-4 pb-2 text-gray-800">
                <div className="flex items-center mb-2 cursor-pointer" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">Micro ATM</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-start px-6 flex-1 gap-6">
                <h2 className="text-base font-medium text-gray-800 mb-2 mt-4">Select Machine</h2>

                <div className="flex justify-center gap-8 mt-2">
                    {/* M-Swipe */}
                    <div
                        className={`flex flex-col items-center cursor-pointer border rounded-xl p-2 w-[100px] h-[120px] transition ${selectedMachine === 'M-Swipe' ? 'border-indigo-500' : 'border-gray-300'
                            }`}
                        onClick={() => setSelectedMachine('M-Swipe')}
                    >
                        <img src={mSwipeIcon} alt="M-Swipe" className="h-16 mb-2" />
                        <span className="text-sm font-medium text-gray-700">M-Swipe</span>
                    </div>

                    {/* M-PoS */}
                    <div
                        className={`flex flex-col items-center cursor-pointer border rounded-xl p-2 w-[100px] h-[120px] transition ${selectedMachine === 'M-PoS' ? 'border-indigo-500' : 'border-gray-300'
                            }`}
                        onClick={() => setSelectedMachine('M-PoS')}
                    >
                        <img src={mPosIcon} alt="M-PoS" className="h-16 mb-2" />
                        <span className="text-sm font-medium text-gray-700">M-PoS</span>
                    </div>
                </div>
            </div>

            {/* Next Button */}
            <div className="px-6 pb-6">
                <button
                    onClick={handleNext}
                    className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Matm;
