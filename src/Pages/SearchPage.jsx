import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  financeServices,
  quickServices,
  bbpsServices,
} from "../servicesData/servicesData";

const SearchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  // Filter services based on search term
  const filterServices = (services) =>
    services.filter((service) =>
      service.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredFinance = filterServices(financeServices);
  const filteredQuick = filterServices(quickServices);
  const filteredBBPS = filterServices(bbpsServices);

  const isSearching = searchTerm.trim().length > 0;

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" pb-24 bg-white px-4 py-4 font-poppins">
      {/* Top Bar */}
      <div className="flex items-center gap-2 mb-4">
        <button onClick={() => navigate('/dashboard/home')} className="text-xl">
          ←
        </button>
        <h1 className="text-md font-semibold">Search</h1>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-full border border-gray-300 mb-4 text-sm focus:outline-none"
      />

      {/* Results */}
      <div className="space-y-4">
        {isSearching ? (
          <>
            {filteredFinance.length > 0 && (
              <CategorySection
                title="Finance"
                services={filteredFinance}
                navigate={navigate}
                isExpanded={true}
              />
            )}
            {filteredQuick.length > 0 && (
              <CategorySection
                title="Quick Services"
                services={filteredQuick}
                navigate={navigate}
                isExpanded={true}
              />
            )}
            {filteredBBPS.length > 0 && (
              <CategorySection
                title="BBPS"
                services={filteredBBPS}
                navigate={navigate}
                isExpanded={true}
              />
            )}
            {filteredFinance.length === 0 &&
              filteredQuick.length === 0 &&
              filteredBBPS.length === 0 && (
                <div className="text-center text-sm text-gray-500">
                  No services found
                </div>
              )}
          </>
        ) : (
          <>
            {/* Show Quick Services always */}
            <CategorySection
              title="Quick Services"
              services={quickServices}
              navigate={navigate}
              isExpanded={isExpanded}
            />
            {/* Show Finance and BBPS only when View More is clicked */}
            {isExpanded && (
              <>
                <CategorySection
                  title="Finance"
                  services={financeServices}
                  navigate={navigate}
                  isExpanded={true}
                />
                <CategorySection
                  title="BBPS"
                  services={bbpsServices}
                  navigate={navigate}
                  isExpanded={true}
                />
              </>
            )}
          </>
        )}

        {/* View More / View Less Button */}
        {!isSearching && (
          <div className="text-center mt-6">
            <span
              onClick={toggleView}
              className="text-xs text-indigo-600 cursor-pointer"
            >
              {isExpanded ? "View Less" : "View More"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const CategorySection = ({ title, services, navigate, isExpanded }) => {
  const visibleServices = isExpanded ? services : services.slice(0, 5);

  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-600 mb-2">{title}</h2>
      <div className="space-y-2">
        {visibleServices.map((service, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white shadow-sm cursor-pointer hover:bg-gray-50"
            onClick={() => navigate(service.route)}
          >
            <img src={service.icon} alt={service.label} className="w-6 h-6" />
            <span className="text-sm">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
