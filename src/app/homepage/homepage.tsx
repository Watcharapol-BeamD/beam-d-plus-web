import React from "react";
import PartnerCarousel from "./components/PartnerCarousel";

export default function Homepage() {
  const renderOurService = () => {
    return (
      <div id="our-service" className="h-144 relative ">
        <div className="absolute inset-0 grid grid-rows-[auto,1fr,auto] items-center justify-items-center">
          <p className="text-3xl font-bold">OUR SERVICES</p>

          <div className="grid grid-cols-3 lg:grid-cols-6 w-full justify-items-center items-center gap-2">
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

        <div className="bg-green-800 h-1/2"></div>
        <div className="bg-yellow-400 h-1/2"></div>
      </div>
    );
  };

  const renderHomepage = () => {
    return (
      <div className="xl:container mx-auto">
        <div className="h-[40rem] bg-green-400"></div>
        <p className="text-center text-3xl">WE ARE</p>
        <p className="text-center text-3xl">PROUD PARTNER TO GREAT BRANDS</p>
        <div id="partner-carousel" className="bg-orange-400  ">
          <PartnerCarousel />
        </div>
    {renderOurService()}
      </div>
    );
  };

  return <div className="flex-1  ">{renderHomepage()}</div>;
}
