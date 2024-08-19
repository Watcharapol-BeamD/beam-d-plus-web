import React from "react";

export default function ContactUsSection() {
  const renderContactUs = () => {
    return (
      <div className="">
        <p className="text-center text-3xl text-neutral-700">Contact Us</p>
        <p className="text-center text-lg text-neutral-700">
          For Business Inquiries
        </p>
        <div className="flex h-40 ">
          <div className="w-5/12  ">
            <div>
              <p className="text-lg font-bold">THAILAND</p>
              <p>karnthanawat Building Floor5.</p>
              <p>536 Ratchadapisek Rd., Samsennok,</p>
              <p>HuayKwang, Bangkok, Thailand 10310</p>
            </div>
            <div className="pt-4">
              <p className="text-lg font-bold">INDIA</p>
              <p>SreshtGyan Tech Solutions Pvt Ltd, Devi Krishna,</p>
              <p>Near Technocity, Pallippuram, Thiruvananthapuram</p>
              <p> 695 316, Kerala, India</p>
              <p>India Tel: +91 86062 24377</p>
              <p>gopakumar.krishnamma@gyantechsolution.com</p>
              <p>https://www.gyantechsolution.com</p>
              <p>CIN: U72900KL2017PTC051475</p>
            </div>
            <div className="pt-4">
              <p className="text-lg font-bold">SINGAPORE</p>
              <p>
                Property Address: 770 Bedok Reservoir Road, Waterfront Key,
                #07-05 Singapore 479250 Singapore Tel +65 8427 2607
              </p>
            </div>
          </div>
          <div className="w-7/12 "></div>
        </div>
      </div>
    );
  };

  return <div className="p-2">{renderContactUs()}</div>;
}
