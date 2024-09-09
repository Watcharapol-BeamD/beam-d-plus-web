"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./PartnerCarousel.css";

//to use navigation on swiper
//1. import "swiper/css/navigation";
//2. add Navigation to module
//3. add navigation={true} to swiper element

// import required modules
import Image from "next/image";
import { Grid, Pagination, Autoplay, Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

import thai_airway from "../../../assets/about-us/partner/thai_air_way.webp";
import sg_airline from "../../../assets/about-us/partner/sg_airline.webp";
import cp_img from "../../../assets/about-us/partner/c.p._intertrade_co._ltd.webp";
import cat_img from "../../../assets/about-us/partner/CATTelecom_Logo.webp";
import HomePro_img from "../../../assets/about-us/partner/HomePro_Logo.webp";
import index_img from "../../../assets/about-us/partner/logo_black.webp";
import pttep_img from "../../../assets/about-us/partner/logo-pttep-250.webp";
import scg_img from "../../../assets/about-us/partner/Scg.webp";
import uniliver_img from "../../../assets/about-us/partner/Unilever.webp";
import osotspa_img from "../../../assets/about-us/partner/osotspa.webp";
import gtx_img from "@/app/assets/about-us/partner/gtxLogo.webp";
import spx_img from "@/app/assets/about-us/partner/logo-SPX.webp";
import beiersdorf_img from "@/app/assets/about-us/partner/Beiersdorf_Logo.webp";
import smartrac_img from "@/app/assets/about-us/partner/SMARTRAC_Logo.webp";
import levis_img from "@/app/assets/about-us/partner/levis.webp";
import esso_img from "@/app/assets/about-us/partner/Esso-logo-073F2C0D97-seeklogo.com.webp";
import ttm_img from "@/app/assets/about-us/partner/TTM_Logo_Big-removebg-preview.webp";
import bat_img from "@/app/assets/about-us/partner/bat.webp";
import pcs_img from "@/app/assets/about-us/partner/pcs-logo.webp";
import chula_img from "@/app/assets/about-us/partner/chula.webp";
import netlock_img from "@/app/assets/about-us/partner/logo_netlock_2019_black.webp";

export default function PartnerCarousel() {
  const is640Screen = useMediaQuery("(min-width:640px)", { noSsr: true });
  const [isMounted, setIsMounted] = useState(false);

  const data = [
    { id: 1, image_name: beiersdorf_img },   
    { id: 2, image_name: uniliver_img },   
    { id: 3, image_name: osotspa_img },
    { id: 4, image_name: pttep_img },
    { id: 5, image_name: scg_img },
    { id: 6, image_name: HomePro_img },
    { id: 7, image_name: esso_img },
    { id: 8, image_name: sg_airline },
    { id: 9, image_name: gtx_img },
    { id: 10, image_name: spx_img },
    { id: 11, image_name: index_img },
    { id: 12, image_name: netlock_img },
    { id: 13, image_name: pcs_img },
    { id: 14, image_name: chula_img },
    { id: 15, image_name: bat_img },    
    { id: 16, image_name: cat_img },
    { id: 17, image_name: cp_img },
    { id: 18, image_name: ttm_img },
    { id: 19, image_name: thai_airway },
    { id: 20, image_name: smartrac_img },
    { id: 21, image_name: levis_img },
 ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid mismatches during the initial render
  }

  const breakpointsJson = JSON.stringify({
    768: {
      slidesPerView: 6,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    1024: {
      slidesPerView: 8,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  });
  const breakpoints = JSON.parse(breakpointsJson);

  const renderCarousel = () => {
    return (
      <div className="p-1" id="partner-carousel"  >
        <Swiper
          // slidesPerView={5}
          grid={{
            rows: 2,
          }}
          spaceBetween={10}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={is640Screen}
          modules={[Grid, Pagination, Autoplay, Navigation]}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            320: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            440: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            600: {
              slidesPerView: 4,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            800: {
              slidesPerView: 5,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}

          //  breakpoints={JSON.parse(
          //         JSON.stringify({
          //           0: { slidesPerView: 1,
          //             grid: {
          //               rows: 2,
          //               fill: "row",
          //             } },
          //           320: { slidesPerView: 2,
          //             grid: {
          //               rows: 2,
          //               fill: "row",
          //             } },
          //           440: { slidesPerView: 3,
          //             grid: {
          //               rows: 2,
          //               fill: "row",
          //             } },
          //           600: { slidesPerView: 4 ,
          //             grid: {
          //               rows: 2,
          //               fill: "row",
          //             }},
          //           800: { slidesPerView: 5,
          //             grid: {
          //               rows: 2,
          //               fill: "row",
          //             } },
          //         })
          //       )}

          // breakpoints={breakpoints}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className=" ">
              <div className="md:h-28 md:w-40 h-20  w-36">
                <Image
                  alt=""
                  role="img"
                  src={item.image_name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return <>{renderCarousel()} </>;
}
