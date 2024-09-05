import React from "react";
import banner from "@/app/assets/main/multiethnicbusinessteamhavingabrainstorming_preview-ezgif.com-video-to-webp-converter.webp";
import Image from "next/image";
import Button from "@/app/components/Button";
import Link from "next/link";
import ButtonLink from "@/app/components/ButtonLink";

export default function MainBannerSection() {
  const renderBanner = () => {
    return (
      <div className="h-full w-full relative bg-gray-200   ">
        <div className="flex justify-end h-full w-full">
          <div className="clip-style-v3 h-full w-214 bg-primary absolute"></div>
          <div className="clip-style-v2 h-full w-208 bg-sub-main absolute"></div>
          <Image alt="" src={banner} className="clip-style-v1 h-full w-220" />
        </div>

        <div className="p-10 absolute xl:bottom-0   ">
          <div className="text-4xl font-bold">
            <p>Your Awesome </p>
            <p>Technology Partner</p>
          </div>
          <div className="py-2">
            <ButtonLink title={"HOW IT WORK?"} url={"/about-us"} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full ">
      {renderBanner()}
      <div className="xl:my-20 sm:mt-52 sm:my-20 mt-60 mb-10">
        <p className="text-center text-3xl">WE ARE</p>
        <p className="text-center text-3xl">PROUD PARTNER TO GREAT BRANDS</p>
      </div>
    </div>
  );
}
