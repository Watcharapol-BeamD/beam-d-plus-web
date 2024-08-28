import React from "react";
import SapMainBanner from "./components/sap-main-banner/sap-main-banner";
import SapInfoSection from "./components/sap-info/sap-info-section";
import ResourcePlanningSection from "./components/resource-planning-section/resource-planning-section";
 
export default function SapPage() {
  const renderInformation = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-80 p-6 bg-white rounded-lg shadow-lg">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            // onClick={() => {/* close logic here */}}
          >
            &times;
          </button>
          <div className="text-center text-lg font-semibold text-gray-800">
            Your content here
          </div>
        </div>
      </div>
    );
  };
  

  const renderSap = () => {
    return (
      <div className="xl:container mx-auto">
        <SapMainBanner />
        <div className="px-2 py-4">
          <SapInfoSection/>  
          <ResourcePlanningSection/>     
        </div>
  
      </div>
    );
  };

  return <>{renderSap()}</>;
}
