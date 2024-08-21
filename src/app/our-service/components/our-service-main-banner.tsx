import React from "react";
import our_service_banner_img from "@/app/assets/our-service-page/showing-business-document-colleague-removebg-preview.png";
import Image from "next/image";

export default function OurServiceMainBanner() {
  const renderOurServiceMainBanner = () => {
    return (
      <div className="relative lg:h-160 md:h-152 h-128  flex w-full">
        <div className="">
          <div className="clip-style-v5 absolute h-96 w-96 bg-gray-300 bottom-0"></div>
          <div className="clip-style-v5 absolute h-50 w-96 bg-primary bottom-0"></div>
          <div className="absolute bottom-0 ">
            <Image alt="" src={our_service_banner_img} className="" />
          </div>
        </div>

        <div className="  w-full h-full flex items-center justify-center z-30 lg:ml-96 lg:mt-12">
          <div className="w-128 text-2xl text-center text-black space-y-4 ">
            <p className="text-3xl">OUR SERVICES</p>
            <p>
              At BeamD, we excel in digital transformation, seamlessly integrate
              new technologies to resolve challenges and enhance business
              practices. Our services include digitizing business processes,
              data analysis, and refining strategies and culture.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderOurServiceMainBanner()}</>;
}
