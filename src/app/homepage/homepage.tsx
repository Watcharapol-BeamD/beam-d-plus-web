import React from "react";
import PartnerCarousel from "./components/partner-carousel/PartnerCarousel";
import TeamCarousel from "./components/team-carousel/TeamCarousel";
import Button from "../components/Button";

import TechnologyExpertiseSection from "./components/technology-expertise-section/technology-expertise-section";

import ml_img from "@/app/assets/our-service/ml.svg";
import Image from "next/image";
import PerformanceSection from "./components/performance-section/performance-section";
import SolutionSection from "./components/solution-section/solution-section";
import ContactUsSection from "./components/contact-us-section/contact-us-section";
import OurServiceSection from "./components/our-service-section/our-service-section";
import TeamSection from "./components/team-section/team-section";
import MainBannerSection from "./components/main-banner-section/main-banner-section";

export default function Homepage() {
  const renderHomepage = () => {
    return (
      <div className="xl:container mx-auto min-h-screen">
        <MainBannerSection />
        <div className="lg:py-10 py-4 ">  
           <PartnerCarousel />
           </div>
     
        <OurServiceSection />
        {/* {renderOurService()} */}
        {/* {renderOurTeamDesktop()} */}
        <div className="py-4">
          <TeamSection />
        </div>
        <TechnologyExpertiseSection />
        <PerformanceSection />
        <SolutionSection />
        <ContactUsSection />
      </div>
    );
  };

  return <div className="flex-1  ">{renderHomepage()}</div>;
}
