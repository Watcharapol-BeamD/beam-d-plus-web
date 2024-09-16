"use client";
import React, { useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

type DataItem = {
  id: number;
  title: string;
  url: string;
  description: string;
};

export default function DropdownList() {
  const [showAnswerMap, setShowAnswerMap] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const data: DataItem[] = [
    {
      id: 1,
      title: "SAP",
      url: "sap",
      description:
        `Extend and personalized SAP applications or integrate and connect entire landscapes with SAP BTP.
         Empower your business users to connect processes and experiences,
         decide confidently with integrity, and perpetuate continued business innovation.` ,
    },
    {
      id: 2,
      title: "Xnapp Sales",
      url: "xnapp-sales",
      description:`XnappSales works out what your customers need, how much of it they need and when they need it, 
      so the right pack of the right category can always be found on the shelf.` 
    },
    {
      id: 3,
      title: "Locus",
      url: "locus",
      description:`Locus collaborates closely with NTT DATA R&D experts continuously to analyze real-world case studies and 
      other sources to identify the most significant technology and societal trends that we believe will drive change over 
      the next three to ten years. ` 
    },
    {
      id: 4,
      title: "Magento",
      url: "magento",
      description:`The experience makes all the difference. Grow with Adobe Commerce.Adobe Commerce is a flexible 
      and scalable commerce platform that lets you create uniquely personalized B2B and B2C experiences, 
      no matter how many brands you have.` 
    },
    {
      id: 5,
      title: "SAP Business ONE",
      url: "sap-business-one",
      description:`Gain greater control over your business or subsidiary
With the SAP Business One solution, you can drive profitable business growth with streamlined processes,
 greater insight, and strategic decision-making based on real-time information.` 
    },
    {
      id: 6,
      title: "Xlerate",
      url: "xlerate",
      description:`XLERATE incorporates RDM based Rig-management, laser previsualization, and laser content management, 
      into one piece of software! Allowing designers to manage their rig, while customizing their lasers all in one place. 
      See what this free download can do for you.` 
    },
    {
      id: 7,
      title: "Latitude247",
      url: "latitude247",
      description:`We are recognized for our industry leading product set that provides airlines with the ability to
       differentiate themselves and create operating efficiencies to improve profitability.` 
    },
    {
      id: 8,
      title: "CC+ eCommerce",
      url: "chumchum",
      description:`GT Next's Advanced Retail and Wholesale Solutions are designed to meet 
      the evolving needs of modern retailers and wholesalers. Our solutions offer a unified platform 
      for managing inventory, sales, and customer interactions across multiple channels.` 
    },
 
  ];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assume mobile if width is less than 768px
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener on unmount
    };
  }, []);

  const handleToggleDropdown = (id: number) => {
    if (isMobile) {
      setShowAnswerMap(showAnswerMap === id ? null : id); // Toggle on click for mobile
    }
  };

  const handleMouseEnter = (id: number) => {
    if (!isMobile) {
      setShowAnswerMap(id); // Open on hover for desktop
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowAnswerMap(null); // Close on hover out for desktop
    }
  };

  const renderDropdown = () => {
    return (
      <div className="space-y-1 relative z-20">
        {data.map((item) => (
          <div
            className="cursor-pointer"
            key={item.id}
            onClick={() => handleToggleDropdown(item.id)}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`${
                showAnswerMap === item.id
                  ? "bg-primary rounded-t-xl"
                  : "bg-white"
              } w-full p-2 border-b flex justify-between items-center`}
            >
              <p
                className={`${
                  showAnswerMap === item.id ? " text-white " : "text-primary"
                } font-bold`}
              >
                {item.title}
              </p>
              <div>
                {showAnswerMap === item.id ? (
                  <ExpandMoreIcon className="text-white" />
                ) : (
                  <ChevronRightIcon />
                )}
              </div>
            </div>

            {showAnswerMap === item.id && (
              <div
                className={`rounded-b-xl bg-white border border-black p-2 pt-4 pb-2 pl-4 shadow absolute`}
              >
                <p>{item.description}</p>
                <Link
                  href={`/our-service/${item.url}`}
                  className="text-right text-xs pt-2 underline text-primary"
                >
                  Read More
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return <div className="sm:w-86 w-72">{renderDropdown()}</div>;
}
