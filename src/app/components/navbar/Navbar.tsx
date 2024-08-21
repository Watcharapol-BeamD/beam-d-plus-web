"use client";
// import Image from "next/image";
import beam_d_logo from "@/app/assets/Fw_ Logo Beand + in png/25845806_transparent.png";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Navbar() {
  const renderNavbar = () => {
    return (
      <div className="container mx-auto xl:w-[75%] w-[80%]  h-24  bg-white flex justify-between items-center rounded-md shadow-2xl border-b px-4">
        <Link href={'/'} className="w-16 h-16 bg-green-400"></Link>
        <ol className="flex space-x-4 uppercase items-center text-base text-">
          <Link href={'/about-us'} className="cursor-pointer">About Us</Link>
          <Link href={'/our-service'} className="cursor-pointer">Our Service</Link>
          <Link href={'/our-strengths'} className="cursor-pointer">Our Strengths</Link>
          <Link href={'/our-teams'} className="cursor-pointer">Our Teams</Link>
          <Link href={'/contact-us'}><Button title={"CONTACT US"} /></Link>
        </ol>
      </div>
    );
  };

  return (
    <div className=" fixed top-10 left-0 w-full z-50 h-24 flex items-center justify-center   ">
      {renderNavbar()}
    </div>
  );
}
