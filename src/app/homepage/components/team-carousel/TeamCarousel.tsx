"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./TeamCarousel.css";

// import required modules
import { Scrollbar } from "swiper/modules";

import man_image from "../../../assets/man.jpg";
import Image from "next/image";

export default function TeamCarousel() {
  const personList = [
    {
      profilePic: man_image,
      fullName: "May Kannika",
      position: "Managing Directtor",
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et555`,
    },
    {
      profilePic: man_image,
      fullName: "May Kannika",
      position: "Managing Directtor",
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et`,
    },
    {
      profilePic: man_image,
      fullName: "May Kannika",
      position: "Managing Directtor",
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et`,
    },
    {
      profilePic: man_image,
      fullName: "May Kannika",
      position: "Managing Directtor",
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptates id nihil assumenda consequatur animi molestiae
              provident, quibusdam rerum et`,
    },
  ];

  return (
    <div id="team-carousel" className="h-full w-160">
      <Swiper
        scrollbar={{
          hide: false,
        }}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Scrollbar]}
      >
        {personList.map((item) => {
          return (
            <SwiperSlide>
              <div className="h-full w-full p-6 flex flex-col items-center shadow-2xl border cursor-pointer bg-red-400">
                <div className="h-44 w-44 rounded-full overflow-hidden">
                  <Image alt="person" role="img" src={item.profilePic} />
                </div>
                <div className="mt-2">
                  <p>{item.fullName}</p>
                  <p>{item.position}</p>
                </div>
                {/* <div className="w-64 h-20 mt-10 text-center bg-red-500  overflow-hidden">
                  <p className="text-ellipsis  ">
                    {item.description}
                  </p>
                </div> */}
                <p className="line-clamp-10 text-sm text-center mt-10">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
