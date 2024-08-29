import React from "react";
import MagentoMainBanner from "./components/magento-main-banner/magento-main-banner";
import ContentSection from "./components/content-section/content-section";

export default function MagentoPage() {
  const renderMagento = () => {
    return (
      <div className="xl:container mx-auto">
        <MagentoMainBanner />
        <div className="px-2 my-4">  <ContentSection/></div>
      
      </div>
    );
  };

  return <div className="flex-1">{renderMagento()}</div>;
}
