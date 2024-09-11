import React from "react";
import Sapb1MainBanner from "./components/sapb1-main-banner/sapb1-main-banner";

export default function Sapb1Page() {
  const renderSapb1 = () => {
    return (
      <div className="xl:container mx-auto">
        <Sapb1MainBanner />
        <div className="py-4 md:px-20 px-2">       <p>
          Spend more time actively growing your company - with solution of
          mobility technology and SME software designed and priced for small and
          midsize enterprises. In the cloud, our scalable solutions work with
          your existing infrastructure to help you run more efficiently or you
          can choose to run it on the Cloud to minimize you hardware and
          software maintenance cost. Choose from affordable business management
          software, optimized ERP solutions, and powerful business analytics.
          It's time to run simple.
        </p>
        <ul className="list-disc list-inside">
          <li>Operation Simplification and Cost Efficiencies</li>
          <li>Increasing Productivity</li>
          <li>Business Process Efficiencies</li>
          <li>Platforms for Business Growth</li>
        </ul>
        <p>
        Like most growing SME business, you're probably looking deepen customer engagement, 
        drive-on field performance, and optimize business efficiency. Reduce complexity barriers 
        by integrating and streamlining key industry processes - including financials, sales, inventory, 
        and analytics - and build a simpler path to growth.
        We recommend taking your business to the next level with Sales Force Automation integration with our
        ERP solutions for small and midsize enterprise to grow your business and run simply in a complex world.
        </p></div>
 
      </div>
    );
  };

  return <>{renderSapb1()}</>;
}
