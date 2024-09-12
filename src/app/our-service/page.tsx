import Image from "next/image";
import React from "react";
import OurServiceMainBanner from "./components/our-service-main-banner/our-service-main-banner";
import OurServiceSection from "./components/our-service-section/our-service-section";
import TechnologyExpertiseSection from "../homepage/components/technology-expertise-section/technology-expertise-section";
import ProjectSection from "../about-us/components/project-section/project-section";
import ProjectList from "../about-us/components/product-list/product-list";
import DropdownList from "../about-us/components/dropdown-list/DropdownList";
import ClientAchievementSection from "./components/client-achievement-section/client-achievement-section";

export default function OurServicePage() {
  const renderProject = () => {
    return (
      <div className="flex justify-around md:flex-row flex-col items-center w-full space-y-8 gap-2">
        <div>
          <ProjectList />
        </div>
        <div>
          <DropdownList />
        </div>
      </div>
    );
  };
 
  const renderOurService = () => {
    return (
      <div className="xl:container mx-auto w-full h-full ">
        <OurServiceMainBanner />
        <div className="py-6">
          <OurServiceSection />
        </div>
        <TechnologyExpertiseSection />
        <div className="py-4 px-2">{renderProject()}</div>
        <div className="py-6">
          <ClientAchievementSection />
        </div>
     
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderOurService()}</div>;
}
