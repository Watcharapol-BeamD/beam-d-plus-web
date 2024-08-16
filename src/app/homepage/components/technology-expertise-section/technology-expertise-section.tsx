import Image from "next/image";
import React from "react";
import vscode_img from "@/app/assets/technology/Visual_Studio_Code_1.35_icon.svg.png";

export default function TechnologyExpertiseSection() {
  const renderTechnologyExpertiseSection = () => {
    return (
      <div className="bg-primary min-h-96 px-4 py-10">
        <div className="text-white mb-10  ">
          <p className="text-center text-3xl">Technology Expertise</p>
          <p className="text-center text-base pt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quam hic culpa quasi ea necessitatibus iure, nemo est? Enim aliquid
            veritatis molestias praesentium dicta magnam voluptatem maxime in!
            Itaque recusandae sint ex voluptate qui eveniet quasi consequuntur
            odio pariatur rerum.
          </p>
        </div>
        <div className="flex justify-around uppercase text-center text-2xl font-bold">
          <div className="h-80 w-84 bg-white rounded-3xl p-4">
            <p>Frontend</p>
            <div className="flex flex-col justify-around gap-4 pt-10">
           
              <div className="flex justify-around">
                <Image alt="tech-img" src={vscode_img} height={50} />
                <Image alt="tech-img" src={vscode_img} height={50} />
              </div>
              <div className="flex justify-around">
                <Image alt="tech-img" src={vscode_img} height={50} />
                <Image alt="tech-img" src={vscode_img} height={50} />
                <Image alt="tech-img" src={vscode_img} height={50} />
              </div>
            </div>
          </div>
          <div className="h-80 w-84 bg-white rounded-3xl p-4">
            <p>Backend</p>
          </div>
          <div className="h-80 w-86 bg-white rounded-3xl p-4">
            <p>Tools</p>
          </div>
        </div>
      </div>
    );
  };

  return <>{renderTechnologyExpertiseSection()}</>;
}
