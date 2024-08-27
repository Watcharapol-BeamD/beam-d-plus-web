import React from "react";
import ContactUsMainBanner from "./components/contact-us-main-banner/contact-us-main-banner";
import ContactAddressSection from "./components/contact-address-section/contact-address-section";

export default function ContactUsPage() {
  const renderContactUs = () => {
    return (
      <div className="xl:container mx-auto">
        <ContactUsMainBanner />
        <div className="py-4">  <ContactAddressSection /></div>
      
      </div>
    );
  };

  return <div className="flex-1">{renderContactUs()}</div>;
}
