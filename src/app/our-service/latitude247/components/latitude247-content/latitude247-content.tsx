import React from "react";
import image_1 from "@/app/assets/our-service/latitude247/loading-300x271.png";
import image_2 from "@/app/assets/our-service/latitude247/plane1-300x259.png";
import Image from "next/image";

export default function Latitude247Content() {
  const renderLatitude247Content = () => {
    return (
      <div className="py-4 lg:px-20 md:px-14 sm:px-10">
        <div className="flex w-full md:flex-row flex-col-reverse space-y-4">
          <div className="md:w-1/2 w-full space-y-4">
            <p className="md:text-2xl text-xl font-bold">AIRPORT GSE SOFTWARE</p>
            <p>
              MOBILE ASSET OPTIMIZATION SOFTWARE Turning aircraft around on time
              is a complex operation requiring the co-ordination of multiple
              parties on the ground they need to remain on track and briefed on
              the current status of jobs and equipment at all times. Accurate,
              timely communication and automation of what were previously manual
              processes give airports and airlines the confidence that their
              ground service equipment and staff are being managed as
              efficiently as possible to minimize operating costs and avoid
              aircraft delays.
            </p>
          </div>
          <div className="md:w-1/2 flex w-full justify-center items-center">
            <Image alt="" src={image_1} />
          </div>
        </div>

        <div className="flex md:flex-row flex-col space-y-4">
          <div className="md:w-1/2 flex w-full justify-center items-center">
            <Image alt="" src={image_2} />
          </div>
          <div className="md:w-1/2 w-full space-y-4">
            <p  className="md:text-2xl text-xl font-bold">
              ENSURE OPTIMAL USE OF MOBILE GROUND ASSETS TO SIGNIFICANTLY REDUCE
              AIRCRAFT DELAYS
            </p>
            <p>
              Latitude 247s software automatically updates mobile teams with any
              changes to bay, aircraft times or other essential information.
              With real time information being sent directly to mobile field
              devices and the enablement of two-way communication with drivers,
              mobile assets will be at the required location precisely on time.
            </p>

            <p  className="md:text-2xl text-xl font-bold">KNOW THE STATUS AND LOCATION OF MOBILE ASSETS AT ALL TIMES</p>
            <p>
              Our solution ensures complete visibility of jobs and mobile assets
              at all times, with the capability to assign and dispatch jobs in
              real-time. A detailed equipment history provides a full sequence
              of events in relation to your mobile assets.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col pt-6">
          <div className="space-y-2">
            <p  className="md:text-xl text-lg font-bold">LATITUDE 247 EXPERIENCE</p>
            <p>
              With proven expertise in the aviation industry we have gained a
              reputation for outstanding products, delivery and support. We are
              recognized for our industry leading product set that provides
              airlines with the ability to differentiate themselves and create
              operating efficiencies to improve profitability.
            </p>
          </div>

          <div className="space-y-2">
            <p className="md:text-xl text-lg font-bold">LATITUDE 247 SUPPORT</p>
            <p>
              The Latitude 247 team are located in Dubai, India and New Zealand
              enabling us to provide skilled support to our customers around the
              world, all backed by a 24/7 call centre. Our team of industry
              experts are experienced in Cloud Infrastructure, Project
              Management and Service Delivery, providing the skill set needed to
              develop innovative industry solutions.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderLatitude247Content()}</>;
}
