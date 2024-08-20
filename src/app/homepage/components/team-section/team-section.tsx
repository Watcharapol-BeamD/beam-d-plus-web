"use client";
import React, { useEffect, useState } from "react";
import TeamCarousel from "../team-carousel/TeamCarousel";
import Button from "@/app/components/Button";
import { useMediaQuery } from "@mui/material";

export default function TeamSection() {
  const [isMounted, setIsMounted] = useState(false);
  const is768Screen = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid mismatches during the initial render
  }

  const renderOurTeamDesktop = () => {
    return (
      <div className=" lg:h-160 h-144 w-full flex">
        <div className="w-1/2 flex items-center justify-center  ">
          <div className="text-center md:text-3xl text-2xl">
            <p className="uppercase">your trusted partner in</p>
            <p className="uppercase">business development,</p>
            <p className="uppercase my-20">Driven by expertise and passion</p>
            <Button title="View Our Team" />
          </div>
        </div>
        <div className="w-1/2 h-full xl:px-20 px-1 flex justify-center ">
          <TeamCarousel numberOfSlide={2} />
        </div>
      </div>
    );
  };

  const renderOurTeamMobile = () => {
    return (
      <div className="h-full w-full flex flex-col items-center space-y-10 my-10">
        <div className="text-center md:text-3xl text-lg  ">
          <p className="uppercase">Driven by expertise and passion</p>
          <p className="uppercase text-base">
            your trusted partner in business development,
          </p>
          {/* <p className="uppercase text-lg"> </p> */}
        </div>
        <div className="w-full h-112 flex justify-center px-10">
          <TeamCarousel numberOfSlide={1} />
        </div>
        <div>
          <Button title="View Our Team" />
        </div>
      </div>
    );
  };

  return <>{is768Screen ? renderOurTeamDesktop() : renderOurTeamMobile()}</>;
}
