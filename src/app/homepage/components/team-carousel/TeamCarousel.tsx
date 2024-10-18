"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import "./TeamCarousel.css";

// import required modules
import { Scrollbar, Navigation } from "swiper/modules";
import Image from "next/image";

import Ratchtar_Karasuddhi_img from "@/app/assets/our-team/teammate/Ratchtar_Karasuddhi_img.webp";
import Kannika_Angkurarat_img from "@/app/assets/our-team/teammate/Kannika_Angkurarat_img.webp";
import Rujinun_Smarnond_img from "@/app/assets/our-team/teammate/Rujinun_Smarnond_img.webp";
import Pongtorn_Raktiprakorn_img from "@/app/assets/our-team/teammate/Pongtorn_Raktiprakorn_img.webp";
import Nuttapon_Wongkongmunsakul_img from "@/app/assets/our-team/teammate/Nuttapon_Wongkongmunsakul_img.webp";
import Watcharapol_Numpaya_img from "@/app/assets/our-team/teammate/Watcharapol_Numpaya_img.webp";
import Deepak_VV_img from "@/app/assets/our-team/teammate/Deepak_VV_img.webp";
import Parvathi_JS_img from "@/app/assets/our-team/teammate/Parvathi_JS_img.webp";
import Ullas_U_img from "@/app/assets/our-team/teammate/Ullas_U_img.webp";
import Ratnisa_Boonhenglee_img from "@/app/assets/our-team/teammate/Ratnisa_Boonhenglee_img.webp";
import Suphitcha_Jirivipakorn_img from "@/app/assets/our-team/teammate/Suphitcha_Jirivipakorn_img.webp";
import Theeraphat_Aksaranan_img from "@/app/assets/our-team/teammate/Theeraphat_Aksaranan_img.webp";
import Anulatha_Padmakumari_img from "@/app/assets/our-team/teammate/Anulatha_Padmakumari_img.webp";
import Gopakumar_Krishnamma_GK_img from "@/app/assets/our-team/teammate/Gopakumar_Krishnamma_GK_img.webp";
import Prasanth_Kumar_D_img from "@/app/assets/our-team/teammate/Prasanth_Kumar_D_img.webp";

type TeamCarouselProps = {
  numberOfSlide: number;
};

export default function TeamCarousel({ numberOfSlide }: TeamCarouselProps) {
  const personList = [
    {
      profilePic: Kannika_Angkurarat_img,
      fullName: "May Kannika",
      position: "Managing Director",
      description: `Highly experienced SAP consultant with expertise in change management and project implementation across functions;
       such as supply chain, finance, and sales. Having worked on highly complex project 
       environment for notable global and local companies in Thailand and SEA.
`,
    },
    {
      profilePic: Rujinun_Smarnond_img,
      fullName: "Oil Rujinun",
      position: "CIO",
      description: `Extensive experience in leading successful digital transformation eB2B and retailer application development. 
      Background spanning +10 years as project management officer, project network planning in various industries and multiple countries.
`,
    },
    {
      profilePic: Deepak_VV_img,
      fullName: "Deepak VV",
      position: "Principal / Program Director",
      description: `Expert in digital transformation with 20 years' experience in the SAP, 
      ABAP coding, and other programing language such as JAVA and FLUTTER.
       Accumulating expertise across industries, from automotive, retailing, 
       and FMCG sectors, experienced as both a developer and technical architect.
`,
    },
    {
      profilePic: Nuttapon_Wongkongmunsakul_img,
      fullName: "Nut Nuttapol",
      position: "Information Technology Lead",
      description: `10+ years' experience in distributor management system (DMS), end to end eB2B implementation, 
      WMS and dynamic logistical design. Completed the front-end user interface for salesman mobility and retailer to end user journey design.
`,
    },
    {
      profilePic: Pongtorn_Raktiprakorn_img,
      fullName: "Gade Pongtorn",
      position: "Business Process & Digital Design",
      description: `Experienced in productivity & process design. Deep understanding of end-to-end business processes from Field Sales experience, 
      complemented by expertise in O2C system control and supply chain management for B2B2C
`,
    },
  ];

  return (
    <div id="team-carousel" className="h-full w-full">
      <Swiper
        scrollbar={{
          hide: false,
        }}
        slidesPerView={numberOfSlide}
        spaceBetween={10}
        // navigation={true}
        modules={[Scrollbar, Navigation]}
      >
        {personList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-full ml:p-6 p-4 flex flex-col items-center shadow-xl border cursor-pointer ">
                <div className="rounded-full overflow-hidden  ">
                  <Image alt="person" role="img" src={item.profilePic} className="object-top"/>
                </div>
                <div className="mt-2">
                  <p className="text-lg">{item.fullName}</p>
                  <p className="text-base ">{item.position}</p>
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
