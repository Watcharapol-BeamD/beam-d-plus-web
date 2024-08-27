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
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Nuttapon Wongkongmunsakul (Nut)",
      position: "Solution Development Head",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      image_name: kannika_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
  ];

  const renderTeamCard = (item: TeamCardProps) => {
    return (
      <div className="relative h-full w-68     ">
        <div className="h-full w-56 rounded-tr-3xl rounded-bl-3xl overflow-hidden p-2 border border-primary">
          <Image
            alt=""
            src={item.image_name}
            className="h-full w-full  rounded-tr-3xl rounded-bl-3xl"
          />
        </div>
        <div className="absolute bg-white border bottom-4 right-0 py-1 px-2 rounded-xl shadow">
          <p className="invisible text-sm font-semibold">{item.full_name}</p>
          <p className="invisible text-sm ">{item.position}</p>
        </div>
        <div className="absolute bg-white border bottom-6 right-2 py-1 px-2 rounded-xl shadow">
          <p className="text-sm font-semibold">{item.full_name}</p>
          <p className="text-sm">{item.position}</p>
        </div>
      </div>
    );
  };

  const renderCardList = () => {
    return (
      <div className="h-full w-full flex justify-center flex-wrap gap-8  ">
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
