import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useWallet } from '../../src/context/WalletContext';

function WalletDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { walletType, amount } = location.state || {};
    const { wallets, loading, fetchWallets } = useWallet();

    const isIncentiveWallet = walletType === "Incentive Wallet";
    const isAEPSWallet = walletType === "AEPS Wallet";

    const [view, setView] = useState("default");
    const [showAll, setShowAll] = useState(false);

    const [bankAccounts, setBankAccounts] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState("");
    const [transferAmount, setTransferAmount] = useState("");

    const [loadAmount, setLoadAmount] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const allTransactions = [
        { id: 1, date: "2025-05-01", amount: 1200, type: "Credit", desc: "Referral Bonus" },
        { id: 2, date: "2025-05-02", amount: 500, type: "Debit", desc: "Bill Payment" },
        { id: 3, date: "2025-05-03", amount: 2200, type: "Credit", desc: "Incentive" },
        { id: 4, date: "2025-05-04", amount: 300, type: "Debit", desc: "Recharge" },
        { id: 5, date: "2025-05-05", amount: 1000, type: "Credit", desc: "Reward" },
        { id: 6, date: "2025-05-06", amount: 450, type: "Debit", desc: "Transfer" },
        { id: 7, date: "2025-05-07", amount: 350, type: "Credit", desc: "Cashback" },
        { id: 8, date: "2025-05-08", amount: 200, type: "Debit", desc: "Purchase" },
        { id: 9, date: "2025-05-09", amount: 300, type: "Credit", desc: "Interest" },



    ];

    const displayedTransactions = showAll ? allTransactions : allTransactions.slice(0, 8);

    const token = localStorage.getItem('Token'); 
    const userId = localStorage.getItem('UserId');

    useEffect(() => {
        if (view === "moveToBank") {
            setTimeout(() => {
                setBankAccounts([
                    { id: "acc1", name: "ICICI - 1234" },
                    { id: "acc2", name: "HDFC - 5678" },
                    { id: "acc3", name: "SBI - 9012" },
                ]);
            }, 500);
        }
    }, [view]);


    useEffect(() => {
        

        fetchWallets(userId, token);
        console.log("wallets",wallets);
    }, []);

const handleswapMoney = async (e) => {
    e.preventDefault();

    const amt = parseFloat(transferAmount);

    // Find wallet info
    const fromWallet = wallets.find(w => w.WalletType === "Primary");
    const toWallet = wallets.find(w => w.WalletType === "Incentive");

    if (!fromWallet || !toWallet) {
        Swal.fire("Wallet Error", "Selected wallets not found.", "error");
        return;
    }

    // Check balance
    if (amt > parseFloat(fromWallet.Balance)) {
        Swal.fire("Amount Exceeded", "You cannot transfer more than your wallet balance.", "error");
        return;
    }

    const apiUrl = "https://gateway.dhanushop.com/api/WalletMaster/SwapWallet";
    const payload = {
        UserId: userId,
        FromWalletId: fromWallet.WalletId,
        ToWalletId: toWallet.WalletId,
        Source: "Retailer",
        CreatedBy: userId,
        Amount: transferAmount
    };

    try {
        const response = await axios.post(apiUrl, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        const { success, message } = response.data;

        if (success) {
            Swal.fire({
                icon: "success",
                title: "Transfer Submitted",
                text: "Payment Sucessfully Transfered",
                confirmButtonColor: "#6366F1",
            });
            console.log("Transfer Data:", payload);
            setSelectedAccount("");
            setTransferAmount("");
            navigate(-1);
        } else {
            Swal.fire("Transfer Failed", message || "An error occurred during the transfer.", "error");
        }
    } catch (error) {
        console.error("API Error:", error);
        Swal.fire("Error", "Something went wrong while processing your request.", "error");
    }
};


    const handleTransfer = async (e) => {
    e.preventDefault();

    const amt = parseFloat(transferAmount);

    if (!selectedAccount || !amt) {
        Swal.fire("Missing Info", "Please select an account and enter amount.", "warning");
        return;
    }

    if (amt > parseFloat(amount)) {
        Swal.fire("Amount Exceeded", "You cannot transfer more than your wallet balance.", "error");
        return;
    }

    const apiUrl = "https://gateway.dhanushop.com/api/WalletMaster/WalletPayoutWithdrawl";

    const payload = {
        UserId: userId,                            // dynamically from state/context
        ServiceName: "IDFC Payout API",           // hardcoded as per requirement
        WalletType: 'Primary',              // e.g. "Primary" or "Incentive"
        WithdrawalAmount: transferAmount,
        CreatedBy: userId                          // same as UserId, if applicable
    };

    console.log("Transfer Payload:", payload);

    try {
        const response = await axios.post(apiUrl, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        const res = response.data;

        if (res.success) {
            Swal.fire({
                icon: "success",
                title: "Transfer Submitted",
                text: "Money Transfered Successfully",
                confirmButtonColor: "#6366F1",
            });
            console.log("Transfer Data:", payload);
            setSelectedAccount("");
            setTransferAmount("");
            navigate(-1);       
        } else {
            Swal.fire("Transfer Failed", res.message || "An error occurred during the transfer.", "error");
        }
    } catch (error) {
        console.error("API Error:", error);
        Swal.fire("Error", "Something went wrong while processing your request.", "error");
    }
};


    const handleLoadWallet = (e) => {
        e.preventDefault();
        if (!loadAmount || !fullName || !email || !phone) {
            Swal.fire("Missing Info", "Please fill out all fields.", "warning");
            return;
        }
        Swal.fire({
            icon: "success",
            title: "Redirecting to Payment Gateway",
            text: "Your details are ready for payment processing.",
            confirmButtonColor: "#22C55E",
        });
        console.log("Load Wallet Data:", { loadAmount, fullName, email, phone });

        setLoadAmount("");
        setFullName("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="min-h-screen bg-white font-[Poppins]">
            {/* Header */}
            <div className="bg-indigo-700 py-4 px-4 pb-10 h-fit rounded-b-3xl text-white">
                <div className="flex items-center">
                    <button onClick={() => navigate(-1)} className="text-white text-xl mr-4">←</button>
                    <h1 className="text-xl font-bold">{walletType || "Wallet"}</h1>
                </div>
                <div className="px-4 mt-10 flex flex-col">
                    <div className="p-6 text-center">
                        <p className="text-white text-lg">Wallet Balance</p>
                        <p className="text-4xl text-white font-bold mt-1">₹{amount || "--"}</p>
                    </div>

                    {isIncentiveWallet && (
                        <button
                            onClick={() => setView("loadWallet")}
                            className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl"
                        >
                            Load Wallet
                        </button>
                    )}
                    {isAEPSWallet && (
                        <div className="flex flex-col">
                            <button
                                onClick={() => setView("moveToBank")}
                                className="mt-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-xl"
                            >
                                Move to Bank
                            </button>
                            <button
                                onClick={() => setView("moveToOtherWallet")}
                                className="mt-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-xl"
                            >
                                move to Incentive Wallet
                            </button>
                        </div>


                    )}
                </div>
            </div>

            {/* Conditional Views */}
            <div className="p-4 mt-4">
                {/* Load Wallet */}
                {view === "loadWallet" && (
                    <div className="bg-gray-100 p-4 rounded-xl shadow relative">
                        <button onClick={() => setView("default")} className="absolute left-4 top-4 text-lg text-indigo-600 hover:underline">←</button>
                        <div className="pt-10 text-center">
                            <h2 className="text-xl font-semibold text-gray-800">Load Wallet</h2>
                            <form onSubmit={handleLoadWallet} className="space-y-4 mt-4 text-left max-w-md mx-auto">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input
                                        type="number"
                                        value={loadAmount}
                                        onChange={(e) => setLoadAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="mt-1 block w-full rounded-xl py-2 px-2 border-gray-300 shadow-sm"
                                    />
                                </div>
                                {/* <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Your Name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                </div> */}
                                {/* <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                </div> */}
                                {/* <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Mobile Number"
                                        maxLength={10}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                </div> */}
                                <button type="submit" className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white py-2 font-semibold">
                                    Proceed to Pay
                                </button>
                            </form> 
                        </div>
                    </div>
                )}

                {/* Move to moveToOtherWallet */}
                {view === "moveToOtherWallet" && (
                    <div className="bg-gray-100 p-4 rounded-xl shadow relative">
                        <button onClick={() => setView("default")} className="absolute left-4 top-4 text-lg text-indigo-600 hover:underline">←</button>
                        <div className="pt-10 max-w-md mx-auto">
                            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Move to Incentive wallet</h2>
                            <form onSubmit={handleswapMoney} className="space-y-4">

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input
                                        type="number"
                                        value={transferAmount}
                                        onChange={(e) => setTransferAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        max={amount}
                                        className="mt-1 block w-full rounded-md py-2 px-2 border-gray-300 shadow-sm"
                                    />
                                </div>
                                <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 rounded-3xl text-white py-2  font-semibold">
                                    Send Money to Incentive Wallet
                                </button>
                            </form>
                        </div>
                    </div>
                )}



                {/* Move to Bank */}
                {view === "moveToBank" && (
                    <div className="bg-gray-100 p-4 rounded-xl shadow relative">
                        <button onClick={() => setView("default")} className="absolute left-4 top-4 text-lg text-indigo-600 hover:underline">←</button>
                        <div className="pt-10 max-w-md mx-auto">
                            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Move to Bank</h2>
                            <form onSubmit={handleTransfer} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Select Account</label>
                                    <select
                                        value={selectedAccount}
                                        onChange={(e) => setSelectedAccount(e.target.value)}
                                        className="mt-1 block w-full rounded-md py-2 px-2 border-gray-300 shadow-sm"
                                    >
                                        <option value="">-- Select Account --</option>
                                        {bankAccounts.map((acc) => (
                                            <option key={acc.id} value={acc.id}>{acc.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input
                                        type="number"
                                        value={transferAmount}
                                        onChange={(e) => setTransferAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        max={amount}
                                        className="mt-1 block w-full rounded-md py-2 px-2 border-gray-300 shadow-sm"
                                    />
                                </div>
                                <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 rounded-3xl text-white py-2  font-semibold">
                                    Transfer
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Default (Transactions) */}
                {view === "default" && (
                    <>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Transactions</h2>
                        <div className="space-y-3">
                            {displayedTransactions.map((txn) => (
                                <div key={txn.id} className="border p-3 rounded-lg flex justify-between items-center shadow-sm">
                                    <div>
                                        <p className="font-medium">{txn.desc}</p>
                                        <p className="text-sm text-gray-500">{txn.date}</p>
                                    </div>
                                    <div className={`text-right font-semibold ${txn.type === "Credit" ? "text-green-600" : "text-red-600"}`}>
                                        {txn.type === "Credit" ? "+" : "-"}₹{txn.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {!showAll && allTransactions.length > 8 && (
                            <div className="mt-4 text-center">
                                <button onClick={() => setShowAll(true)} className="text-indigo-600 font-semibold hover:underline">
                                    View More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default WalletDetails;
