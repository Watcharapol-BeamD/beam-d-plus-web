import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import ml_img from "@/app/assets/our-service/ml.svg";
import ButtonLink from "@/app/components/ButtonLink";

export default function OurServiceSection() {
  const items = [
    {
      image: ml_img,
      description: `SAP ERP & SAP HANA Consulting & Implementation`,
    },
    {
      image: ml_img,
      description: `Digital Solution Services`,
    },
    {
      image: ml_img,
      description: `Business-Tech Solution  & Change Management Landing`,
    },
    {
      image: ml_img,
      description: `360 Post Implementation Support`,
    },
    {
      image: ml_img,
      description: `Web App Development Services`,
    },
    {
      image: ml_img,
      description: `Mobile App Development`,
    },
  ];

  const renderOurService = () => {
    return (
      <div id="our-service" className=" h-218 md:h-160 lg:h-128 relative bg-foo">
        <div className="absolute p-2 inset-0 py-4 md:py-6 grid grid-rows-[auto,1fr,auto] items-center justify-items-center">
          <p className="text-3xl font-bold text-white">OUR SERVICES</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-full justify-items-center items-center gap-2">
            {items.map((item,index) => {
              return (
                <div key={index} className="h-60 w-40 bg-white rounded-xl p-4 shadow border-gray-200 border">
                  <Image
                    alt="icon"
                    src={item.image}
                    height={45}
                    className="text-red-400"
                  />
                  <p className="mt-2">{item.description}</p>
                </div>
              );
            })}
            {/* <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div> */}
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
