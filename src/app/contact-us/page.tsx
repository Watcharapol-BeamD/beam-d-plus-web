import React from "react";
import ContactUsMainBanner from "./components/contact-us-main-banner/contact-us-main-banner";

export default function ContactUsPage() {

const renderContactUs = ()=>{
    return <div><ContactUsMainBanner/></div>
}


  return <div className="flex-1">{renderContactUs()}</div>;
}
