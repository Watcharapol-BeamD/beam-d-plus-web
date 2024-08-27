import React from "react";

import OurTeamMainBanner from "./components/our-team-main-banner/our-team-main-banner";
import TeamListSection from "./components/team-list-section/team-list-section";

export default function OurTeam() {
  const renderOurTeam = () => {
    return (
      <div className="xl:container mx-auto  ">
        <OurTeamMainBanner />
        <div className="lg:px-0 px-2 py-6">
  
          <TeamListSection />
        </div>
      </div>
    );
  };

  return <div className="flex-1">{renderOurTeam()}</div>;
}
