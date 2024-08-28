"use client";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SolutionSupPageTemplate from "../solution-sup-page-template/solution-sup-page-template";

type SolutionProps = {
  id: number;
  title: string;
  description: string;
};

type Info = {
  info_id: number;
  header: string;
  description: string;
};

type Solution = {
  id: number;
  title: string;
  info_list: Info[];
};

export default function ResourcePlanningSection() {
  const [solutionInfo, setSolutionInfo] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);

  const data: SolutionProps[] = [
    {
      id: 1,
      title: "Procure to Pay",
      description: `Maximize cost savings with support for your end-to-end procurement and logistics processes - from self-service requisitioning to invoicing and payments.
       Streamline and optimize the flow of materials Actively manage your end-to-end procure-to-pay processes Reduce unnecessary stock and improve spend performance Rely on a single, complete, and integrated solution`,
    },
    {
      id: 2,
      title: "Plan to Product",
      description: `Accelerate your entire manufacturing process - from planning and scheduling to monitoring and analysis - 
      while improving efficiency across your value chain. Be first to market with innovative, high-quality products Proactively identify and fix potential issues with real-time tracking and analysis Quickly respond to changes in demand with accelerated planning and execution Improve plant performance with real-time visibility into shop floor processes`,
    },
    {
      id: 3,
      title: "Order to Cash",
      description: `Support a wide range of customer-focused processes - from selling products and delivering services to aftermarket warranty claims, 
      service orders, and returns. Simplify and accelerate the entire order-to-cash cycle Deliver orders on time and improve customer satisfaction Streamline processes and reduce operational costs Boost productivity and increase sales and profit margins Benefit from profitable sales and interaction channels`,
    },
    {
      id: 4,
      title: "Core Finance",
      description: `Streamline and automate your financial operations - while ensuring regulatory compliance and gaining real-time insight into overall performance. Enhance your core financial capabilities and generate accurate reports in real time Capture processes from different applications – for a single version of financial truth Reduce cost of goods sold (COGS) and maximize profitability Ensure compliance with IFRSS, US-GAAP, 
      and local GAAP regulations Analyze customer behavior and sales to quickly identify and seize new opportunities`,
    },
  ];

  const solutionList: Solution[] = [
    {
      id: 1,
      title: "Procure to Pay",
      info_list: [
        {
          info_id: 1,
          header:
            "Quickly maximize cost savings with SAP ERP Procure to Pay processes",
          description: `Manage purchases with greater efficiency and productivity by using a centralized ERP Procure to Pay system. 
        Realize your purchasing power, enforce vendor choices, and optimize buying patterns. Negotiate quotes, contracts, 
        and conditions better and minimize stock and unused space. Increase visibility into purchase orders, contract management, 
        and invoice handling Reduce costs by lowering inventory levels and consolidating shipments Maintain high levels of supplier and customer 
        satisfaction Optimize basic business processes - from requisitioning to invoicing for simple procurement Improve processes for procurement, inbound,
         outbound, warehouse, and transportation management`,
        },
        {
          info_id: 2,
          header: "Sourcing and Contract Management",
          description: `Streamline sourcing and contract processes on a comprehensive platform which allows for continuous evolution.
           Identify savings opportunities and manage the contract lifecycle effectively Utilize SAP software to tie sourcing and contract processes tightly 
          together Develop a standardized contract-authoring process that meets your company’s needs`,
        },
      ],
    },
  ];

  const handleShowReadMore = (title: string) => {
    setSolutionInfo(title);
    setIsShow(true);
  };

  const handleClosePopup = () => {
    setIsShow(false);
  };

  const renderPlanCard = () => {
    return (
      <>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white md:h-100 h-auto md:w-92 w-auto rounded-2xl p-4 drop-shadow-lg border"
            >
              <p className="text-lg font-semibold">{item.title}</p>
              <p>{item.description}</p>
              <span
                className="font-semibold cursor-pointer hover:underline"
                onClick={() => handleShowReadMore(item.title)}
              >
                Read More...
              </span>
            </div>
          );
        })}
      </>
    );
  };

  const renderResourcePlanning = () => {
    return (
      <div className="space-y-4 pt-2">
        <p className="border-l-4 border-primary pl-1 text-base font-semibold">
          Solutions for Enterprise Resource Planning from SAP
        </p>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center content-center gap-4">
            {renderPlanCard()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderResourcePlanning()}
      {isShow && (
        <SolutionSupPageTemplate
          data={solutionList}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}
