import React from "react";
import XlerateMainBanner from "./components/xlerate-main-banner/xlerate-main-banner";
import XlerateContentSection from "./components/xlerate-content-section/xlerate-content-section";

export default function XleratePage() {
  const renderXlerate = () => {
    return (
      <div className="xl:container mx-auto">
        <XlerateMainBanner />
        <div className="px-2 my-4">
          <XlerateContentSection />
        </div>
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderXlerate()}</div>;
}
