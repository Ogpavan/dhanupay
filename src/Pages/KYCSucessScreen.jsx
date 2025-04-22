import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const KYCSucessScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();

    const btnclick = () => {
        alert(`Home button clicked Scessfully`);
        onClick = navigate("/");
    };
    return (

        <div className="flex flex-col h-screen  font-poppins">

            <div className=" pt-10  pb-4 text-gray-800">
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
                    <span className="text-sm poppins-regular">KYC Submitted</span>
                </div>
            </div>
            <div className='  flex flex-col  h-[80dvh] px-6 items-center  gap-6 '>
                <img src='./sucess.gif' alt="Loading animation" />
                <h1 className="text-lg text-green-500 font-semibold">Thank you for submitting your KYC details!</h1>
                <h1 className="text-sm text-gray-500 ">Verification may take up to 24-48 hours</h1>

                <h1 className="text-sm  text-center">Your information is now under review.
                    We are currently verifying your documents for authenticity and compliance. Once your KYC is verified, we will email you your Distributor ID
                    at the email address .</h1>


                <h1 className="text-sm text-center ">If you have any questions in the meantime, feel free to contact our support team:
                    📞 1-800-123-253
                    📧 support@dhanupay.com</h1>
                <button
                    onClick={btnclick}
                    className="w-[90vw]  py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all hover:bg-indigo-800 poppins-medium">
                    Home
                </button>
            </div>
        </div>
    )
}

export default KYCSucessScreen;
