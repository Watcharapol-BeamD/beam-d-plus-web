import Image from "next/image";
import React from "react";
import Industry_img from "@/app/assets/our-service/xlerate/asian-guy-is-playing-jenga-wood-blocks-tower-game.webp";
import Hassle_img from "@/app/assets/our-service/xlerate/male-asian-caucasian-engineer-professional-having-discussion-standing-consult-machine-factory-two-expert-coworker-brainstorm-expl.webp";
import Efficient_img from "@/app/assets/our-service/xlerate/modern-equipped-computer-lab.webp";

export default function XlerateContentSection() {
  const renderXlerateContent = () => {
    return (
      <div className="md:space-y-12 space-y-6">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">Industry Friendly</p>
            <p className="text-base">
              Xlerate is a Fleet Productivity System that is currently adopted
              by transport operators across a range of industries. The system
              integrates GIS mapping, transaction processing and wireless
              communications on a user-friendly interface that can be operated
              remotely, with real-time notifications.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={Hassle_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">Hassle Free Solution</p>
            <p className="text-base">
              The web-based system removes the hassle of manual back ups by
              automatically enabling upgrades and stores fleet operational data
              on secure servers, while allowing the user to administer which
              other users can be invited to access.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={Industry_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              Efficient Data Analysis
            </p>
            <p className="text-base">
              Xlerate transparently presents invaluable data, such as, fuel
              intake and the location of assets that lends to an economical
              designation of jobs and precise invoicing.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={Efficient_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderXlerateContent()}</>;
}
