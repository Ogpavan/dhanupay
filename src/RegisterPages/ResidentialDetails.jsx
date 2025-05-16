import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Stepper from "../components/Stepper";
import { fetchStatesList } from "../Api/stateListApi.js";
import { fetchCitiesByState } from "../Api/CityListApi.js";
import axios from "axios";

const ResidentialDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
   const [btnLoading, setbtnLoading] = useState(false);

  const [form, setForm] = useState({
    houseNo: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [basicDetails, setBasicDetails] = useState(location.state?.basicDetails || {});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const savedForm = localStorage.getItem("residentialForm");
    if (savedForm) {
      const parsedForm = JSON.parse(savedForm);
      // Only overwrite if form is empty (all fields blank)
      const isFormEmpty = Object.values(form).every((val) => val === "");
      if (isFormEmpty) {
        setForm(parsedForm);
      }
    }
  }, []);


  // Save form to localStorage on change
  useEffect(() => {
    const isFormEmpty = Object.values(form).every((val) => val === "");
    if (!isFormEmpty) {
      localStorage.setItem("residentialForm", JSON.stringify(form));
    }
  }, [form]);

  useEffect(() => {
    const getStates = async () => {
      try {
        const statesData = await fetchStatesList();
        setStates(statesData);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCities = async () => {
      if (form.state) {
        try {
          const citiesData = await fetchCitiesByState(form.state);
          setCities(citiesData);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      }
    };
    getCities();
  }, [form.state]);

  const validate = () => {
    if (!form.houseNo.trim()) {
      Swal.fire("Missing Field", "House No. is required", "error");
      return false;
    }
    if (!form.address.trim()) {
      Swal.fire("Missing Field", "Address is required", "error");
      return false;
    }
    if (!form.landmark.trim()) {
      Swal.fire("Missing Field", "Landmark is required", "error");
      return false;
    }
    if (!/^\d{6}$/.test(form.pincode)) {
      Swal.fire("Invalid Pincode", "Enter a valid 6-digit pincode", "error");
      return false;
    }
    if (!form.state) {
      Swal.fire("Missing Field", "Please select a state", "error");
      return false;
    }
    if (!form.city) {
      Swal.fire("Missing Field", "Please select a city", "error");
      return false;
    }
    return true;
  };

  // const handleNext = () => {
  //   if (!validate()) return;

  //   const residentialData = { ...form };
  //   console.log("data at resential pages")
  //   console.log("Basic Details:", basicDetails);
  // console.log("Residential Data:", residentialData);

  //   navigate("/business-details");
  // };


  // Inside ResidentialDetails component
  const handleNext = async () => {
    setbtnLoading(true);

    const newUserId = localStorage.getItem("newUserId")
    if (!validate()) {setbtnLoading(false ); return} 

    const residentialData = { ...form };


    const payload = {
      UserID: newUserId, // Assuming you're still sending this empty
      NewUserId: newUserId,
      RoleID: "19",
      Stage: "ResidentialDetails",
      PersonalAddressLine1: residentialData.address,
      PersonalAddressLine2: residentialData.landmark,
      PersonalCityID: residentialData.city,
      PersonalStateID: residentialData.state,
      PersonalPincode: residentialData.pincode,
    };

    console.log("Payload before API call:", payload);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/registerbystage`, payload);
      console.log("API Response:", response.data);

      Swal.fire("Success", "Residential details submitted successfully!", "success");
      setbtnLoading(false);
      navigate("/business-details");
    } catch (error) {
      console.error("API Error:", error);
      Swal.fire("Error", error?.response?.data?.message || "Something went wrong!", "error");
    setbtnLoading(false);
    }
  };
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="font-poppins h-[100dvh] bg-[#2C2DCB] sm:hidden">
      <div className="h-[20vh] px-4 flex items-center">
        <span className="text-white text-xl poppins-medium">&lt; Register</span>
      </div>

      <div className="h-[83dvh] bg-white rounded-t-3xl px-4 py-6 shadow-md -mt-6 overflow-y-auto">
        <Stepper currentStep={1} />
        <h1 className="poppins-semibold text-[#121649] text-center py-4">Residential Details</h1>

        <form className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="House No."
              className="input-field"
              value={form.houseNo}
              maxLength={10}
              onChange={(e) => handleChange("houseNo", e.target.value)}
            />
            <input
              type="text"
              placeholder="Residential Area"
              className="input-field"
              value={form.address}
              maxLength={50}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Landmark"
            className="input-field"
            value={form.landmark}
            maxLength={50}
            onChange={(e) => handleChange("landmark", e.target.value)}
          />

          <input
            type="tel"
            placeholder="Pincode"
            className="input-field"
            inputMode="numeric"
            maxLength={6}
            value={form.pincode}
            onChange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
              setForm({ ...form, pincode: onlyDigits });
            }}
          />


          <select
            value={form.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none ${form.state ? "text-gray-800" : "text-gray-400"}`}
          >
            <option value="" disabled hidden>Select State</option>
            {states.map((stateItem) => (
              <option key={stateItem.StateId} value={stateItem.StateId}>
                {stateItem.StateName}
              </option>
            ))}
          </select>

          <select
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none ${form.city ? "text-gray-800" : "text-gray-400"}`}
          >
            <option value="" disabled hidden>Select City</option>
            {cities.length > 0 ? (
              cities.map((cityItem) => (
                <option key={cityItem.CityId} value={cityItem.CityId}>
                  {cityItem.CityName}
                </option>
              ))
            ) : (
              <option disabled>No cities available</option>
            )}
          </select>
        </form>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-200 text-gray-800 text-lg py-2 rounded-xl font-semibold"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={btnLoading}
            className="w-1/2 bg-[#2C2DCB] text-white text-lg py-2 rounded-xl font-semibold"
          >
          {btnLoading ? 'Processing...' : 'Save & Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentialDetails;
