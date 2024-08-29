import React from "react";
import beam_d_img from "@/app/assets/beamD-logo.png";
import Image from "next/image";
import line_img from "@/app/assets/footer/line.png";
import facebook_img from "@/app/assets/footer/facebook.png";
import linked_in_img from "@/app/assets/footer/linkedin-big-logo.png";
import Link from "next/link";

export default function Footer() {
  const renderFooter = () => {
    return (
      <div className="xl:container mx-auto w-full flex flex-col py-4">
        <div className="h-full w-full  flex items-center 840px:flex-row flex-col ">
          <div className="h-full w-full flex flex-col justify-center 840px:items-start items-center 0 840px:py-0 py-4">
            <Image alt="" src={beam_d_img} className="h-16 w-32" />
            <div className="gap-2 840px:flex hidden py-2">
              <Link href={"/about-us"} >ABOUT US</Link>
              <Link href={"/our-service"}>OUR SERVICE</Link>
              <Link href={"/our-strengths"}>OUR STRENGTHES</Link>
              <Link href={"/our-teams"}>OUR TEAMS</Link>
            </div>
          </div>

          <div className="h-full lg:160 840px:w-192 w-full  flex items-center 840px:justify-start justify-center ">
            <div className="gap-2   840px:px-0 px-1">
              <div className="w-full  flex 840px:flex-ros flex-col 840px:items-start items-center">
                <div>
                  <p>https://www.beamd.com</p>
                  <span >Email:</span> <span className="underline">sales@beamd.com</span> 
                  <p>Tel:+66 61 546 3539 (24hrs)</p>
                  <p>Tel:+66 87 678 5862</p> 
                  <p>Tel:+66 2833 9621</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 flex-wrap w-full  840px:justify-start justify-center ">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-1 border border-blue-600">
                    <Image alt="" src={facebook_img} className="h-6 w-6" />
                  </div>
                  <p>@BeamDConsulting</p>
                </div>

                <div className="flex items-center">
                  <div className="bg-white rounded-full p-2 border border-black">
                    <Image alt="" src={linked_in_img} className="h-4 w-4" />
                  </div>
                  <p>BeamD</p>
                </div>

                <div className="flex items-center">
                  <div className="bg-white rounded-full p-1 border border-blue-600">
                    <Image alt="" src={line_img} className="h-6 w-6" />
                  </div>
                  <p>@BeamD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border border-gray-400 my-4" />
        <div className="h-20  flex 840px:justify-between justify-around 840px:flex-row flex-col ">
          <div className=" flex 840px:justify-normal justify-center gap-2">
            <p>TERMS</p>
            <p>PRIVACY</p>
            <p>COOKIES</p>
          </div>
          <div className=" flex 840px:justify-normal justify-center">
            <p>2007 - 2023 © ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    );
  };

  return <div className="bg-neutral-200 px-1">{renderFooter()}</div>;
}
