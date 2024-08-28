import Image, { StaticImageData } from "next/image";
import React from "react";
import innovative_img1 from "@/app/assets/our-strengths/image-35.png";
import innovative_img2 from "@/app/assets/our-strengths/image-36.png";
import innovative_img3 from "@/app/assets/our-strengths/image-37.png";
import innovative_img4 from "@/app/assets/our-strengths/image-38.png";

type InnovativeCardProps = {
  image_name: StaticImageData;
  title: string;
  description: string[];
};

export default function InnovativeApproachesAndStrategiesSection() {
  const data: InnovativeCardProps[] = [
    {
      image_name: innovative_img2,
      title: "Digitized Demand Generation",
      description: [
        "Social media communication",
        "In-App notification",
        "Hyper-personalization trade mechanic",
        "Point collection & loyalty scheme",
      ],
    },
    {
      image_name: innovative_img2,
      title: "Digitized Demand Capture",
      description: [
        "Presales/Vansales solution",
        "Call agent solution",
        "Social commerce solution",
        "End-to-end app development",
      ],
    },
    {
      image_name: innovative_img2,
      title: "Digitized Demand Fulfilment",
      description: [
        "Dynamic warehouse management",
        "Dynamic route planning",
        "Static route planning",
        "Cluster zoning management",
      ],
    },
    {
      image_name: innovative_img2,
      title: "Personalized After Sales Services",
      description: [
        "CRM solution",
        "Call center solution",
        "On-site pre & post launch support 24/7",
      ],
    },
  ];

  const renderInnovativeCardDesktop = (item: InnovativeCardProps) => {
    return (
      <div className="h-110 w-72 m-1 space-y-2 p-4   md:rounded-none rounded-2xl md:shadow-none shadow-xl  ">
        <div className="flex justify-center w-full">
          <Image alt="" src={item.image_name} className="w-72  " />
        </div>

        <p className="text-base font-semibold">{item.title}</p>

        <ul className="list-disc list-inside 460px:text-sm text-xs">
          <li className="list-none">Implement</li>
          {item.description.map((des: string, index: number) => {
            return <li key={index}>{des}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-neutral-200 px-2 pt-4 pb-10 text-primary space-y-4">
      <p className="uppercase text-2xl font-bold">
        Innovative Approaches and Strategies
      </p>
      <p className="uppercase text-base">
        Empowering your business with cutting-edge solutions and
        forward-thinking methods.
      </p>
  
        <div className="flex justify-around flex-wrap bg-white py-4">
          {data.map((item: InnovativeCardProps) => {
            return <>{renderInnovativeCardDesktop(item)}</>;
          })}
        </div>
     
    </div>
  );
}
