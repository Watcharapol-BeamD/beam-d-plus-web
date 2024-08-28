"use client";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SolutionSupPageTemplate from "../solution-sup-page-template/solution-sup-page-template";
import procure_img from "@/app/assets/our-service/sap/person-paying-using-nfc-technology.jpg";
import { StaticImageData } from "next/image";
import { solutionInfo } from "./solutionInfo-db";
import { solutionList } from "./solutionList-db";

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
  banner?: StaticImageData;
  info_list: Info[];
};

export default function ResourcePlanningSection() {
  const [solutionData, setSolutionData] = useState<Solution>({
    id: 0,
    title: "",
    info_list: [],
  });

  const [isShow, setIsShow] = useState<boolean>(false);

 
  useEffect(() => {
    //prevent scroll background when show popup
    if (isShow) {
      document.body.classList.add("fixed", "inset-0");
    } else {
      document.body.classList.remove("fixed", "inset-0");
    }
    return () => {
      document.body.classList.remove("fixed", "inset-0");
    };
  }, [isShow]);


  const handleShowReadMore = (title: string) => {
    const currentInfo = solutionInfo.find((item:Solution) => item.title === title);
    if (currentInfo) {
      setSolutionData(currentInfo);
      setIsShow(true);
    }
  };

  const handleClosePopup = () => {
    setIsShow(false);
  };

  const renderPlanCard = () => {
    return (
      <>
        {solutionList.map((item) => {
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
          data={solutionData}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}
