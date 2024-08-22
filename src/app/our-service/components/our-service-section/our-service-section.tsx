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
      description: [],
    },
    {
      icon: Developer_Mode_img,
      title: "Mobile App Development",
      description: [],
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
      title: "SAP ERP & SAP HANA Consulting & Implementation",
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
              className="h-84  w-54 bg-white border shadow-sm rounded-lg p-2 m-4"
            >
              <Image alt="" src={item.icon} className="h-14 w-14" />
              <p>{item.title}</p>
              <ul className="list-disc list-inside text-sm">
                {item.description.map((des, index) => {
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
      <div className="container mx-auto bg-orange-400 flex justify-center">
        <div className="flex flex-wrap w-full bg-yellow-400 justify-center  ">
          {serviceCard()}
        </div>
      </div>
    );
  };

  return <div className="bg-green-400 w-full ">{renderOurService()}</div>;
}
