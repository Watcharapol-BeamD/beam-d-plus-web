"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./solution-section.css";

// import required modules
import { Navigation } from "swiper/modules";

import Image from "next/image";

import solution_img1 from "@/app/assets/solution/close-up-businessman-with-digital-tablet.webp";
import solution_img2 from "@/app/assets/solution/smiling-asian-businesswoman-showing-tablet-her-manager-meeting-office.webp";
import solution_img3 from "@/app/assets/solution/business-people-shaking-hands-finishing-up-meeting-deals-business-concept.webp";

export default function SolutionSection() {
  const renderSolution = () => {
    const solutionCarousel = () => {
      return (
        <div id="solution-carousel" className="w-[70rem]  ">
          <Swiper
            spaceBetween={30}
            // navigation={true}
            modules={[Navigation]}
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
              <Image
                alt=""
                src={solution_img1}
                className="object-cover object-center bg-yellow-300 w-76 h-112 rounded-3xl shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt=""
                src={solution_img1}
                className="object-cover object-center bg-yellow-300 w-80 h-144 rounded-3xl shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt=""
                src={solution_img2}
                className="object-cover object-center bg-yellow-300 w-80 h-144 rounded-3xl shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt=""
                src={solution_img3}
                className="object-cover object-center bg-yellow-300 w-80 h-144 rounded-3xl shadow-lg"
              />
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
      </div>
    );
  };

  return <div>{renderSolution()}</div>;
}
