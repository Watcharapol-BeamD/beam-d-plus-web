import React from "react";
import kannika_img from "@/app/assets/our-team/teammate/kannika_img.webp";
import { StaticImageData } from "next/image";
import team_img from "@/app/assets/our-team/african-head-department-is-satisfied-with-work-staff-asian-male-student-trendy-shirt-telling-univers.webp";

type TeamCardProps = {
  image_name: StaticImageData;
  full_name: string;
  position: string;
};
export default function TeamListSection() {
  const data: TeamCardProps[] = [
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "",
    },
  ];

  const renderTeamCard =()=>{
    return <div className="h-40 w-20 bg-white">ssss</div>
  }

  const renderCardList = () => {
    return <div>{renderTeamCard()}</div>;
  };

  return < >{renderCardList()}</>;
}
