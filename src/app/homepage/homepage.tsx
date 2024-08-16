import React from "react";
import PartnerCarousel from "./components/PartnerCarousel";

export default function Homepage() {
  const renderHomepage = () => {
    return (
      <div className="xl:container mx-auto">
        <div className="h-[40rem] bg-green-400"></div>
        <p className="text-center text-3xl">WE ARE</p>
        <p className="text-center text-3xl">PROUD PARTNER TO GREAT BRANDS</p>
        <div id="partner-carousel" className="bg-orange-400  ">
          <PartnerCarousel />
        </div>
        <div id="our-service" className="bg-blue-400 min-h-[36rem] relative">
          <div className="absolute inset-0 flex flex-col items-center justify-around">
            <p className="text-3xl font-bold">OUR SERVICES</p>
            <div className="flex justify-around w-full flex-wrap gap-2">
              <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
              <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
              <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
              <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
              <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
              <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
            </div>
            <button className="bg-gray-500 p-4 rounded-full text-white">
              View All Service
            </button>
          </div>

          <div className="bg-green-800 h-1/2 "></div>
          <div className="bg-yellow-400 h-1/2"></div>
        </div>
      </div>
    );
  };

  return <div className="flex-1  ">{renderHomepage()}</div>;
}
