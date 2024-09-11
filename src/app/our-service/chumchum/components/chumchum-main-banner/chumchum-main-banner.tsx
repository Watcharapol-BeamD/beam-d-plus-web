import React from "react";
import chumchum_main_banner from "@/app/assets/our-service/chumchum/DSCF0683.webp"

export default function ChumChumMainBanner() {
  return (
    <div
      className="w-full md:h-160 h-96 bg-cover bg-center "
      style={{ backgroundImage: `url(${chumchum_main_banner.src})` }}
    >
      <div className="relative bg-gray-300 bg-opacity-50 h-full w-full flex justify-center items-center">
 
      </div>
    </div>
  );
}
