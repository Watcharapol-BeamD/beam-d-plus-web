"use client"
import React from "react";
import SapMainBanner from "./components/sap-main-banner/sap-main-banner";
import SapInfoSection from "./components/sap-info/sap-info-section";
import ResourcePlanningSection from "./components/resource-planning-section/resource-planning-section";
import { useVisibilityOnScroll } from "@/app/hooks/useVisibilityOnScroll";

export default function SapPage() {
  const isVisible = useVisibilityOnScroll("sap-page")
  const renderSap = () => {
    return (
      <div id="sap-page" className="xl:container mx-auto">
        <SapMainBanner />
        <div className=" md:px-10 px-2 py-4">
          <SapInfoSection />
          <ResourcePlanningSection />
        </div>
      </div>
    );
  };

  return <div className={`flex-1 ${isVisible?" ":"animate-fade"} ` }>{renderSap()}</div>;
}
//need to use this ${isVisible?"":"animate-fade"} 
//animate-fade conflict wiih read more popup,navbar will hidden screen