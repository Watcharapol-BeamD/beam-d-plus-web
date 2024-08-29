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
      <div className="md:space-y-12 space-y-6">
        {renderVision()}
        <p className="text-center font-bold text-lg">SALES</p>
        <div className="flex md:flex-row flex-col gap-4">
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
            <Image
              alt=""
              src={Xnapp_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row-reverse flex-col gap-4">
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
            <Image
              alt=""
              src={still_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              XnappSales for your Data
            </p>
            <p className="text-base">
              Know what your customers need, how much of it they need and when
              they need it. XnappSales facilitates better decision making to
              constantly evaluate and optimize processes in real time.
              Compliance on field, sales objectives of visits, time spent,
              promotions delivered, targets achieved and KPI integration ensures
              consistent and process driven sales.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={data_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row-reverse flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              XnappSales for the Journey
            </p>
            <p className="text-base">
              Generating daily schedules for each salesman, with optimized
              routes and suggestions to increase sales. Tag locations where the
              product can be sold, while identifying sales patterns and
              triggering visits to replenish stocks.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={route_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <p className="text-center font-bold text-lg uppercase">Salesforce</p>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row-reverse flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              XnappSales & your SalesForce
            </p>
            <p className="text-base">
              Ensuring journey complaince by tracking and monitoring salesmen
              details in real time. Boost employee loyalty by rewarding them for
              achieved targets and increased productivity.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={monitor_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}

        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">XnappSales & KPIs</p>
            <p>
              Color coded KPI statuses enable you to measure your performance
              with respect to targets and maximize penetration. Indicators for
              Journey
            </p>
            <p>Compliance: </p>
            <ul className="list-disc list-inside">
              <li>Serviced and Unserviced locations</li>
              <li>Unmatched Locations</li>
              <li>Out-of-Sequence Visits</li>
              <li>No Sale time alerts</li>
              <li>Low Service time alerts</li>
              <li>High Service time alerts</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={color_coded_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <p className="text-center font-bold text-lg">PROMOTIONS</p>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              XnappSales & Promotions
            </p>
            <p>
              XnappSales emphasizes promotions and helps create brand awareness
              seamlessly. It tags promotional offers to the right customers and
              collects information on its effectiveness. Pick up and respond to
              competitor activity and promotion performance with real time field
              information. XnappSales captures judgemental feedback from outlets
              by surveying:
            </p>
            <ul className="list-disc list-inside">
              <li>Brand</li>
              <li>Promotion</li>
              <li>Launch</li>
              <li>Merchandise</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={promo_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row-reverse flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              XnappSales to Stay Ahead…
            </p>
            <p className="text-base">
              Plot your market with custom visual characteristics using advanced
              geo-coding techniques. Create territories and optimize sales
              routes for distributors ensuring maximum efficiency. Remotely
              monitor and control freezer and chiller temperatures to ensure
              desired state and optimal functionality.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={race_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <p className="text-center font-bold text-lg Collaboration">ROI</p>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">ROI with XnappSales</p>
            <p className="text-base">How it works</p>
            <ul className="list-disc list-inside">
              <li>Prompts channel partners according to priority of claims</li>
              <li>
                Automatic claim generation for key processes like promotions &
                price discounts
              </li>
              <li>
                Manual claim generation for expenses like on field expenses &
                logistics
              </li>
              <li>Integration with ERP systems for credit note generation</li>
            </ul>
            <p className="text-base">
              Access payment history for distributors and aging of receivables
              from the customer in real time. Enable your salesforce to make
              cash or cheque collections from the retailers. Improve collection
              performance and adherence to credit control rules
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={roi_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <p className="text-center font-bold text-lg uppercase">Collaboration</p>
        {/* ----------------------------------------------- */}
        <div className="flex md:flex-row-reverse flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <p className="uppercase font-bold text-lg">
              Collaboration for Secondary Sales
            </p>
            <p className="text-base">How it works</p>
            <p className="text-base">
              Your single IT solution for pre-sales, van sales, delivery and
              merchandizing. Try before you buy without any IT infrastructure
              costs. Retain remove and release capital by switching to a
              complete OPEX model allowing you to pay as you go for the service.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              alt=""
              src={collaboration_img}
              className="sm:h-112 h-60 w-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderXnappContentSection()}</>;
}
