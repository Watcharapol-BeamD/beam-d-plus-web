"use client";
import Image from "next/image";
import React from "react";
import vscode_img from "@/app/assets/technology/Visual_Studio_Code_1.35_icon.svg.png";
import { useMediaQuery } from "@mui/material";
import TechnologyExpertiseCarousel from "../technology-expertise-carousel/TechnologyExpertiseCarousel";
import { useVisibilityOnScroll } from "@/app/hooks/useVisibilityOnScroll";

export default function TechnologyExpertiseSection() {
  const is768pxScreen = useMediaQuery("(min-width:768px)");
  const isVisible= useVisibilityOnScroll("technology-expertise-section")

  const renderTechnologyFlex = () => {
    return (
      <div className="flex justify-around flex-row uppercase text-center text-2xl font-bold gap-2">
        <div className="h-80 w-86 bg-white rounded-3xl p-4">
          <p>Frontend</p>
          <div className="flex flex-col justify-around gap-4">
            <div className="flex justify-around">
              <Image alt="tech-img" src={vscode_img} height={50} />
              <Image alt="tech-img" src={vscode_img} height={50} />
            </div>
            <div className="flex justify-around">
              <Image alt="tech-img" src={vscode_img} height={50} />
              <Image alt="tech-img" src={vscode_img} height={50} />
              <Image alt="tech-img" src={vscode_img} height={50} />
            </div>
          </div>
        </div>
        <div className="h-80 w-86 bg-white rounded-3xl p-4">
          <p>Backend</p>
        </div>
        <div className="h-80 w-86 bg-white rounded-3xl p-4">
          <p>Tools</p>
        </div>
      </div>
    );
  };

  const renderTechnologyExpertiseSection = () => {
    return (
      <div id="technology-expertise-section" className="bg-primary min-h-96 px-4 py-10">
        <div className="text-white mb-10  ">
          <p className="text-center text-3xl">Technology Expertise</p>
          <p className="text-center text-base pt-10">
          We don't want to be a jack of all trades and master of none. 
          We are a custom mobile app development company specializing in select technologies, 
          allowing us to provide exceptionally highly skilled developers in our area of expertise.
          </p>
        </div>
        <TechnologyExpertiseCarousel isVisible={isVisible}/>
      </div>
    );
  };

  return <>{renderTechnologyExpertiseSection()}</>;
}
