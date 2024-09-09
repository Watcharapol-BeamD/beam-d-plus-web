import React from "react";
import banner from "@/app/assets/main/multiethnicbusinessteamhavingabrainstorming_preview-ezgif.com-video-to-webp-converter.webp";
import Image from "next/image";
import Button from "@/app/components/Button";
import Link from "next/link";
import ButtonLink from "@/app/components/ButtonLink";
import { useVisibilityOnScroll } from "@/app/hooks/useVisibilityOnScroll";

export default function MainBannerSection() {
 

  const renderBanner = () => {
    return (
      <div className="h-full w-full static xl:relative bg-gray-200 xl:block flex xl:flex-row flex-col-reverse ">
        
        <div className="md:py-10 md:px-10 px-4 py-10 xl:absolute xl:bottom-0">
          <div className="lg:text-4xl text-3xl font-bold">
            <p>Your Awesome </p>
            <p>Technology Partner</p>
          </div>
          <div className="py-2">
            <ButtonLink title={"HOW IT WORK?"} url={"/about-us"} />
          </div>
        </div>

        <div className="flex justify-end h-full w-full relative">
          <div className="clip-style-v3 h-full w-214 bg-primary absolute"></div>
          <div className="clip-style-v2 h-full w-208 bg-sub-main absolute"></div>
          <Image alt="" src={banner} className="clip-style-v1 h-full w-220" />
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full ">
      {renderBanner()}
      <div className="sm:my-10 my-4 px-1">
        <p className="text-center lg:text-3xl text-2xl">WE ARE</p>
        <p className="text-center lg:text-3xl text-2xl">PROUD PARTNER TO GREAT BRANDS</p>
      </div>
    </div>
  );
}
