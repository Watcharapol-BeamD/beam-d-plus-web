"use client"
import React from "react";
import banner from "@/app/assets/main/5343184-Coll-wavebreak-Associate.webp";
import Image from "next/image";
import Button from "@/app/components/Button";
import Link from "next/link";
import ButtonLink from "@/app/components/ButtonLink";
import { useVisibilityOnScroll } from "@/app/hooks/useVisibilityOnScroll";

export default function MainBannerSection() {
 const isVisible = useVisibilityOnScroll("main-banner")

  const renderBanner = () => {
    return (
      <div id="main-banner" className="h-full w-full static xl:relative bg-gray-200 xl:block flex xl:flex-row flex-col-reverse ">
        
        <div className={`animate-fade-right animate-ease-in-out md:py-10 md:px-10 px-4 py-10 xl:absolute xl:bottom-0 z-10  `} >
          <div className={`lg:text-4xl text-3xl font-bold`} >
            <p>Your Awesome </p>
            <p>Technology Partner</p>
          </div>
          <div className="py-2">
            <ButtonLink title={"HOW IT WORK?"} url={"/about-us"} />
          </div>
        </div>

        <div className="flex justify-end h-full w-full relative">
          <div className="clip-style-v3 h-full w-214 bg-primary absolute z-0"></div>
          <div className="clip-style-v2 h-full w-208 bg-sub-main absolute z-0"></div>
          <Image alt="" src={banner} className={`clip-style-v1 h-full w-220 animate-fade animate-ease-in-out`} />
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
