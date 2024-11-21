"use client";
// import Image from "next/image";
import beam_d_logo from "@/app/assets/Fw_ Logo Beand + in png/25845806_transparent.png";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import DrawerComponent from "../drawer";
import sea_tech_logo from "@/app/assets/SEA-Tech-logo.png";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const is768Screen = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid mismatches during the initial render
  }

  const renderNavbarDesktop = () => {
    return (
      <div className="absolute top-10 left-0 w-full z-40 h-24 flex items-center justify-center px-1">
        <div className="lg:container mx-auto xl:w-[75%] lg:w-[90%] w-auto px-2 h-24  bg-white flex justify-between items-center rounded-md shadow-xl border ">
          <Link href={"/"} className="mr-2 ">
            <Image
              alt=""
              src={sea_tech_logo}
              className="lg:h-16 lg:w-full h-12 w-full  "
            />
          </Link>
          <ol className="flex space-x-4 uppercase items-center text-base">
            <Link href="/about-us" className="cursor-pointer relative group">
              <span className="relative z-10">About Us</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link href="/our-service" className="cursor-pointer relative group">
              <span className="relative z-10">Our Service</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/our-strengths"
              className="cursor-pointer relative group"
            >
              <span className="relative z-10">Our Strengths</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link href="/our-teams" className="cursor-pointer relative group">
              <span className="relative z-10">Our Teams</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link href="/contact-us">
              <button className="bg-primary px-6 py-4 rounded-full text-white">
                CONTACT US
              </button>
            </Link>
          </ol>
        </div>
      </div>
    );
  };

  const renderNavbarDesktopMobile = () => {
    return (
      <>
        <DrawerComponent />
      </>
    );
  };

  return (
    <>{is768Screen ? renderNavbarDesktop() : renderNavbarDesktopMobile()}</>
  );
}
