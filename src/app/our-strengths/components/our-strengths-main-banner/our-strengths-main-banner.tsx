import Image from "next/image";
import React from "react";
import talking_img from "@/app/assets/our-strengths/employee-laughing-holding-clipboard-removebg-preview.png";

export default function OurStrengthsMainBanner() {
  const renderOurStrengthsMainBanner = () => {
    return (
      <div className="relative flex xl:px-0 px-2 lg:h-160 md:h-152 sm:h-128 480px:h-119 410px:h-110 370px:h-[25rem] 310px:h-[21rem] h-[19rem]  w-full bg-primary">
        <div className="absolute bottom-0 right-0">
          <Image alt="" src={talking_img} className=" max-h-96 w-full" />
        </div>
      </div>
    );
  };

  return <>{renderOurStrengthsMainBanner()}</>;
}
