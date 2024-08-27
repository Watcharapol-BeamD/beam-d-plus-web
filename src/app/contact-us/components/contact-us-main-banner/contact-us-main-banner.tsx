import React from "react";
import team_img from "@/app/assets/contact-us/smiling-asian-businesswoman-showing-tablet-her-manager-meeting-office.webp";
import thailand_img from "@/app/assets/contact-us/thailand.png";
import india_img from "@/app/assets/contact-us/india.png";
import singapore_img from "@/app/assets/contact-us/singapore.png";
import Image from "next/image";

export default function ContactUsMainBanner() {
  const ContactUsMainBanner = () => {
    return (
      <div
        className="w-full md:h-160 h-96 bg-cover bg-center bg-opacity-25"
        style={{ backgroundImage: `url(${team_img.src})` }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full flex justify-center items-center">
          <div>
            <p className="text-white md:text-3xl text-2xl drop-shadow-xl font-bold text-center">
              Connect with us today.
            </p>
            <p className="text-white md:text-3xl text-2xl drop-shadow-xl font-bold text-center">
              Our dedicated team is here to provide you with exceptional support
              and solutions.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return <>{ContactUsMainBanner()}</>;
}
