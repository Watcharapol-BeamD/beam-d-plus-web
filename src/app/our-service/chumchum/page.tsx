import React from "react";
import ChumChumMainBanner from "./components/chumchum-main-banner/chumchum-main-banner";
import ChumchumContent from "./components/chumchum-content/chumchum-content";

//  import ChumChumMainBanner from './components/chumchum-main-banner/chumchum-main-banner.tsx'

export default function ChumChumPage() {
  const renderChumchum = () => {
    return (
      <div className="xl:container mx-auto">
        <ChumChumMainBanner />
        <div className="mb-4">
          <ChumchumContent />
        </div>
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderChumchum()}</div>;
}
