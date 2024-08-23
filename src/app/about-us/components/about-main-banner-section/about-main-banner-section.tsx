import Image from "next/image";
import React from "react";
import meeting_img from "@/app/assets/about-us/millennial-group-young-businesspeople-asia-businessman-businesswoman-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-a.jpg";

export default function AboutMainBanner() {
  return (
    <div className="relative lg:h-152 md:h-96 h-80">
      <Image
        alt=""
        src={meeting_img}
        className="clip-style-v4 absolute lg:h-152 md:h-96 h-80 object-cover  "
      />
      <div className="md:hidden absolute h-full w-full z-20 flex items-center justify-center">
        <p className="text-white text-5xl pb-20 font-bold drop-shadow-lg">
          ABOUT US
        </p>
      </div>
    </div>
  );
}
