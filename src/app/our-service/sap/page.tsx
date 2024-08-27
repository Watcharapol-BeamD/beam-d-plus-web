import React from "react";
import SapMainBanner from "./components/sap-main-banner/sap-main-banner";

export default function SapPage() {
  const renderSap = () => {
    return (
      <div className="xl:container mx-auto">
        <SapMainBanner />
      </div>
    );
  };

  return <>{renderSap()}</>;
}
