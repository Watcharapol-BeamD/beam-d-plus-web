import React from "react";
import Latitude247MainBanner from "./components/latitude247-main-banner/latitude247-main-banner";
import Latitude247Content from "./components/latitude247-content/latitude247-content";

export default function Latitude247Page() {
  const renderLatitude247 = () => {
    return (
      <div className="xl:container mx-auto">
        <Latitude247MainBanner />
        <div className="md:px-0 px-2">
          <Latitude247Content />
        </div>
      </div>
    );
  };

  return <>{renderLatitude247()}</>;
}
