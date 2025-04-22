import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function CreditCardBillPayment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({
    bank: "",
    cardNumber1: "",
    cardNumber2: "",
    cardHolder: "",
  });

  const navigate = useNavigate();

  const banks = ["HDFC Bank", "SBI", "ICICI Bank", "Axis Bank", "Kotak Mahindra"];

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { bank, cardNumber1, cardNumber2, cardHolder, amount } = form;

    if (!bank || !cardNumber1 || !cardNumber2 || !cardHolder ) {
      // alert("Please fill all fields");
      Swal.fire({
        title: "Alert",
        text: "Please fill all fields",
        icon: "warning"
      });
      return;
    }

    if (cardNumber1 !== cardNumber2) {
      // alert("Card numbers do not match");
      Swal.fire({
        title: "Alert",
        text: "Card numbers do not match",
        icon: "warning"
      });
      return;
    }

    navigate("/creditcardfetch", {
      state: {
        cardHolder,
        cardNumber: cardNumber1,
        amount,
      },
    });
  };

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => window.history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-5">
        
        <div >
        <h1 className="text-xl font-bold text-blue-700 text-center ">Credit Card Bill Payment</h1>
        <h2 className="text-md text-gray-600 text-center mb-8">Pay your Bill instantly and securely</h2>
      </div>

        {/* Select Bank */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Bank</label>
          <select
            value={form.bank}
            onChange={(e) => handleChange("bank", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
          >
            <option value="">Select bank</option>
            {banks.map((b, i) => (
              <option key={i} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            value={form.cardNumber1}
            onChange={(e) => handleChange("cardNumber1", e.target.value)}
            placeholder="Enter card number"
            className="w-full p-2 border border-gray-300 rounded-xl mb-2 focus:outline-none"
          />
          <input
            type="text"
            value={form.cardNumber2}
            onChange={(e) => handleChange("cardNumber2", e.target.value)}
            placeholder="Re-enter card number"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Card Holder Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
          <input
            type="text"
            value={form.cardHolder}
            onChange={(e) => handleChange("cardHolder", e.target.value)}
            placeholder="Enter name"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        {/* Amount */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={form.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div> */}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#2C2DCB] hover:bg-[#2C2DCB] text-white py-2 px-4 rounded-xl font-semibold focus:outline-none"
        >
          Fetch Bill
        </button>
      </div>
    </div>
  );
}
