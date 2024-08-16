import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./TechnologyExpertiseCarousel.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

import vscode_img from "@/app/assets/technology/Visual_Studio_Code_1.35_icon.svg.png";
import tailwind_img from "@/app/assets/technology/tailwind.png";
import javaScript_img from "@/app/assets/technology/JavaScript-logo.png";
import typeScript_img from "@/app/assets/technology/Typescript_logo_2020.svg.png";
import ant_design_img from "@/app/assets/technology/ant-design-icon-2048x2046-dl3neb73.png";
import express_img from "@/app/assets/technology/express.webp";
import figma_img from "@/app/assets/technology/figma-logo-512.webp";
import mui_img from "@/app/assets/technology/material-ui-icon-2048x1626-on580ia9.png";
import nodejs_img from "@/app/assets/technology/Node.js_logo.svg";
import mysql_img from "@/app/assets/technology/mysql-logo.svg";
import nextjs_img from "@/app/assets/technology/nextjs-icon-2048x1234-pqycciiu.png";
import postgresql_img from "@/app/assets/technology/postgresql-logo-transparent.png";
import react_img from "@/app/assets/technology/react_logo-512.webp";
import redux_img from "@/app/assets/technology/redux.png";

export default function TechnologyExpertiseCarouselMobile() {
  return (
    <div
      id="technology-expertise"
      className="uppercase text-center  font-semibold"
    >
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[]}
        className="mySwiper"
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
          <div id="frontend" className="h-80 w-86 bg-white rounded-3xl p-4 text-2xl ">
            <p>Frontend</p>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-around">
                <Image alt="tech-img" src={typeScript_img} />
                <Image alt="tech-img" src={javaScript_img} /> 
                <Image alt="tech-img" src={react_img} />
              </div>
              <div className="flex justify-around">
                <Image alt="tech-img" src={nextjs_img} />
                <Image alt="tech-img" src={tailwind_img} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="backend"  className="h-80 w-86 bg-white rounded-3xl p-4 text-2xl ">
            <p>Backend</p>
            <div className="flex flex-col justify-around gap-4">
              <div className="flex justify-around">
                <Image alt="tech-img" src={nodejs_img} />
                <Image alt="tech-img" src={express_img} />
              </div>
              <div className="flex justify-around">
                <Image alt="tech-img" src={postgresql_img} />
                <Image alt="tech-img" src={mysql_img} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="tool"  className="h-80 w-86 bg-white rounded-3xl p-4 text-2xl ">
            <p>Tools</p> 
            <div className="flex flex-col justify-around gap-4">
              <div className="flex justify-around">
                <Image alt="tech-img" src={redux_img} />
                <Image alt="tech-img" src={mui_img} />{" "}
                <Image alt="tech-img" src={figma_img} />
              </div>
              <div className="flex justify-around">
                <Image alt="tech-img" src={ant_design_img} />
                <Image alt="tech-img" src={vscode_img} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
