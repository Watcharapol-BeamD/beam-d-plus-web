import Image from "next/image";
import React from "react";
import thailand from "@/app/assets/contact-us/thailand.png";
import india from "@/app/assets/contact-us/india.png";
import singapore from "@/app/assets/contact-us/singapore.png";

export default function ContactAddressSection() {
  const renderContactAddressSection = () => {
    return (
      <div className="">
        <div className="text-center pb-4">
          <p className="text-2xl">Contact Us</p>
          <p className="text-lg">For Business Inquiries</p>
        </div>

        <div className="flex justify-center ite md:flex-row flex-col md:gap-10 gap-4">
          <div className="sm:text-base text-sm ">
            <div className="flex items-center gap-1">
              <p className="sm:text-lg text-base font-bold">THAILAND </p>
              <Image alt="" src={thailand} className="w-12" />
            </div>

            <p>Karnthanawat Building Floor5.</p>
            <p>536 Ratchadapisek Rd., Samsennok,</p>
            <p>HuayKwang, Bangkok, Thailand 10310</p>
            <p>Tel +66615463539</p>
          </div>
          <div className="sm:text-base text-sm">
            <div className="flex items-center gap-1">
              <p className="sm:text-lg text-base font-bold">INDIA</p>
              <Image alt="" src={india} className="w-12" />
            </div>

            {/* <p>SreshtGyan Tech Solutions Pvt Ltd, Devi Krishna,</p> */}
            <p>Near Technocity, Pallippuram, Thiruvananthapuram</p>
            <p> 695 316, Kerala, India</p>
            <p>India Tel: +91 86062 24377</p>
            {/* <p>gopakumar.krishnamma@gyantechsolution.com</p>
            <p>https://www.gyantechsolution.com</p>
            <p>CIN: U72900KL2017PTC051475</p> */}
          </div>
          <div className="sm:text-base text-sm">
            <div className="flex items-center gap-1">
              <p className="sm:text-lg text-base font-bold">SINGAPORE</p>
              <Image alt="" src={singapore} className="w-12" />
            </div>
            <p>Property Address: 770 Bedok</p>
            <p>Reservoir Road, Waterfront</p>
            <p>Key, #07-05 Singapore 479250</p>
            <p>Tel +65 8427 2607</p>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderContactAddressSection()}</>;
}
