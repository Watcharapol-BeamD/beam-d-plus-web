"use client";
import React from "react";
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
import thai_airway from "../../../assets/thai_air_way.png";
import join_img from "../../../assets/join.png";
import sg_airline from "../../../assets/sg_airline.jpg";

export default function PartnerCarousel() {
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
      <div className="h-96" id="partner-section">
        <Swiper
          // slidesPerView={5}
          grid={{
            rows: 2,
          }}
          spaceBetween={10}
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[Grid, Pagination, Autoplay, Navigation]}
          loop={true}
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
          {[...Array(18)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="h-28">
                <Image
                  alt=""
                  role="img"
                  src={index % 2 === 0 ? thai_airway : sg_airline}
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
