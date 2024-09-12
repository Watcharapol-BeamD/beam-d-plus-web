import React from "react";
import latitude247_main_banner from "@/app/assets/our-service/latitude247/plane-flies-city-sky-1.webp";

export default function Latitude247MainBanner() {
  return (
    <div
      className="w-full md:h-160 h-96 bg-cover bg-center "
      style={{ backgroundImage: `url(${latitude247_main_banner.src})` }}
    >
      <div className="relative bg-gray-300 bg-opacity-50 h-full w-full flex justify-center items-center"></div>
    </div>
  );
}
