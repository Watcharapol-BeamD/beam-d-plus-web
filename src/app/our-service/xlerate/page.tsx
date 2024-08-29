import React from "react";
import XlerateMainBanner from "./components/xlerate-main-banner/xlerate-main-banner";

export default function XleratePage() {
  const renderXlerate = () => {

    return <div>
        <XlerateMainBanner/>
    </div> 
  };

  return <div className="flex-1">{renderXlerate()}</div>;
}
