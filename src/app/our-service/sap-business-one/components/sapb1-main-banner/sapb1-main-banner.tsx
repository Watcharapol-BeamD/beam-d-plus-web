import React from "react";
import sapb1_main_banner from "@/app/assets/our-service/sap-business-one/group-diverse-people-having-business-meeting.webp";

export default function Sapb1MainBanner() {
  return (
    <div
      className="w-full md:h-160 h-96 bg-cover bg-center "
      style={{ backgroundImage: `url(${sapb1_main_banner.src})` }}
    >
      <div className="relative bg-gray-300 bg-opacity-60 h-full w-full flex justify-center items-center">
        <p className="text-black md:text-6xl text-3xl font-bold drop-shadow-lg">SME Solution</p>
      </div>
    </div>
  );
}
