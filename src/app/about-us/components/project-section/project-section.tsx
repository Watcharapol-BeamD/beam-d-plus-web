import React from "react";
import DropdownList from "../dropdown-list/DropdownList";
import ProjectList from "../product-list/product-list";

export default function ProjectSection() {
  const renderProject = () => {
    return (
      <div className="flex justify-around md:flex-row flex-col items-center w-full space-y-8 gap-2">
        <div>
          <ProjectList />
        </div>
        <div className="md:hidden block">
          we are dedicated to assist clients in optimizing their business
          operations through the strategic utilization of Information
          Technology. By understanding the unique needs and challenges of each
          client, we can tailor our services to deliver custom-made solutions
          that address specific requirements.
        </div>
        <div>
          <DropdownList />
        </div>
      </div>
    );
  };

  return <>{renderProject()}</>;
}
