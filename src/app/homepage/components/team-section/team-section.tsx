import React from "react";
import TeamCarousel from "../team-carousel/TeamCarousel";
import Button from "@/app/components/Button";

export default function TeamSection() {
  const renderOurTeamDesktop = () => {
    return (
      <div className=" lg:h-160 h-144 w-full flex">
        <div className="w-1/2 flex items-center justify-center bg-blue-100">
          <div className="text-center md:text-3xl text-2xl">
            <p className="uppercase">your trusted partner in</p>
            <p className="uppercase">business development,</p>
            <p className="uppercase my-20">Driven by expertise and passion</p>
            <Button title="View Our Team" />
          </div>
        </div>
        <div className="w-1/2 h-full xl:px-20  px-1  flex justify-center bg-blue-400">
          <TeamCarousel />
        </div>
      </div>
    );
  };

  return <>{renderOurTeamDesktop()}</>;
}
