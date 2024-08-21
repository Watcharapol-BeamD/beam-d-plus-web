import Image from "next/image";
import React from "react";
import meeting_img from "@/app/assets/about-us/millennial-group-young-businesspeople-asia-businessman-businesswoman-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-meeting-room-small-mod.jpg";
import AboutMainBanner from "./components/about-main-banner-section/about-main-banner-section";
import ProjectSection from "./components/project-section/project-section";
import PerformanceSection from "../homepage/components/performance-section/performance-section";
import PartnerCarousel from "../homepage/components/partner-carousel/PartnerCarousel";
import OurServiceSection from "../homepage/components/our-service-section/our-service-section";
import TechnologyExpertiseSection from "../homepage/components/technology-expertise-section/technology-expertise-section";

export default function AboutUsPage() {
  const renderDescription = () => {
    return (
      <div className="py-10 md:text-lg text-base space-y-4 px-2">
        <p>
          SEA-Bangkok based leading technology consulting firm with solution
          development team from Bangalore India. With exceptional team of highly
          experienced professionals and expertise across multiple industries,
        </p>
        <p className="md:block hidden">
          we are dedicated to assist clients in optimizing their business
          operations through the strategic utilization of Information
          Technology. By understanding the unique needs and challenges of each
          client, we can tailor our services to deliver custom-made solutions
          that address specific requirements.
        </p>
      </div>
    );
  };

  const renderAboutUs = () => {
    return (
      <div className="container mx-auto ">
        <AboutMainBanner />
      
          {renderDescription()}
        <div className="px-2">
          <ProjectSection /></div>
          <div className="py-6"> <PerformanceSection /></div>
          <PartnerCarousel />
          <TechnologyExpertiseSection />
          <OurServiceSection />
        
      </div>
    );
  };

  return <div className="flex-1">{renderAboutUs()}</div>;
}
