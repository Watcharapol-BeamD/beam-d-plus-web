import Image from "next/image";
import React from "react";
import OurServiceMainBanner from "./components/our-service-main-banner/our-service-main-banner";
import OurServiceSection from "./components/our-service-section/our-service-section";

export default function OurServicePage() {
  const renderOurService = () => {
    return (
      <div className="xl:container mx-auto w-full h-full">
       
          <OurServiceMainBanner />
          
       <OurServiceSection/>
      </div>
    );
  };

  return <div className="flex-1">{renderOurService()}</div>;
}
