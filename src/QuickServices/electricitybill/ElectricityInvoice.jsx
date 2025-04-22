import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import success from "/sucess.gif";
import Swal from "sweetalert2";

const ElectricityInvoice = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    consumerNumber,
    stateName,
    board,
    name,
    billNumber,
    dueDate,
    amount,
  } = state || {};

  useEffect(() => {
    if (!consumerNumber || !stateName || !board || !name) {
      navigate("/electricitybill");
    }
  }, [consumerNumber, stateName, board, name, navigate]);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=400,height=600");
  
    if (!printWindow) {
      // alert("Popup blocked! Please allow popups and try again.");
      Swal.fire({
        title: "Alert",
        text: "Popup blocked! Please allow popups and try again.",
        icon: "warning"
      });
      return;
    }
  
    const htmlContent = `
      <html>
        <head>
          <title>Electricity Invoice</title>
          <style>
            body {
              font-family: monospace;
              font-size: 14px;
              padding: 20px;
              color: #000;
            }
            .receipt {
              max-width: 300px;
              margin: auto;
              white-space: pre;
            }
            .title {
              text-align: center;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .line {
              border-top: 1px dashed #000;
              margin: 10px 0;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="receipt">
            <div class="title">Electricity Payment Receipt</div>
            <div>Date: ${new Date().toLocaleString()}</div>
            <div class="line"></div>
            Name         : ${name}
            State        : ${stateName}
            Board        : ${board}
            Consumer No  : ${consumerNumber}
            Bill No      : ${billNumber}
            Due Date     : ${dueDate}
            Amount Paid  : ₹${amount?.toFixed(2)}
            Status       : Paid
            <div class="line"></div>
            <div class="footer">Thank you!</div>
          </div>
        </body>
      </html>
    `;
  
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };
  
  

  return (
    <div className="font-poppins min-h-screen bg-green-500 px-4 py-6 sm:hidden">
      {/* Header */}
      <div
        className="flex items-center mb-6 cursor-pointer text-white"
        onClick={() => navigate(-1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </div>

      {/* Invoice Card */}
      <div className="bg-green-100 p-6 rounded-2xl w-full max-w-sm mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-800">Payment Invoice</h2>
          <p className="text-green-700 text-sm">Thank you for your payment</p>
        </div>

        <div className="flex justify-center mb-4">
          <img src={success} alt="Success" className="w-20 h-20" />
        </div>

        <div className="text-left text-sm text-green-800 space-y-2 mb-6">
          <div><span className="font-semibold">Name:</span> {name}</div>
          <div><span className="font-semibold">State:</span> {stateName}</div>
          <div><span className="font-semibold">Board:</span> {board}</div>
          <div><span className="font-semibold">Consumer No:</span> {consumerNumber}</div>
          <div><span className="font-semibold">Bill No:</span> {billNumber}</div>
          <div><span className="font-semibold">Due Date:</span> {dueDate}</div>
          <div><span className="font-semibold">Amount Paid:</span> ₹{amount?.toFixed(2)}</div>
          <div><span className="font-semibold">Status:</span> <span className="text-green-600 font-semibold">Paid</span></div>
        </div>
      </div>

      {/* Print Button */}
      <div>
      <button
        onClick={handlePrint}
        className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-xl w-full max-w-sm mx-auto block"
      >
        Download / Print Invoice
      </button>
      <button 
        onClick={() => navigate("/dashboard/home")}
        className="mt-2 bg-green-100 hover:bg-green-800 text-green-700 font-semibold py-2 px-6 rounded-xl w-full max-w-sm mx-auto block"
      >
        Home
      </button>
      </div>
    </div>
  );
};

export default ElectricityInvoice;
