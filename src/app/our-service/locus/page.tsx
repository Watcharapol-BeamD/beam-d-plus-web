import React from "react";
import LocusMainBanner from "./components/locus-main-banner/locus-main-banner";
import BuiltForEnterpriseSection from "./components/built-for-enterprise-section/built-for-enterprise-section";
import locus_dispatch_img from "@/app/assets/our-service/locus/locus-dispatch.png";
import why_locus_img from "@/app/assets/our-service/locus/why-locus.png";
import Image from "next/image";

export default function LocusPage() {
  const renderLocus = () => {
    return (
      <div className="xl:container mx-auto">
        <LocusMainBanner />
        <div className="px-2 py-4">
          <BuiltForEnterpriseSection />
          <div className="py-4 ">
            <Image alt="" src={locus_dispatch_img} />
            <Image alt="" src={why_locus_img} />
          </div>
        </div>
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderLocus()}</div>;
}
