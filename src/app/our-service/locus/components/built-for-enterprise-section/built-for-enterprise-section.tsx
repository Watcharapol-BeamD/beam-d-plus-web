import React from "react";
import locus_img from "@/app/assets/our-service/locus/locus-enterprise.png";
import Image from "next/image";

export default function BuiltForEnterpriseSection() {
  const renderBuiltForEnterprise = () => {
    return (
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-1/2 w-full">
          <p className="font-bold text-lg uppercase">Built for enterprise</p>
          <p>
            Locus Dispatch Management Platform is a single, unified platform of
            interconnected modules for order, dispatch, contract, carrier, and
            driver management. As a comprehensive, AI-driven logistics
            management software, it streamlines complex retail logistics
            operations for improved costs and service levels, and other 180+
            business constraints. From big box retailers to department stores
            and big&bulky retailers, the platform is highly adaptable to a wide
            variety of use cases. All while meeting key enterprise-level needs
            for scale, security, and compliance.
          </p>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <Image alt="" src={locus_img} className="w-112" />
        </div>
      </div>
    );
  };

  return <>{renderBuiltForEnterprise()}</>;
}
