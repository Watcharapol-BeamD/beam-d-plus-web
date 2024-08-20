"use client";
// import Image from "next/image";
import beam_d_logo from "@/app/assets/Fw_ Logo Beand + in png/25845806_transparent.png";
import Image from "next/image";
import Button from "../Button";

export default function Navbar() {
  const renderNavbar = () => {
    return (
      <div className="container mx-auto xl:w-[75%] w-[80%]  h-24  bg-white flex justify-between items-center rounded-md shadow-2xl border-b px-4">
        <div className="w-16 h-16 bg-green-400"></div>
        <ol className="flex space-x-4 uppercase items-center">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Our Service</li>
          <li className="cursor-pointer">Our Sstrengths</li>
          <li className="cursor-pointer">Our Teams</li>
          <Button title={"CONTACT US"} />
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
