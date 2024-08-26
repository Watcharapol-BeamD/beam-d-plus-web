import React from "react";
import Image from "next/image";
import mock_img from "@/app/assets/join.png";

export default function ClientAchievementSection() {
  // lg:h-76 lg:w-76 910px:h-72 910px:w-72 h-68 w-68
  const renderAchievementCard = () => {
    return (
      <div
        className="bg-cover bg-center lg:h-76 lg:w-76 910px:h-72 910px:w-72 550px:h-64 550px:w-64 h-56 w-56 rounded-3xl overflow-hidden text-white   "
        style={{ backgroundImage: `url(${mock_img.src})` }}
      >
        <div className="h-full w-full bg-gradient-to-t from-primary flex flex-col justify-end p-3">
          <p className="text-bold 550px:text-lg text-base">Chum Chum Online</p>
          <div className="space-x-2 550px:text-sm text-xs">
            <button className="border py-0.5 px-2 rounded-full">
              E-Commerce
            </button>
            <button className="border py-0.5 px-2 rounded-full">
              Back End
            </button>
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
        <div className="xl:w-5/6 w-full content-center place-items-center gap-2 grid 810px:grid-cols-3 xs:grid-cols-2 grid-cols-1 ">
          {[...Array(6)].map((_, index) => (
            <React.Fragment key={index}>
              {renderAchievementCard()}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return <>{renderAchievement()}</>;
}
