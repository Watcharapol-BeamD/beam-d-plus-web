import React from "react";
import our_service_banner_img from "@/app/assets/our-service/showing-business-document-colleague-removebg-cap.png";
import Image from "next/image";

export default function OurServiceMainBanner() {
  const renderOurServiceMainBanner = () => {
    return (
      <div className="relative lg:h-160 md:h-152 sm:h-128 480px:h-119 410px:h-110 370px:h-[25rem] 310px:h-[21rem] h-[19rem] flex w-full">
        {/* <div className="relative lg:h-160 md:h-152 sm:h-128 min-[480px]:h-119 min-[400px]:h-110 h-96 flex w-full   "></div> */}
        <div className="clip-style-v5 absolute md:h-96 h-full md:w-96 w-full bg-gray-300 bottom-0"></div>
        <div className="clip-style-v5 absolute md:h-50 h-2/3 md:w-96 w-full bg-primary bottom-0"></div>
        <div className="absolute bottom-0">
          <Image alt="" src={our_service_banner_img} className=" " />
        </div>
      </div>
    );
  };

  const renderDescription = () => {
    return (
      <div className="h-full w-full flex flex-col item-center justify-center md:py-0 py-10 ">
        <div className="text-center sm:px-10 px-2 space-y-2">
          <p className="text-3xl">OUR SERVICES</p>
          <p>
            At BeamD, we excel in digital transformation, seamlessly integrate
            new technologies to resolve challenges and enhance business
            practices. Our services include digitizing business processes, data
            analysis, and refining strategies and culture.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex w-full h-full md:flex-row flex-col  ">
        <div className="md:w-1/2 w-full">{renderOurServiceMainBanner()}</div>
        <div className="md:w-1/2 w-full">{renderDescription()}</div>
      </div>
    </div>
  );
}
