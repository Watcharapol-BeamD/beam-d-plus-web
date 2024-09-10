import React from "react";
import meeting_img from "@/app/assets/our-service/sap/business-people-listening-their-colleague-meeting.webp";
import ButtonLink from "@/app/components/ButtonLink";

export default function SapMainBanner() {
  return (
    <div
      className="w-full md:h-160 h-96 bg-cover bg-center bg-opacity-25"
      style={{ backgroundImage: `url(${meeting_img.src})` }}
    >
      <div className="relative bg-gray-300 bg-opacity-50 h-full w-full flex justify-center items-center">
        <div className="absolute bg-white bg-opacity-70 md:h-60 h-auto md:w-160 w-auto md:bottom-36 md:left-10 md:mx-0 mx-2 p-4 rounded-3xl space-y-4">
          <p className="md:text-4xl text-3xl font-bold">
          SAP S/4 Hana and SAP B1 - Enterprise Resource Planning
          </p>
          <p className="text-lg ">
            Solutions for Enterprise Resource Planning from SAP
          </p>
          {/* <div>
            <ButtonLink title="LEARN MORE" url="#" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
