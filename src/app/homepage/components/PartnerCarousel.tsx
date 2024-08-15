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
import thai_airway from "../../assets/thai_air_way.png";
import join_img from "../../assets/join.png";
import sg_airline from "../../assets/sg_airline.jpg";

export default function PartnerCarousel() {
  const renderCarousel = () => {
    return (
      <div className="h-96" id="partner-section">
        <Swiper
          slidesPerView={5}
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
        >
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 ">
              <Image alt="" role="img" src={thai_airway} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-28 bg-green-400">
              <Image alt="" role="img" src={sg_airline} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };

  return <>{renderCarousel()} </>;
}
