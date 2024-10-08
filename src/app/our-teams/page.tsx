import React from "react";

import OurTeamMainBanner from "./components/our-team-main-banner/our-team-main-banner";
import TeamListSection from "./components/team-list-section/team-list-section";
import PerformanceSection from "../homepage/components/performance-section/performance-section";

export default function OurTeamPage() {
  const renderOurTeam = () => {
    return (
      <div className="xl:container mx-auto ">
        <OurTeamMainBanner />
        <div className="lg:px-0 px-2 py-6">
          <TeamListSection />
        </div>
        <PerformanceSection bgColor="bg-primary" textColor="text-white"/>
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderOurTeam()}</div>;
}
