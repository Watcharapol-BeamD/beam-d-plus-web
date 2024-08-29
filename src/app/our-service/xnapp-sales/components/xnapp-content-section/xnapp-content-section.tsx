import Image from "next/image";
import React from "react";
import Xnapp_img from "@/app/assets/our-service/xnapp/digital-increasing-bar-graph-with-businessman-hand-overlay.jpg";
import still_img from "@/app/assets/our-service/xnapp/still-life-fashion-designer-s-office.jpg";
import data_img from "@/app/assets/our-service/xnapp/data.jpg";
import route_img from "@/app/assets/our-service/xnapp/route.jpg";
import monitor_img from "@/app/assets/our-service/xnapp/monitor.jpg";
import color_coded_img from "@/app/assets/our-service/xnapp/color-coded-reports.jpg";
import promo_img from "@/app/assets/our-service/xnapp/promo.jpg";
import race_img from "@/app/assets/our-service/xnapp/race.jpg";
import roi_img from "@/app/assets/our-service/xnapp/roi.jpg";
import collaboration_img from "@/app/assets/our-service/xnapp/collaboration.jpg";


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
          </div>
          <div className="md:w-1/2 w-full">
            <Image alt="" src={Xnapp_img} className="" />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row-reverse flex-col-reverse">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              Brand + Variant + Size
            </p>
            <p className="text-base">
              XnappSales ensures that the right brand, the right variant and the
              right size of a product is available on the right shelf.
              XnappSales uses research proven methodologies to drive penetration
              by ensuring the Right Brand + Right Variant + Right Size is
              available in the Right Places.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image alt="" src={still_img} className="" />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row-reverse flex-col-reverse">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              Brand + Variant + Size
            </p>
            <p className="text-base">
              XnappSales ensures that the right brand, the right variant and the
              right size of a product is available on the right shelf.
              XnappSales uses research proven methodologies to drive penetration
              by ensuring the Right Brand + Right Variant + Right Size is
              available in the Right Places.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image alt="" src={still_img} className="" />
          </div>
        </div>
        {/* ----------------------------------------------- */}
      </div>
    );
  };

  return <>{renderXnappContentSection()}</>;
}
