import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreditCardBillPayment() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBankDropdown, setShowBankDropdown] = useState(false);
  const [form, setForm] = useState({
    bankName: "",
    cardNumber1: "",
    cardNumber2: "",
    cardHolder: "",
  });
  
  const navigate = useNavigate();

  // Mocked bank list
  const bankList = [
    "State Bank of India", "Punjab National Bank", "HDFC Bank", "ICICI Bank",
    "Axis Bank", "Bank of Baroda", "Canara Bank", "IDFC First Bank"
  ];

  const filteredBanks = bankList.filter(bank =>
    bank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBankSelect = (bank) => {
    setForm(prev => ({ ...prev, bankName: bank }));
    setSearchTerm(bank);
    setShowBankDropdown(false);  // Hide dropdown after selection
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { bankName, cardNumber1, cardNumber2, cardHolder } = form;
    console.log(form);

    if (!bankName || !cardNumber1 || !cardNumber2 || !cardHolder) {
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
        bankName: bankName,
        cardHolder,
        cardNumber: cardNumber1,
       
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins min-h-screen bg-white px-4 py-6 sm:hidden">
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => window.history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Back</span>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-5">
        <div>
          <h1 className="text-xl font-bold text-blue-700 text-center">Credit Card Bill Payment</h1>
          <h2 className="text-md text-gray-600 text-center mb-8">Pay your Bill instantly and securely</h2>
        </div>

        {/* Bank Name Selection */}
        <div className="relative">
          <label className="text-sm block mb-1">Bank Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            placeholder="Search Bank..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowBankDropdown(true);
            }}
            onFocus={() => setShowBankDropdown(true)}
          />
          {showBankDropdown && filteredBanks.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-md z-10 mt-1 max-h-48 overflow-y-auto">
              {filteredBanks.map((bank, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                  onClick={() => handleBankSelect(bank)}
                >
                  {bank}
                </li>
              ))}
            </ul>
          )}
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

        {/* Submit Button */}
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
