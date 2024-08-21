import Image from "next/image";
import React from "react";
import OurServiceMainBanner from "./components/our-service-main-banner";

export default function OurServicePage() {
  const renderOurService = () => {
    return (
      <div className="xl:container mx-auto ">
        <div>
          <OurServiceMainBanner />
        </div>
      </div>
    );
  };

  return <div className="flex-1">{renderOurService()}</div>;
}
