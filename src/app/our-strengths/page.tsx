import React from "react";
import OurStrengthsMainBanner from "./components/our-strengths-main-banner/our-strengths-main-banner";
import SolutionSection from "../homepage/components/solution-section/solution-section";
import InnovativeApproachesAndStrategiesSection from "./components/innovative-approaches-and-strategies-section/innovative-approaches-and-strategies-section";

export default function OurStrengthsPage() {
  const renderOurStrengths = () => {
    return (
      <div className="xl:container mx-auto">
        <OurStrengthsMainBanner />
        <div className="md:px-0 px-4 ">
          <SolutionSection />
        </div>
        <InnovativeApproachesAndStrategiesSection />
      </div>
    );
  };

  return <div className="flex-1">{renderOurStrengths()}</div>;
}
