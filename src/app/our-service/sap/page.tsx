import React from "react";
import SapMainBanner from "./components/sap-main-banner/sap-main-banner";
import SapInfoSection from "./components/sap-info/sap-info-section";
import ResourcePlanningSection from "./components/resource-planning-section/resource-planning-section";
 
export default function SapPage() {
  const renderSap = () => {
    return (
      <div className="xl:container mx-auto">
        <SapMainBanner />
        <div className=" px-2 py-4 space-y-4">
          <SapInfoSection/>  
          <ResourcePlanningSection/>
        </div>
      
      </div>
    );
  };

  return <>{renderSap()}</>;
}
