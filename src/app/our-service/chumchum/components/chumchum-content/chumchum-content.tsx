import Image from "next/image";
import React from "react";

import image_1 from "@/app/assets/our-service/chumchum/DSCF0502.jpg";
import image_2 from "@/app/assets/our-service/chumchum/DSCF0970.jpg";

export default function ChumchumContent() {
  return (
    <div className="w-full">
      <div className="flex justify-center w-full  ">
        <div className="w-1/2 p-4">
          <p className="text-primary font-bold text-2xl">
            ADVANCED RETAIL AND WHOLESALE SOLUTIONS
          </p>
          <p>
            GT Next's Advanced Retail and Wholesale Solutions are designed to
            meet the evolving needs of modern retailers and wholesalers. Our
            solutions offer a unified platform for managing inventory, sales,
            and customer interactions across multiple channels. With features
            like real-time stock visibility, automated reordering, and
            personalized marketing, our platform helps businesses stay
            competitive in a fast-paced market. Whether you're a
            brick-and-mortar store, an e-commerce platform, or a hybrid model,
            our solutions provide the tools needed to enhance operational
            efficiency and drive growth.
          </p>
        </div>
        <div className="w-1/2 overflow-hidden ">
          <Image alt="img" role="img" src={image_1} className="hover:scale-110 duration-500"/>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 overflow-hidden">
          <Image alt="img" role="img" src={image_2} className="hover:scale-110 duration-500"/>
        </div>

        <div className="w-1/2 p-4">
          <p className="text-primary font-bold text-2xl">
            How We Benefit Our Clients
          </p>
          <p>
            Our Advanced Retail and Wholesale Solutions empower clients to
            streamline operations and improve customer experiences. Real-time
            inventory management ensures that stock levels are optimized,
            reducing the risk of overstocking or stockouts. Automated reordering
            processes save time and reduce the potential for human error, while
            personalized marketing features allow for targeted campaigns that
            resonate with customers. These efficiencies lead to increased sales,
            better customer retention, and higher profitability, helping
            businesses to scale effectively in a competitive landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
