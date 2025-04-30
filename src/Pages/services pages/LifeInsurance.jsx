import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



// Mock config for redirect
const modeConfig = {
    online: {
        url: "https://www.google.com" // Replace with dynamic URL from server later
    }
};
function LifeInsurance() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        mobile: '',
        nominee: '',
        nomineeRelation: '',
        sumAssured: '',
        address: '',
        conditions: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Start loading
        console.log("Form Data:", formData);

        try {
            const response = await fetch('https://your-api-url.com/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            Swal.fire("Success", "Form submitted successfully!", "success");
            setShowForm(false);
            setFormData({ name: '', mobile: '', address: '' }); // reset form
        } catch (error) {
            console.error("API Error:", error);
            Swal.fire("Error", "Failed to submit the form.", "error");
        }finally {
            setIsSubmitting(false); // End loading
          }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-poppins">
            {/* Header */}
            <div className="pt-10 px-4 pb-2 text-gray-800">
                <div className="flex items-center mb-2 cursor-pointer" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">Back</span>
                </div>
            </div>

            {/* Main Selection */}
            <div className="flex flex-col items-center justify-start px-6 flex-1 gap-6">
                <h2 className="text-base font-medium text-gray-800 mb-4 mt-4">Select Mode</h2>

                <div className="flex justify-center gap-8 mt-2">
                    <button
                        className="px-6 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
                        onClick={() => {
                            window.location.href = modeConfig.online.url;
                        }}
                    >
                        Online
                    </button>

                    <button
                        className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition"
                        onClick={() => setShowForm(true)}
                    >
                        Offline
                    </button>
                </div>
            </div>

            {/* Offline Form Fullscreen */}
            {showForm && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">Offline Form</h2>
                        <button onClick={() => setShowForm(false)} className="text-red-500 font-semibold">Close</button>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Nominee Name</label>
                            <input
                                type="text"
                                name="nominee"
                                value={formData.nominee}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Relationship with Nominee</label>
                            <input
                                type="text"
                                name="nomineeRelation"
                                value={formData.nomineeRelation}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Sum Assured (in ₹)</label>
                            <input
                                type="number"
                                name="sumAssured"
                                value={formData.sumAssured}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Health Conditions (Optional)</label>
                            <textarea
                                name="conditions"
                                value={formData.conditions}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-indigo-700 text-white rounded-xl font-semibold text-lg hover:bg-indigo-800 transition"
                        >
                             {isSubmitting ? 'Please wait...' : 'Submit Application'}
                        </button>
                    </form>

                </div>
            )}
        </div>
    );
}
export default LifeInsurance