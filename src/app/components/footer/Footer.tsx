import React from "react";
import beam_d_img from "@/app/assets/beamD-logo.png";
import Image from "next/image";
import line_img from "@/app/assets/footer/line.png";
import facebook_img from "@/app/assets/footer/facebook.png";
import linked_in_img from "@/app/assets/footer/linkedin-big-logo.png";

export default function Footer() {
  const renderFooter = () => {
    return (
      <div className="xl:container mx-auto w-full flex flex-col py-4">
        <div className="h-full w-full bg-green-400 flex items-center 840px:flex-row flex-col ">
          <div className="h-full w-full flex flex-col justify-center 840px:items-start items-center bg-orange-400 840px:py-0 py-4">
            <Image
              alt=""
              src={beam_d_img}
              className="lg:h-16 lg:w-32 h-12 w-24  "
            />
            <div className="gap-2 840px:flex hidden py-2">
              <p>ABOUT US</p>
              <p>OUR SERVICE</p>
              <p>OUR STRENGTHES</p>
              <p>OUR TEAMS</p>
            </div>
          </div>

          <div className="h-full lg:160 840px:w-192 w-full bg-yellow-600 flex items-center 840px:justify-start justify-center ">
            <div className="gap-2 bg-pink-400  840px:px-0 px-1">
              <div className="w-full  flex 840px:flex-ros flex-col 840px:items-start items-center">
                <div>
                  <p>https://www.beamd.com</p>
                  <p>Email: sales@beamd.com</p>
                  <p>Tel:OUR STRENGTHES</p>
                  <p>OUR TEAMS</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 flex-wrap w-full bg-red-400  840px:justify-start justify-center ">
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

        <hr className="border border-gray-600" />
        <div className="h-20 bg-red-400 flex 840px:justify-between justify-around 840px:flex-row flex-col ">
          <div className="bg-yellow-400 flex 840px:justify-normal justify-center gap-2">
            <p>TERMS</p>
            <p>PRIVACY</p>
            <p>COOKIES</p>
          </div>
          <div className="bg-blue-400 flex 840px:justify-normal justify-center">
            <p>2007 - 2023 © ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    );
  };

  return <div className="bg-neutral-200 px-1">{renderFooter()}</div>;
}
