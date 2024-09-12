import React from "react";
import XnappSalesBanner from "./components/xnapp-sales-banner/xnapp-sales-banner";
import ContentSection from "./components/xnapp-content-section/xnapp-content-section";

export default function XnappSalePage() {
  const renderXnappSalePage = () => {
    return (
      <div className="xl:container mx-auto">
        <XnappSalesBanner />
        <div className="px-2 my-4">
          <ContentSection />
        </div>
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderXnappSalePage()}</div>;
}
