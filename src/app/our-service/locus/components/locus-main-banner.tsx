import React from "react";
import meeting_img from "@/app/assets/our-service/sap/business-people-listening-their-colleague-meeting.webp";

export default function LocusMainBanner() {
  return (
    <div
      className="w-full md:h-160 h-96 bg-cover bg-center "
      style={{ backgroundImage: `url(${meeting_img.src})` }}
    >
      <div className="relative bg-gray-300 bg-opacity-50 h-full w-full flex justify-center items-center">
        <div className="absolute bg-white h-auto md:w-160 w-auto md:bottom-36 md:left-10 md:mx-0 mx-2 px-4 py-6 rounded-3xl space-y-4">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Market-leading retail logistics platform for order-to-delivery
            excellence
          </p>
          <p className="md:text-lg sm:text-base text-sm   ">
            Locus' AI-powered platform powers world-class retail customer
            experiences by enabling logistics excellence across the entire
            fulfillment chain. Our modular, API-first solutions automate
            decision making across the first, mid and last mile to deliver more
            at lower costs, and ensure a competitive edge.
          </p> 
        </div>
      </div>
    </div>
  );
}
