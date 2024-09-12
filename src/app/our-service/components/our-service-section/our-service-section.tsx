import React from "react";
import Image, { StaticImageData } from "next/image";

import Critical_Thinking_img from "@/app/assets/our-service/Critical_Thinking.png";
import Artificial_img from "@/app/assets/our-service/Artificial_Intelligence.png";
import Developer_Mode_img from "@/app/assets/our-service/Developer_Mode.png";
import Google_Code_img from "@/app/assets/our-service/Google_Code.png";
import Home_Office_img from "@/app/assets/our-service/Home_Office.png";
import People_img from "@/app/assets/our-service/People.png";

type Service = {
  icon: StaticImageData;
  title: string;
  description: string[];
};

export default function OurServiceSection() {
  const serviceList: Service[] = [
    {
      icon: Critical_Thinking_img,
      title: "Digital Solution Services",
      description: [
        " Build Competitive Advance through Information Technology",
        "Transforming Customer Experience",
        "Operation Efficiency & Transparency",
        "Cost Saving & Revenue Growth",
      ],
    },
    {
      icon: Google_Code_img,
      title: "Web App Development Services",
      description: [
        `We help you design and develop custom web apps for your business based on your specific needs and requirements, 
        with high quality, fast delivery, and affordable prices.`,
      ],
    },
    {
      icon: Developer_Mode_img,
      title: "Custom Mobile App Development",
      description: [`We help you design and develop custom mobile apps for your business based on your specific needs and requirements, 
        with high quality, fast delivery, and affordable prices.
`],
    },
    {
      icon: Home_Office_img,
      title: "Business-Tech Solution  & Change Management Landing",
      description: [
        "Salesman Mobility Solution",
        "Call Agent Solution",
        "Dynamic Delivery Optimization",
        "Digital Transformation",
        "App & Web Development for O2O Demand Integration",
      ],
    },
    {
      icon: Artificial_img,
      title: "SAP S/4 Hana and SAP B1 consulting & implementation",
      description: [
        "Financial Accounting (FI) & Controlling (CO)",
        "Sales and Distribution (SD)",
        "Material Management (MM) & Warehouse Management (WMS)",
        "Production Planning (PP)",
        "Business Planning and Consolidation (BCP)",
      ],
    },
    {
      icon: People_img,
      title: "360 Post Implementation Support",
      description: [
        " Build Competitive Advance through Information Technology",
        "Transforming Customer Experience",
        "Operation Efficiency & Transparency",
        "Cost Saving & Revenue Growth",
      ],
    },
  ];

  const serviceCard = () => {
    return (
      <>
        {serviceList.map((item, index) => {
          return (
            <div
              key={index}
              className="470px:h-84 470px:w-54 460px:h-86 460px:w-50 360px:h-74 360px:w-full h-76 w-50  bg-white border shadow-sm rounded-lg p-2 sm:m-4 m-0 "
            >
              {/* <div
              key={index}
              className="470px:h-84 470px:w-54 440px:h-74 440px:w-50 410px:h-72 410px:w-46 360px:h-70 w-42 h-72 bg-white border shadow-sm rounded-lg p-2 m-4 "
            > */}
              <Image
                alt=""
                src={item.icon}
                className="460px:h-14 460px:w-14 h-10 w-10"
              />
              <p className="460px:text-base text-sm">{item.title}</p>
              <ul className="list-disc list-inside 460px:text-sm text-xs">
                {item.description.map((des: string, index: number) => {
                  return <li key={index}>{des}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </>
    );
  };

  const renderOurService = () => {
    return (
      <div className="xl:container mx-auto flex justify-center xl:px-0 px-2 animate-fade-up">
        {/* <div className="flex flex-wrap w-full bg-yellow-400 justify-center  "> */}
        <div className="grid md:grid-cols-3 360px:grid-cols-2 grid-cols-1 lg:w-2/3 gap-1 w-full content-center place-items-center">
          {serviceCard()}
        </div>
      </div>
    );
  };

  return <>{renderOurService()}</>;
}
