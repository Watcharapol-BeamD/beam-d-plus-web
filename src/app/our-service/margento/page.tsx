import React from "react";
import MargentoMainBanner from "./components/margento-main-banner/margento-main-banner";

export default function LocusPage() {
  const renderLocus = () => {
    return (
      <div className="xl:container mx-auto">
        <MargentoMainBanner />{" "}
      </div>
    );
  };

  return <div className="flex-1">{renderLocus()}</div>;
}
