import React from "react";
import PartnerCarousel from "./components/partner-carousel/PartnerCarousel";
import TeamCarousel from "./components/team-carousel/TeamCarousel";
import Button from "../components/Button";
import ProductSection from "./components/ProductCarousel/ProductSection";
import TechnologyExpertiseSection from "./components/technology-expertise-section/technology-expertise-section";

import ml_img from "@/app/assets/our-service/ml.svg";
import Image from "next/image";
import PerformanceSection from "./components/performance-section/performance-section";
import SolutionSection from "./components/solution-section/solution-section";
import ContactUsSection from "./components/contact-us-section/contact-us-section";

export default function Homepage() {
  const renderOurService = () => {
    return (
      <div id="our-service" className=" h-218 md:h-160 lg:h-128 relative ">
        <div className="absolute p-2 inset-0 py-4 md:py-6 grid grid-rows-[auto,1fr,auto] items-center justify-items-center">
          <p className="text-3xl font-bold">OUR SERVICES</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-full justify-items-center items-center gap-2">
            <div className="h-60 w-40 bg-white rounded-xl p-4 shadow border-primary border">
              <Image
                alt="icon"
                src={ml_img}
                height={45}
                className="text-red-400"
              />
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                vel?
              </p>
            </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
            <div className="h-60 w-40 bg-white rounded-xl"> </div>
          </div>
          <Button title="View All Service" />
        </div>

        <div className="bg-primary h-1/2"></div>
        <div className="bg-neutral-200 h-1/2"></div>
      </div>
    );
  };

  const renderOurTeamDesktop = () => {
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
        <div className="w-1/2 h-full py-6 flex justify-center">
          <TeamCarousel />
        </div>
      </div>
    );
  };

  const renderOurTeamMobile = () => {
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
        <div className="w-1/2 h-full py-6 flex justify-center bg-blue-400">
          <TeamCarousel />
        </div>
      </div>
    );
  };

  const renderHomepage = () => {
    return (
      <div className="xl:container mx-auto min-h-screen">
        <div className="h-[40rem] bg-green-400"></div>
        <p className="text-center text-3xl">WE ARE</p>
        <p className="text-center text-3xl">PROUD PARTNER TO GREAT BRANDS</p>
        <div  >
          <PartnerCarousel />
        </div>
        {renderOurService()}
        {/* {renderOurTeamDesktop()} */}
        <TechnologyExpertiseSection />
        <PerformanceSection />
        <SolutionSection />
        <ContactUsSection />
      </div>
    );
  };

  return <div className="flex-1  ">{renderHomepage()}</div>;
}
