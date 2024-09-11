"use client";
import React, { useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

type DataItem = {
  id: number;
  title: string;
  url:string
  description: string;
};

export default function DropdownList() {
  const [showAnswerMap, setShowAnswerMap] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const data: DataItem[] = [
    {
      id: 1,
      title: "SAP",
      url:"sap",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 2,
      title: "Xnapp Sales",
      url:"xnapp-sales",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 3,
      title: "Locus",
      url:"locus",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 4,
      title: "Magento",
      url:"magento",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 5,
      title: "SAP Business ONE",
      url:"sap-business-one",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 6,
      title: "Xlerate",
      url:"xlerate",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 7,
      title: "Latitude247",
      url:"latitude247",
      description:
      "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 8,
      title: "ChumChum",
      url:"chumchum",
      description:
      "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
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
                <p className= {`${showAnswerMap === item.id?" text-white ":"text-primary"} font-bold`}>{item.title}</p>
                <div>
                  {showAnswerMap === item.id ? (
                    <ExpandMoreIcon className="text-white"/>
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
                  <Link href={`/our-service/${item.url}`} className="text-right text-xs pt-2 underline text-primary">
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
