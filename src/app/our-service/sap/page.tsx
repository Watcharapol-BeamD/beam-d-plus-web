import React from "react";
import SapMainBanner from "./components/sap-main-banner/sap-main-banner";
import SapInfo from "./components/sap-info/sap-info";

export default function SapPage() {




  const renderSap = () => {
    return (
      <div className="xl:container mx-auto">
        <SapMainBanner />
        <div className="lg:px-0 px-2 py-4"><SapInfo/></div>
         
      </div>
    );
  };

  return <>{renderSap()}</>;
}
