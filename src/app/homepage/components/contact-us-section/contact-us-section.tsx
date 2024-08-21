import React from "react";

import thailand from "@/app/assets/contact-us/thailand.png";
import india from "@/app/assets/contact-us/india.png";
import singapore from "@/app/assets/contact-us/singapore.png";
import Image from "next/image";
import Button from "@/app/components/Button";
import ContactUsForm from "../contact-us-form/ContactUsForm";

export default function ContactUsSection() {
  // const renderContactForm = () => {
  //   return (
  //     <div className="border py-6 shadow-lg">
  //       <p className="text-center text-3xl">LET'S CONNECT</p>

  //       <div className="flex justify-center flex-col items-center mt-6">
  //         <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
  //           <div>
  //             <p className=" ">First Name</p>
  //             <input className="py-2 outline-none border-b-2 border-black " />
  //           </div>
  //           <div>
  //             <p className=" ">Last Name</p>
  //             <input className="py-2 outline-none border-b-2 border-black " />
  //           </div>
  //           <div>
  //             <p className=" ">Company Name</p>
  //             <input className="py-2 outline-none border-b-2 border-black " />
  //           </div>
  //           <div>
  //             <p className=" ">Company Email</p>
  //             <input className="py-2 outline-none border-b-2 border-black " />
  //           </div>
  //           <div className="grid grid-col-1 gap-10">
  //             <div>
  //               <p className=" ">Phone Number</p>
  //               <input className="py-2 outline-none border-b-2 border-black " />
  //             </div>
  //             <div>
  //               <p className=" ">Leave A Message</p>
  //               <input className="py-2 outline-none border-b-2 border-black " />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="mt-4"> <Button title={"SENT MESSAGE"}  /></div>
         
  //       </div>
  //     </div>
  //   );
  // };

  const renderAddress = () => {
    return (
      <>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-lg font-bold">THAILAND </p>
            <Image alt="" src={thailand} className="w-12" />
          </div>

          <p>karnthanawat Building Floor5.</p>
          <p>536 Ratchadapisek Rd., Samsennok,</p>
          <p>HuayKwang, Bangkok, Thailand 10310</p>
        </div>
        <div className="pt-4">
          <div className="flex items-center gap-1">
            <p className="text-lg font-bold">INDIA</p>
            <Image alt="" src={india} className="w-12" />
          </div>

          <p>SreshtGyan Tech Solutions Pvt Ltd, Devi Krishna,</p>
          <p>Near Technocity, Pallippuram, Thiruvananthapuram</p>
          <p> 695 316, Kerala, India</p>
          <p>India Tel: +91 86062 24377</p>
          <p>gopakumar.krishnamma@gyantechsolution.com</p>
          <p>https://www.gyantechsolution.com</p>
          <p>CIN: U72900KL2017PTC051475</p>
        </div>
        <div className="pt-4">
          <div className="flex items-center gap-1">
            <p className="text-lg font-bold">SINGAPORE</p>
            <Image alt="" src={singapore} className="w-12" />
          </div>
          <p>Property Address: 770 Bedok</p>
          <p>Reservoir Road, Waterfront</p>
          <p>Key, #07-05 Singapore 479250</p>
          <p>Tel +65 8427 2607</p>
        </div>
      </>
    );
  };

  const renderContactUs = () => {
    return (
      <div className="">
        <p className="text-center text-3xl text-neutral-700">Contact Us</p>
        <p className="text-center text-lg text-neutral-700">
          For Business Inquiries
        </p>
        <div className="flex mt-10 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full lg:block hidden ">{renderAddress()}</div>
          <div className="lg:w-1/2 w-full "><ContactUsForm/></div>
        </div>
      </div>
    );
  };

  return <div className="py-4 lg:px-6 px-2  ">{renderContactUs()}</div>;
}
