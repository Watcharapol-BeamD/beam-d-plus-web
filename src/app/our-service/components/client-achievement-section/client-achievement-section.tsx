import React from "react";
import Image, { StaticImageData } from "next/image";
import b2b_img from "@/app/assets/our-service/client-achievements/operation_img.webp";
import logistic_img from "@/app/assets/our-service/client-achievements/DSCF0691.webp";
import telesale_img from "@/app/assets/our-service/client-achievements/DSCF0970.webp";
import retailer_img from "@/app/assets/our-service/client-achievements/map_img.webp";
import chumchum_online_img from "@/app/assets/our-service/client-achievements/chumchum-online_img.webp";
import chumchum_app_mock_img from "@/app/assets/our-service/client-achievements/Phone_img.webp";

type AchievementDataType = {
  id: number;
  title: string;
  image_name: StaticImageData;
  description: string;
  tag: string[];
};

export default function ClientAchievementSection() {
  const data: AchievementDataType[] = [
    {
      id: 1,
      title: "B2B E-DISTRIBUTION SOLUTIONS (FMCG)",
      image_name: b2b_img,
      description: ``,
      tag: ["E-Commerce", "Support"],
    },
    {
      id: 2,
      image_name: logistic_img,
      title: "LOGISTICS AND FLEET MANAGEMENT",
      description: ``,
      tag: ["E-Commerce"],
    },
    {
      id: 3,
      image_name: telesale_img,
      title: "ADVANCED RETAIL AND WHOLESALE SOLUTIONS",
      description: ``,
      tag: ["E-Commerce"],
    },
    {
      id: 4,
      image_name: retailer_img,
      title: "RETAIL TECHNOLOGY AND AI LABS",
      description: ``,
      tag: ["Support", "Manage"],
    },
    {
      id: 5,
      image_name: chumchum_online_img,
      title: "WEB-APP DEVELOPMENT LOGISTICS AND FLEET MANAGEMENT",
      description: ``,
      tag: ["Front End", "Back End"],
    },
    {
      id: 6,
      image_name: chumchum_app_mock_img,
      title: "CHUMCHUM APP DEVELOPMENT",
      description: ``,
      tag: ["Support", "Back End"],
    },
  ];

  // lg:h-76 lg:w-76 910px:h-72 910px:w-72 h-68 w-68
  const renderAchievementCard = (item: AchievementDataType) => {
    return (
      <div
        className="bg-cover bg-center lg:h-76 lg:w-76 910px:h-72 910px:w-72 550px:h-64 550px:w-64 h-56 370px:w-full w-56 rounded-3xl overflow-hidden text-white hover:scale-105 transform transition-transform duration-300 "
        style={{ backgroundImage: `url(${item.image_name.src})` }}
      >
        <div className="h-full w-full bg-gradient-to-t hover:from-sub-main from-primary flex flex-col justify-end p-3">
          <p className="text-bold 550px:text-base text-sm">{item.title}</p>
          <div className="space-x-2 text-xs">
            {item.tag.map((tag,index) => {
              return (
                <button key={index+"tag"} className="border py-0.5 px-2 rounded-full">
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderAchievement = () => {
    return (
      <div className="xl:container mx-auto flex flex-col items-center justify-center w-full px-2 ">
        <p className="text-3xl py-8">Client Achievements</p>
        {/* <div className="flex flex-wrap w-full bg-yellow-400 justify-center  "> */}
        <div className="xl:w-5/6 w-full content-center place-items-center gap-2 grid 810px:grid-cols-3 370px:grid-cols-2 grid-cols-1 ">
          {data.map((item: AchievementDataType, index: number) => (
            <React.Fragment key={index}>
              {renderAchievementCard(item)}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return <>{renderAchievement()}</>;
}
