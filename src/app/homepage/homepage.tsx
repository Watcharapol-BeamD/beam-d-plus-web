import React from "react";
import PartnerCarousel from "./components/partnerCarousel/PartnerCarousel";
import TeamCarousel from "./components/teamCarousel/TeamCarousel";
import Button from "../components/Button";
import ProductSection from "./components/ProductCarousel/ProductSection";

export default function Homepage() {
  const renderOurService = () => {
    return (
      <div id="our-service" className="h-144 relative ">
        <div className="absolute inset-0 py-2 grid grid-rows-[auto,1fr,auto] items-center justify-items-center">
          <p className="text-3xl font-bold">OUR SERVICES</p>

          <div className="grid grid-cols-3 lg:grid-cols-6 w-full justify-items-center items-center gap-2">
            <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
            <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
            <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
            <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
            <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
            <div className="h-60 w-40 bg-red-400 rounded-xl"> </div>
          </div>
          <Button title="View All Service" />
        </div>

        <div className="bg-green-800 h-1/2"></div>
        <div className="bg-yellow-400 h-1/2"></div>
      </div>
    );
  };

  const renderOurTeam = () => {
    return (
      <div className="h-160 w-full flex">
        <div className="w-1/2 flex items-center justify-center bg-blue-100">
          <div className="text-center text-3xl">
            <p className="uppercase">your trusted partner in</p>
            <p className="uppercase">business development,</p>
            <p className="uppercase my-20">Driven by expertise and passion</p>
            <Button title="View Our Team" />
          </div>
        </div>
        <div className="w-1/2 h-full bg-blue-700 py-6 flex justify-center">
          <TeamCarousel />
        </div>
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
        {renderOurTeam()}
        <ProductSection />
      </div>
    );
  };

  return <div className="flex-1  ">{renderHomepage()}</div>;
}
