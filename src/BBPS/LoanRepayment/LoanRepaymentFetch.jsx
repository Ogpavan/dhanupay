import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const LoanRepaymentFetch = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();
    const { state } = useLocation();
    const { AgreementNumber1, loanProviders } = state || {};

 

    useEffect(() => {
        if (!AgreementNumber1 || !loanProviders) {
            navigate("/Broadband");
        }
    }, [loanProviders, AgreementNumber1, navigate]);

    return (
        <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
            {/* Header */}
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Back</span>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center bg-white px-4 font-[Poppins] relative">
                <div className="text-center mb-16">
                    <h2 className="text-lg text-blue-600 font-semibold">Confirm Loan EMI Payment</h2>
                    <p className="text-sm text-gray-600">
                        Please confirm your details<br />before proceeding with payment.
                    </p>
                </div>

                <div className="relative bg-gray-100 pt-10 p-6 rounded-2xl shadow-md w-full max-w-sm text-center">
                    {/* Logo or emblem */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                            alt="Student"
                            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                        />
                    </div>

                    <h3 className="font-semibold text-gray-800 text-base mb-1 mt-2">{loanProviders}</h3>
                    <p className="text-gray-600 text-sm mb-2">AIRT2345678</p>

                    <div className="text-red-600 bg-red-100 text-sm px-3 py-1 rounded-full inline-block mb-4">
                        Bill Status: Unpaid
                    </div>

                    <div className="text-3xl font-bold text-gray-800 mb-2">₹ 15,000.00</div>

                    <div className="flex flex-col gap-4 text-sm text-gray-600 w-full mt-4">
                        <div className="text-center flex justify-between">
                            <span className="font-semibold">Consumer Name :</span>
                            <span>Rahul</span>
                        </div>
                        <div className="text-center flex justify-between">
                            <span className="font-semibold">Agreement NO :</span>
                            <span>{AgreementNumber1}</span>
                        </div>
                        <div className="text-center flex justify-between">
                            <span className="font-semibold">Due Date :</span>
                            <span>April 30, 2025</span>
                        </div>
                    </div>
                </div>

                <button
                    // onClick={() =>
                    //   navigate("/educationinvoice", {
                    //     state: {
                    //       studentId,
                    //       stateName,
                    //       institute,
                    //       studentName,
                    //       receiptNumber: "EDU12345678",
                    //       dueDate: "April 30, 2025",
                    //       amount: 15000,
                    //     },
                    //   })
                    // }

                    onClick={async() => {await Swal.fire({
                        title: "Success",
                        text: "Payment was Sucessfull ",
                        icon: "success"
                      });
                      navigate("/dashboard/home");}}
                    className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-xl w-full max-w-sm"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default LoanRepaymentFetch;
