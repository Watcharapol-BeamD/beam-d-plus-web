import Image from "next/image";
import React from "react";
import Xnapp_img from "@/app/assets/our-service/xnapp/digital-increasing-bar-graph-with-businessman-hand-overlay.jpg";

export default function XnappContentSection() {
  const renderVision = () => {
    return (
      <>
        <p className="text-center font-bold text-lg">
          A smarter way to sell...
        </p>
        <p className="text-center text-lg">
          Xnapp Sales is an extensive solution utilised by major manufacturers
          to monitor and hone every stage of the Demand Chain Execution process;
          from Demand Fulfillment to Delivery Optimisation to Sales Influencing
          and Management.
        </p>
      </>
    );
  };

  const renderXnappContentSection = () => {
    return (
      <div className="space-y-4">
        {renderVision()}
        <p className="text-center font-bold text-lg">SALES</p>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">XnappSales v/s OOS</p>
            <p className="text-base">
              XnappSales utilizes historical data to make suggestions about when
              and how much to deliver. It improves product shelf availability by
              delivering the right product to the right shelf. 1% drop in Out Of
              Stock scenarios results in a sales growth of about 3%. Facilitate
              systematic processes ensuring that products are never out of stock
              by replenishing demand at outlet shelves to distributor purchase.
            </p>
          </div>{" "}
          <div className="md:w-1/2 w-full">
            <Image alt="" src={Xnapp_img} className="" />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderXnappContentSection()}</>;
}
