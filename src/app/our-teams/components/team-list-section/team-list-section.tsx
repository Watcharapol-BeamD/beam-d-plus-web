import React from "react";
import Image, { StaticImageData } from "next/image";
import team_img from "@/app/assets/our-team/african-head-department-is-satisfied-with-work-staff-asian-male-student-trendy-shirt-telling-univers.webp";
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


type TeamCardProps = {
  id: number;
  image_name: StaticImageData;
  full_name: string;
  position: string;
};
export default function TeamListSection() {
  const data: TeamCardProps[] = [
    {
      id: 1,
      image_name: Ratchtar_Karasuddhi_img,
      full_name: "Ratchtar Karasuddhi (Jack)",
      position: "Board of director",
    },
    {
      id: 2,
      image_name: Kannika_Angkurarat_img,
      full_name: "Kannika Angkurarat (May)",
      position: "Managing Director",
    },
    {
      id: 3,
      image_name: Rujinun_Smarnond_img,
      full_name: "Rujinun Smarnond (oil)",
      position: "Head of Program Management",
    },
    {
      id: 4,
      image_name: Pongtorn_Raktiprakorn_img,
      full_name: "Pongtorn Raktiprakorn (Gade)",
      position: "MDM & Business Process Lead",
    },
    {
      id: 5,
      image_name: Nuttapon_Wongkongmunsakul_img,
      full_name: "Nuttapon Wongkongmunsakul (Nut)",
      position: "Solution Development Head",
    },
    {
      id: 6,
      image_name: Watcharapol_Numpaya_img,
      full_name: "Watcharapol Numpaya (Bew)",
      position: "Application Developer",
    },
    {
      id: 7,
      image_name: Deepak_VV_img,
      full_name: "Deepak VV",
      position: "DMS/ERP/SAP Implementation Head",
    },
    {
      id: 8,
      image_name: Parvathi_JS_img,
      full_name: "Parvathi J S",
      position: "React/Angular Developer",
    },
    {
      id: 9,
      image_name: Ullas_U_img,
      full_name: "Ullas U",
      position: "JAVA Backend Stack Developer",
    },
    {
      id: 10,
      image_name: Ratnisa_Boonhenglee_img,
      full_name: "Ratnisa Boonhenglee (Ise)",
      position: "Functional Consultant",
    },
    {
      id: 11,
      image_name: Suphitcha_Jirivipakorn_img,
      full_name: "Suphitcha Jirivipakorn (Dear)",
      position: "Functional Consultant",
    },
    {
      id: 12,
      image_name: Theeraphat_Aksaranan_img,
      full_name: "Theeraphat Aksaranan (Top)",
      position: "Full Stack Developer",
    },   {
      id: 14,
      image_name:Anulatha_Padmakumari_img  ,
      full_name: "Anulatha Padmakumari",
      position: "Functional Consultant",
    },
    {
      id: 13,
      image_name: Gopakumar_Krishnamma_GK_img,
      full_name: "Gopakumar Krishnamma (GK)",
      position: "Project Manager",
    },
 
    {
      id: 15,
      image_name: Prasanth_Kumar_D_img,
      full_name: "Prasanth Kumar D",
      position: "Software Architect ",
    },
  ];

  const renderTeamCard = (item: TeamCardProps) => {
    return (
      <div className="relative h-full w-68">
        <div className="h-80 w-56 rounded-tr-3xl rounded-bl-3xl overflow-hidden p-2 border border-primary">
          <Image
            alt=""
            src={item.image_name}
            className="h-full w-full  rounded-tr-3xl rounded-bl-3xl object-cover"
          />
        </div>
        <div className="absolute bg-white border bottom-4 right-0 py-1 px-2 rounded-xl shadow">
          <p className="invisible text-sm font-semibold">{item.full_name}</p>
          <p className="invisible text-sm ">{item.position}</p>
        </div>
        <div className="absolute bg-white border bottom-6 right-2 py-1 px-2 rounded-xl shadow">
          <p className="text-sm font-semibold">{item.full_name}</p>
          <p className="text-sm">{item.position}</p>
        </div>
      </div>
    );
  };

  const renderCardList = () => {
    return (
      <div className="h-full w-full flex justify-center flex-wrap gap-8  ">
        {data.map((item: TeamCardProps, index: number) => {
          return (
            <React.Fragment key={index}>{renderTeamCard(item)}</React.Fragment>
          );
        })}
      </div>
    );
  };

  return <>{renderCardList()}</>;
}
