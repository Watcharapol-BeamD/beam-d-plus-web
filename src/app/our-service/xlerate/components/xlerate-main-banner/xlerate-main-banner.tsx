import React from "react";
import Xlerate_img from "@/app/assets/our-service/xlerate/business-woman-hand-with-financial-charts-laptop-table.webp";
 
export default function XlerateMainBanner() {
  const renderXlerateMainBanner = () => {
    return (
      <div
        className="w-full md:h-160 h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${Xlerate_img.src})` }}
      >
        <div className="relative bg-gray-300 bg-opacity-50 h-full w-full flex justify-center items-center">
          <div className="absolute bg-secondary h-auto md:w-160 w-auto px-4 py-6 rounded-3xl space-y-4">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-center uppercase">
              Xlerate
            </p>
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold">
              FLEET & RESOURCE MANAGEMEN
            </p>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderXlerateMainBanner()}</div>;
}
