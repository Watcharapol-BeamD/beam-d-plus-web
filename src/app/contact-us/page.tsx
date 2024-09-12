import React from "react";
import ContactUsMainBanner from "./components/contact-us-main-banner/contact-us-main-banner";
import ContactAddressSection from "./components/contact-address-section/contact-address-section";
import ContactUsForm from "../homepage/components/contact-us-form/ContactUsForm";

export default function ContactUsPage() {
  const renderContactUs = () => {
    return (
      <div className="xl:container mx-auto">
        <ContactUsMainBanner />
        <div className="lg:px-0 px-2 py-4 space-y-4 w-full flex flex-col items-center">
          <ContactAddressSection />
          <div className="lg:w-176 w-full">
            <ContactUsForm />
          </div>
        </div>
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderContactUs()}</div>;
}
