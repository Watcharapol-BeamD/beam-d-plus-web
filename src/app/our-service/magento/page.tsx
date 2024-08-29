import React from "react";
import MagentoMainBanner from "./components/magento-main-banner/magento-main-banner";

export default function MagentoPage() {
  const renderMagento = () => {
    return (
      <div className="xl:container mx-auto">
        <MagentoMainBanner />
      </div>
    );
  };

  return <div className="flex-1">{renderMagento()}</div>;
}
