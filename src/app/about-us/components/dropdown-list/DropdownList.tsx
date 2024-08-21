"use client";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type DataItem = {
  id: number;
  title: string;
  description: string;
};

export default function DropdownList() {
  const [showAnswerMap, setShowAnswerMap] = useState<number | null>(null);

  const data: DataItem[] = [
    {
      id: 1,
      title: "SAP",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 2,
      title: "Xnapp Sales",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 3,
      title: "Locus",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 4,
      title: "Magento",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 5,
      title: "SAP Business ONE",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 6,
      title: "Xlerate",
      description:
        "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 7,
      title: "Latitude247",
      description:
      "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
    {
      id: 8,
      title: "Chum Chum",
      description:
      "Leverage role-based access to critical data, applications, and analytical tools – and streamline your processes across procurement, manufacturing, service, sales, finance, and HR. ",
    },
  ];
  const handleMouseEnter = (id: number) => {
    setShowAnswerMap(id);
  };

  const handleMouseLeave = () => {
    setShowAnswerMap(null);
  };

  const renderDropdown = () => {
    return (
     
        <div className="space-y-1 relative">
          {data.map((item) => (
            <div
              className="cursor-pointer"
              key={item.id}
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
                <p>{item.title}</p>
                <div>
                  {showAnswerMap === item.id ? (
                    <ExpandMoreIcon />
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
                  <p className="text-right text-xs pt-2 underline text-primary">
                    Read More
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
    );
  };

  return <div className="sm:w-86 w-72">{renderDropdown()}</div>;
}
