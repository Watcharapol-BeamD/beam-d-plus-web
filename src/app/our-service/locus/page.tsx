import React from "react";
import LocusMainBanner from "./components/locus-main-banner";

export default function LocusPage() {
  const renderLocus = () => {
    return (
      <div className="xl:container mx-auto">
        <LocusMainBanner />{" "}
      </div>
    );
  };

  return <div className="flex-1">{renderLocus()}</div>;
}
