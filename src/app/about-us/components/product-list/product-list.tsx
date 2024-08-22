import React from "react";

import sap_img from "@/app/assets/about-us/project/sap.png";
import chumchum_img from "@/app/assets/about-us/project/chumchum.png";
import fleet_connect247_img from "@/app/assets/about-us/project/fleet-connect247.png";
import latitude_img from "@/app/assets/about-us/project/latitude.png";

import locus_img from "@/app/assets/about-us/project/locus.png";
import magento_img from "@/app/assets/about-us/project/magento.png";
import sap_one_img from "@/app/assets/about-us/project/sap-one.png";
import xnapps_sale_img from "@/app/assets/about-us/project/xnapps-sale.png";
import all_project_img from "@/app/assets/about-us/project/all-project-logo.jpg"

import Image from "next/image";

export default function ProjectList() {
  const renderProjectList = () => {
    return (
      <div className="w-full h-full   justify-items-center bg-yellow-400">
          <Image alt="" src={all_project_img} className=" lg:h-66 h-full   w-full" />
        {/* <Image alt="" src={sap_img} className="h-16 w-24" />
        <Image alt="" src={chumchum_img} className="h-16 w-16" />
        <Image alt="" src={fleet_connect247_img} className="h-16 w-36" />
        <Image alt="" src={latitude_img} className="h-16 w-34" />
        <Image alt="" src={locus_img} className="h-16 w-34" />
        <Image alt="" src={magento_img} className="h-16 w-36" />
        <Image alt="" src={sap_one_img} className="h-16 w-36" />
        <Image alt="" src={xnapps_sale_img} className="h-16 w-28" /> */}
      </div>
    );
  };

  return <div className="w-full h-full flex justify-center items-center ">{renderProjectList()}</div>;
}
