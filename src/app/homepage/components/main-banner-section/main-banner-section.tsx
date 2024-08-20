import React from "react";
import banner from "@/app/assets/main/multiethnicbusinessteamhavingabrainstorming_preview-ezgif.com-video-to-webp-converter.webp";
import Image from "next/image";

export default function MainBannerSection() {
  const renderBanner = () => {
    return (
      <div className="h-full w-full">
        <div className="flex justify-end relative h-full w-full">
          <div className="clip-style-v3 h-full w-196 bg-primary absolute"></div>
          <div className="clip-style-v2 h-full w-192 bg-sub-main absolute"></div>
          <Image alt="" src={banner} className="clip-style-v1 h-full w-198" />
        </div>
      </div>
    );
  };

  return <>{renderBanner()}</>;
}
