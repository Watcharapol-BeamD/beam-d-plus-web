import React from "react";
import kannika_img from "@/app/assets/our-team/teammate/kannika_img.webp";
import Image, { StaticImageData } from "next/image";
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
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "",
    },
  ];

  const renderTeamCard = (item: TeamCardProps) => {
    return (
      <div className="h-full w-56 rounded-tr-3xl rounded-bl-3xl overflow-hidden p-2 border border-primary">
        <Image
          alt=""
          src={item.image_name}
          className="h-full w-56 rounded-tr-3xl rounded-bl-3xl"
        />
      </div>
    );
  };

  const renderCardList = () => {
    return (
      <div className="m-4 h-full w-full flex gap-8">
        {data.map((item: TeamCardProps, index: number) => {
          return (
            <React.Fragment key={index}>{renderTeamCard(item)}</React.Fragment>
          );
        })}
      </div>
    );
  };

  return <>{renderCardList()}</>;
}
