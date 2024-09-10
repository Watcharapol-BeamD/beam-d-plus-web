"use client";

import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import ButtonLink from "@/app/components/ButtonLink";

import ml_img from "@/app/assets/our-service/ml.svg";
import data_management_img from "@/app/assets/our-service/data-management.svg";
import mobile_dev_img from "@/app/assets/our-service/mobile-development.svg";
import silhouette_img from "@/app/assets/our-service/multiple-users-silhouette.svg";
import thinking_img from "@/app/assets/our-service/thinking.svg";
import development_img from "@/app/assets/our-service/web-development.svg";
import { useVisibilityOnScroll } from "@/app/hooks/useVisibilityOnScroll";

export default function OurServiceSection() {
  const isVisible = useVisibilityOnScroll("our-service");

  const items = [
    {
      image: ml_img,
      description: `SAP ERP & SAP HANA Consulting & Implementation`,
    },
    {
      image: thinking_img,
      description: `Digital Solution Services`,
    },
    {
      image: data_management_img,
      description: `Business-Tech Solution  & Change Management Landing`,
    },
    {
      image: silhouette_img,
      description: `360 Post Implementation Support`,
    },
    {
      image: development_img,
      description: `Web App Development Services`,
    },
    {
      image: mobile_dev_img,
      description: `Custom Mobile App Development`,
    },
  ];

  const renderOurService = () => {
    return (
      <div
        id="our-service"
        className="h-218 md:h-160 lg:h-128 relative bg-two_tone"
      >
        <div className="absolute p-2 inset-0 py-4 md:py-6 grid grid-rows-[auto,1fr,auto] items-center justify-items-center">
          <p className="text-3xl font-bold text-white">OUR SERVICES</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-full justify-items-center items-center gap-2">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-60 w-full max-w-44 bg-white cursor-default rounded-xl p-4 shadow border-gray-200 border ${
                    isVisible ?  `animate-fade-up animate-duration-500`  : ""
                  }`}
                >
            
                  <Image alt="icon" src={item.image} height={45} className="" />
                  <p className="mt-2">{item.description}</p>
                </div>
              );
            })}
          </div>
          <ButtonLink title="View All Service" url="/our-service" />
        </div>

        {/* <div className="bg-primary h-1/2"></div>
        <div className="bg-neutral-200 h-1/2"></div> */}
      </div>
    );
  };

  return <>{renderOurService()}</>;
}
