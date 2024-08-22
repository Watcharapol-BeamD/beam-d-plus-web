import React from "react";
import Image from "next/image";
import mock_img from "@/app/assets/join.png";

export default function ClientAchievementSection() {
  const renderAchievementCard = () => {
    return (
      <div className="  bg-red-400 m-4 rounded-3xl">
        <div
          className="bg-cover bg-center h-76 w-76  rounded-3xl overflow-hidden text-white"
          style={{ backgroundImage: `url(${mock_img.src})` }}
        >
          sssdsasdas
        </div>
        {/* <Image alt="" src={mock_img} /> */}
      </div>
    );
  };

  return <div>{renderAchievementCard()}</div>;
}
