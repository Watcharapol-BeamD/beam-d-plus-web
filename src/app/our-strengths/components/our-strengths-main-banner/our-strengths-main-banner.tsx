import Image from "next/image";
import React from "react";
import talking_img from "@/app/assets/our-strengths/employee-laughing-holding-clipboard-removebg-preview.png";
import CheckIcon from '@mui/icons-material/Check';

export default function OurStrengthsMainBanner() {
  // const renderOurStrengthsMainBanner = () => {
  //   return (
  //     <div className="relative flex xl:px-0 px-2 md:h-160 md:h-152 sm:h-128 480px:h-119 410px:h-110 370px:h-[25rem] 310px:h-[21rem] h-[19rem]  w-full bg-primary">
  //       <div className="absolute bottom-0 right-0">
  //         <Image alt="" src={talking_img} className=" max-h-96 w-full" />
  //       </div>
  //     </div>
  //   );
  // };

  const renderOurStrengthsMainBanner = () => {
    return (
      <div className="flex md:flex-row flex-col lg:h-160 md:h-146 h-full w-full bg-primary">
        <div className=" md:w-1/2 w-full flex items-center justify-center  lg:mt-10 md:mt-28 mt-0">
          <div className=" text-start lg:px-20 px-6 lg:space-y-4 space-y-2 md:pt-0 pt-4 text-white">
            <p className="md:text-3xl text-2xl font-semibold">
              Discover our strengths that will help your business grow!
            </p>
            <p className="md:text-xl text-lg">
              With our expertise and dedication, we provide solutions tailored
              to your needs.
            </p>
            <p className="md:text-base text-sm font-semibold"><CheckIcon fontSize="large"/>One-Stop-Service</p>
            <p className="md:text-base text-sm font-semibold"><CheckIcon fontSize="large"/>Deep Expertise</p>
            <p className="md:text-base text-sm font-semibold"><CheckIcon fontSize="large"/> Customer's Recognition</p>
            <p className="md:text-xl text-lg">Join us and unlock your full potential.</p>
          </div>
        </div>
        <div className="bg-gree-400 h-full flex items-end md:w-1/2 w-full ">
          <Image
            alt=""
            src={talking_img}
            className="max-h-[28rem] object-contain"
          />
        </div>
      </div>
    );
  };

  return <>{renderOurStrengthsMainBanner()}</>;
}
