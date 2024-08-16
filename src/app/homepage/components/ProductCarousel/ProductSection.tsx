"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProductSection.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Autoplay,
  Pagination,
  Navigation,
  A11y,
  Scrollbar,
} from "swiper/modules";

register();

function ProductSection({}) {
  const renderProductSection = () => {
    return (
      <div
        id="product-carousel"
        className={` border-4 shadow-sm h-110 rounded-xl text-base p-2 flex flex-col`}
      >
        <Swiper
          speed={600}
          spaceBetween={0}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          // slidesPerView={7}
          // slidesPerGroup={1}
          breakpoints={{
            // when window width is >= 1px
            1: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // when window width is >= 306px
            350: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            //  when window width is >=560px
            665: {
              slidesPerView: 3,
              spaceBetween: 0,
            },

            865: {
              slidesPerView: 4,
              spaceBetween: 0,
            },

            1065: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1275: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <div className="h-60 w-40 bg-red-400"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };

  return (
    <div id="product-section" className="">
      {renderProductSection()}
    </div>
  );
}

export default ProductSection;
