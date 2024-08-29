import procure_img from "@/app/assets/our-service/sap/person-paying-using-nfc-technology.webp";
import order_to_cash_img from "@/app/assets/our-service/sap/high-angle-customer-paying-with-nfc-device.webp";
import { StaticImageData } from "next/image";

type Info = {
  info_id: number;
  header: string;
  description: string;
};

type Solution = {
  id: number;
  title: string;
  banner?: StaticImageData;
  info_list: Info[];
};

export const solutionInfo: Solution[] = [
  {
    id: 1,
    title: "Procure to Pay",
    banner: procure_img,
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
          together Develop a standardized contract-authoring process that meets your company's needs`,
      },
      {
        info_id: 3,
        header: "Operational Procurement",
        description: `Accelerate and automate procurement processes, help ensure compliance proactively, 
          and reduce costs. Gain insight into your spending performance and identify opportunities for savings Streamline spend analysis, 
          source-to-contract, and procure-to-pay processes Heighten visibility into supplier relationships, performance, and risk`,
      },
      {
        info_id: 4,
        header: "Inventory and Warehouse Management",
        description: `Automate the procurement process and integrate resource planning to reduce manual labor and increase efficiency. 
          Optimize the procurement process with intuitive user interfaces Manage catalogs to streamline purchase of goods and services 
          Streamline material flow and transparency across end-to-end outbound logistics`,
      },
      {
        info_id: 5,
        header: "Invoice and Payables Management",
        description: `Automate data extraction and streamline invoice management to eliminate data entry errors and duplications. 
        Manage invoice processing and accounts payable processes with integrated software Manage and integrate all accounts payable 
        data with your purchasing system Streamline invoice processing and payables options with SAP integrated software`,
      },
    ],
  },
  {
    id: 2,
    title: "Plan to Product",
    banner: procure_img,
    info_list: [
      {
        info_id: 1,
        header:
          "Drive superior performance with SAP ERP Plan to Product processes",
        description: `Streamline the entire manufacturing process - from planning and scheduling, to sequencing and execution, 
          to analysis – by leveraging our SAP ERP software that supports ERP Plan to Product processes. As a result, you can improve efficiencies, 
          lower costs, deliver higher-quality products, and boost margins. Deliver the right products to the right place, 
          at the right time Respond to demand volatility by accelerating the planning process and facilitating fast changes Identify 
          and fix problems using real-time tracking and analysis Reduce manufacturing costs, ensure high product quality and regulatory compliance`,
      },
      {
        info_id: 2,
        header: "Production Planning",
        description: `Integrate and optimize production plans and schedules to eliminate waste and meet delivery schedules and customer expectations. 
          Coordinate manufacturing operations at the enterprise and local levels Adjust plans and schedules with the enterprise and suppliers Improve the 
          management of material requirements, receipts, and material logistics`,
      },
      {
        info_id: 3,
        header: "Manufacturing Execution",
        description: `Deliver real-time updates on production key performance indicators (KPIs) for quick decisions and optimized usage of production assets. 
        Reduce work in process, and ensure more predictable and shorter cycle times Build and maintain complete as-built records and manage exceptions Address
         non-conformance with integrated quality and compliance controls Measure operational performance and quickly react with necessary adjustments`,
      },
      {
        info_id: 4,
        header: "Inventory and Warehouse Management",
        description: `Automate the procurement process and integrate resource planning to reduce manual labor and increase efficiency. 
        Manage the procurement of direct and indirect goods and services Optimize the procurement process to streamline purchase of goods 
        and services Establish transparency across end-to-end outbound logistics operations Make informed inventory management decisions based on 
        real-time and historical data`,
      },
      {
        info_id: 5,
        header: "Product and Project Management",
        description: `Plan, manage, and monitor product innovations and efficiency to reduce failure rates and cost overruns on projects. 
        Gain insight into project cost, time, scope, and quality performance Integrate a variety of simultaneous activities when implementing projects 
        Manage projects from initiation to closure, along with HR and financial performance Minimize project delays and prevent business interruptions`,
      },
      {
        info_id: 6,
        header: "Maintenance and Quality Management",
        description: `Enable closed-loop quality management to prevent deficiencies—and improve processes to drive quality control. 
        Support a total maintenance and quality-management approach Enable closed-loop quality planning, execution, improvement, 
        and collaboration Maintain operations and ensure optimal asset usage and uptime`,
      },
    ],
  },   {
    id: 3,
    title: "Order to Cash",
    banner: order_to_cash_img,
    info_list: [
      {
        info_id: 1,
        header:
          "Achieve perfect order management and sustainable success with SAP ERP Order-to-Cash",
        description: `Help your organization increase sales, profit margins, and customer satisfaction by automating the entire order-to-cash cycle, 
        delivering orders on time, accelerating sales processes, reducing operational costs, and boosting productivity with SAP ERP software that supports 
        ERP Order-to-Cash processes. Manage the complete sales order lifecycle, as well as all post-sales activities Cut time spent on administration, 
        checking orders, and resolving late shipment Drive sales by facilitating customer engagement across all sales channels`,
      },
      {
        info_id: 2,
        header: "Order and Contract Management",
        description: `Get accurate, real-time, multichannel information on pricing, products, customers,
         and contracts to help achieve your sales targets and delivery KPIs. Manage the order-to-cash process seamlessly across all channels and functions Track and manage 
         inquiries, quotations, order generation, and processing Streamline and automate contract and billing cycle management processes`,
      },
      {
        info_id: 3,
        header: "Inventory and Warehouse Management",
        description: `Improve operational efficiency by controlling goods movement and warehouse operations, from inbound activities to fulfillment. 
        Automate delivery processes and insights for increased customer satisfaction Optimize the procurement process with intuitive user interfaces 
        and catalogs Reduce manual labor and increase operational efficiency`,
      },
      {
        info_id: 4,
        header: "Accounts Receivable",
        description: `Streamline credit checks and customer accounts receivable management to ensure better results and optimize manual effort and cost. 
        Record and manage accounts receivables data for all customers Utilize SAP software which includes receivables management functionality Expend less 
        manual effort and lower cost associated with running receivables`,
      } 
  
    ],
  }, {
    id: 4,
    title: "Core Finance",
    banner: procure_img,
    info_list: [
      {
        info_id: 1,
        header:
          "Ensure financial compliance and growth with integrated Core Finance ERP processes enabled by SAP",
        description: `Further your company's success by managing spending, optimizing resources, complying with financial reporting requirements, 
        capturing growth opportunities and streamlining financial operations better than the competition - with integrated Core Finance ERP processes.
         Streamline and automate financial operations while complying with regulations Gain real-time insight into overall performance Integrate processes 
         from various applications for a single version of financial truth Reduce cost of goods sold (COGS) and maximize profitability Analyze customer behavior 
         and sales to quickly identify and seize new opportunities Operate in multiple geographies, industries, and languages - all consolidated in real time`,
      },
      {
        info_id: 2,
        header: "Accounting and Financial Close",
        description: `Run compliant, real-time financial accounting processes more quickly, more accurately, and more efficiently.
         Record all financial processes in a comprehensive general ledger Support multidimensional reporting and accounting standards 
         Accelerate financial accounting that is integrated with processes in real time Get legal and management consolidation from the same 
         application Reduce time, risk, and cost of financial reporting with real-time data analysis`,
      },
      {
        info_id: 3,
        header: "Management Accounting",
        description: `Ensure sound decision making with reports that provide detailed profitability and margin information, down to customer and product level.
         Improve forecasting and planning accuracy Integrate management accounting into all operations Allocate and analyze costs by project, 
         order, cost center, or business process Evaluate the profitability of markets, channels, products, and customer segments Proactively plan for and manage 
         global business performance, profit, and growth`,
      },
      {
        info_id: 4,
        header: "Travel Management",
        description: `Manage the entire lifecycle of every business trip - from pre-trip approval to online booking, expense reporting, and data warehousing. 
        Gain control over budgets, manage costs, and enforce compliance Manage travel plans using company-specified pricing and preferred suppliers Remove 
        the cumbersome processes of expense capture, accounting, and reimbursement`,
      } 
    ],
  },  
];
