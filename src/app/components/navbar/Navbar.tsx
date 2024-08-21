"use client";
// import Image from "next/image";
import beam_d_logo from "@/app/assets/Fw_ Logo Beand + in png/25845806_transparent.png";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import DrawerComponent from "../drawer";
import beam_d_img from "@/app/assets/beamD-logo.png";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const is768Screen = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid mismatches during the initial render
  }

  const renderNavbar = () => {
    return (
      <div className=" fixed top-10 left-0 w-full z-50 h-24 flex items-center justify-center px-1">
        <div className="lg:container mx-auto xl:w-[75%] lg:w-[90%] w-auto px-2 h-24  bg-white flex justify-between items-center rounded-md shadow-xl border ">
          <Link href={"/"} className=" ">
            <Image alt="" src={beam_d_img} className="lg:h-16 lg:w-32 h-12 w-24  " />
          </Link>
          <ol className="flex space-x-4 uppercase items-center text-base ">
            <Link href={"/about-us"} className="cursor-pointer">
              About Us
            </Link>
            <Link href={"/our-service"} className="cursor-pointer">
              Our Service
            </Link>
            <Link href={"/our-strengths"} className="cursor-pointer">
              Our Strengths
            </Link>
            <Link href={"/our-teams"} className="cursor-pointer">
              Our Teams
            </Link>
            <Link href={"/contact-us"}>
              <button className="bg-primary px-6 py-4 rounded-full text-white">CONTACT US</button>
              {/* <Button title={"CONTACT US"} /> */}
            </Link>
          </ol>
        </div>
      </div>
    );
  };

  const renderNavbarMobile = () => {
    return (
      <div className="bg-blue-400">
        <DrawerComponent />
      </div>
    );
  };

  return <>{is768Screen ? renderNavbar() : renderNavbarMobile()}</>;
}
