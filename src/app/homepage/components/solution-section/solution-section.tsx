"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./solution-section.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";

import solution_img1 from "@/app/assets/solution/smiling-asian-businesswoman-showing-tablet-her-manager-meeting-office.webp";
import solution_img2 from "@/app/assets/solution/close-up-businessman-with-digital-tablet.webp";
import solution_img3 from "@/app/assets/solution/business-people-shaking-hands-finishing-up-meeting-deals-business-concept.webp";
import ribbon_img from "@/app/assets/solution/ribbon.svg";
import services_img from "@/app/assets/solution/services.svg";
import new_ideas_in_process_img from "@/app/assets/solution/new-ideas-in-process.svg";

export default function SolutionSection() {
  const renderSolution = () => {
    const solutionCarousel = () => {
      return (
        <div id="solution-carousel" className="w-full ">
          <Swiper
            spaceBetween={0}
            // navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="bg-cover bg-center md:w-80 md:h-144 w-72 h-112 rounded-3xl overflow-hidden"
                style={{ backgroundImage: `url(${solution_img1.src})` }}
              >
                <div className="bg-primary h-full w-full bg-opacity-60 text-white p-4 flex flex-col">
                  <Image
                    alt=""
                    src={ribbon_img}
                    className="text-red-400 md:h-40 h-36"
                  />
                  <p className="font-bold md:text-xl text-lg uppercase md:pt-10 pt-2">ONE-STOP-SERVCE</p>
                  <p className="md:text-lg text-base text-start">
                    Our services encompass the entire end-to-end project cycle,
                    including comprehensive tech support and change management
                    to ensure smooth and successful project implementation
                  </p>
                </div>
              </div>
              {/* <Image
               
                  alt=""
                  src={solution_img1}
                  className="object-cover object-center md:w-80  md:h-144 w-72 h-112 rounded-3xl shadow-lg  bg-primary opacity-60 "
                /> */}
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-center md:w-80 md:h-144 w-72 h-112 rounded-3xl overflow-hidden"
                style={{ backgroundImage: `url(${solution_img2.src})` }}
              >
                <div className="bg-primary h-full w-full bg-opacity-60 text-white p-4">
                  <Image
                    alt=""
                    src={services_img}
                    className="text-red-400 md:h-40 h-36"
                  />
                  <p className="font-bold md:text-xl text-lg uppercase md:pt-10 pt-2">Deep Expertise</p>
                  <p className="md:text-lg text-base text-start">
                    Our team rooted in extensive experience with cross-industry
                    knowledge. With a deep expertise in SAP ERP, we provide
                    top-notch consulting and implementation services for clients
                    across various industries
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-center md:w-80 md:h-144 w-72 h-112 rounded-3xl overflow-hidden"
                style={{ backgroundImage: `url(${solution_img3.src})` }}
              >
                <div className="bg-primary h-full w-full bg-opacity-60 text-white p-4">
                  <Image
                    alt=""
                    src={new_ideas_in_process_img}
                    className="text-red-400 md:h-40 h-36"
                  />
                  <p className="font-bold md:text-xl text-lg uppercase md:pt-10 pt-2">
                    Customer’s Recognition
                  </p>
                  <p className="md:text-lg text-base text-start">
                    Proven track record in project & change management, ensuring
                    successful project execution and seamless transitions, along
                    with client recognition for service quality
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
    };

    return (
      <div className="flex w-full justify-center flex-col">
        <p className="text-center font-bold text-2xl pb-8">
          TAILORED SOLUTIONS FOR UNIQUE CHALLENHES
        </p>
        <div className="flex w-full justify-center"> {solutionCarousel()}</div>
        {/* <div
          className="bg-cover bg-center h-92"
          style={{ backgroundImage: `url(${solution_img1.src})` }}
        >  
        </div> */}
      </div>
    );
  };

  return <div>{renderSolution()}</div>;
}
