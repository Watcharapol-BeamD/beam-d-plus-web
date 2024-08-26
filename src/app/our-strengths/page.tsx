import React from "react";
import OurStrengthsMainBanner from "./components/our-strengths-main-banner/our-strengths-main-banner";

export default function OurStrengths() {

  const renderOurStrengths = () => {
    return <div className="xl:container mx-auto  ">
      <OurStrengthsMainBanner/>
    </div>;
  };

  return <div className="flex-1  ">{renderOurStrengths()}</div>;
}
