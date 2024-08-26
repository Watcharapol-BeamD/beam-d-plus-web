import React from "react";
import team_img from "@/app/assets/our-team/african-head-department-is-satisfied-with-work-staff-asian-male-student-trendy-shirt-telling-univers.webp";
import thailand_img from "@/app/assets/contact-us/thailand.png";
import india_img from "@/app/assets/contact-us/india.png";
import singapore_img from "@/app/assets/contact-us/singapore.png";
import Image from "next/image";

export default function OurTeamMainBanner() {
  const renderOurTeamMainBanner = () => {
    return (
      <div
        className="w-full h-160 bg-cover bg-center bg-opacity-25"
        style={{ backgroundImage: `url(${team_img.src})` }}
      >
        <div className="bg-gray-300 bg-opacity-50 h-full w-full  flex justify-center items-center">
          <div>
            <p className="text-white text-5xl drop-shadow-xl font-bold">
              Highly Skilled and Experienced Team
            </p>
            <div className="  flex justify-center gap-1 mt-4">
              <div className="h-12 w-12  rounded-full  overflow-hidden bg-white object-cover border border-gray-500">
                <Image
                  alt=""
                  src={thailand_img}
                  className=" p-1 h-full w-full"
                />
              </div>
              <div className="h-12 w-12  rounded-full overflow-hidden bg-white object-cover border border-gray-500">
                <Image alt="" src={india_img} className="p-1  h-full w-full" />
              </div>
              <div className="h-12 w-12  rounded-full  overflow-hidden bg-white object-cover border border-gray-500">
                <Image
                  alt=""
                  src={singapore_img}
                  className=" p-1 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderOurTeamMainBanner()}</>;
}
