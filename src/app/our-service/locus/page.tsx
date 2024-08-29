import React from "react";
import LocusMainBanner from "./components/locus-main-banner/locus-main-banner";
import BuiltForEnterpriseSection from "./components/built-for-enterprise-section/built-for-enterprise-section";

export default function LocusPage() {
  const renderLocus = () => {
    return (
      <div className="xl:container mx-auto">
        <LocusMainBanner />
        <div className="px-2 py-4">
 
          <BuiltForEnterpriseSection />
        </div>
      </div>
    );
  };

  return <div className="flex-1">{renderLocus()}</div>;
}
