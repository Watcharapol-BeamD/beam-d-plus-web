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
        <div id="our-service" className="bg-gray-400 h-96" >
          <p className="text-center text-3xl py-10 font-bold bg-red-400">OUR SERVICES</p>
          
        </div>
      </div>
    );
  };

  return <div className="flex-1">{renderHomepage()}</div>;
}
