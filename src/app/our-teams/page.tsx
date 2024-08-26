import React from "react";
import team_img from "@/app/assets/our-team/african-head-department-is-satisfied-with-work-staff-asian-male-student-trendy-shirt-telling-univers.webp";
import OurTeamMainBanner from "./components/our-team-main-banner/our-team-main-banner";

export default function OurTeam() {
  const renderOurTeam = () => {
    return (
      <div className="xl:container mx-auto flex justify-center item-center">
 <OurTeamMainBanner/>
      </div>
    );
  };

  return <div>{renderOurTeam()}</div>;
}
