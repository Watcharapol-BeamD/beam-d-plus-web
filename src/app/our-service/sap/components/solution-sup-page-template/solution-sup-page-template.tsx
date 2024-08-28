import React from "react";
import procure_img from "@/app/assets/our-service/sap/person-paying-using-nfc-technology.jpg";
import CloseIcon from "@mui/icons-material/Close";

export default function SolutionSupPageTemplate({data,onClose}:any) {
  console.log(data)
  const banner = () => {
    return (
      <div
        className="w-full md:h-112 h-60 bg-cover bg-center bg-opacity-25"
        style={{ backgroundImage: `url(${procure_img.src})` }}
      >
        <div className="relative bg-gray-300 bg-opacity-50 h-full w-full flex justify-center items-center">
          <div className="absolute top-0 left-0 p-4">
            <CloseIcon onClick={onClose} fontSize="large" className="cursor-pointer text-white" />
          </div>

          <p className="text-white md:text-5xl text-3xl font-semibold">
            Procure to Pay
          </p>
          {/* <div className="absolute bg-white bg-opacity-70 md:h-60 h-auto md:w-160 w-auto md:bottom-36 md:left-10 md:mx-0 mx-2 p-4 rounded-3xl space-y-4">
            <p className="md:text-4xl text-3xl font-bold">
              SAP ERP and SAP B1 - Enterprise Resource Planning
            </p>
            <p className="text-lg ">
              Solutions for Enterprise Resource Planning from SAP
            </p>
          </div> */}
        </div>
      </div>
    );
  };

  const renderInformation = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-5/6 h-5/6 p-4 bg-white rounded-lg shadow-lg animate-slide-in">
          {banner()}
        </div>
      </div>
    );
  };

  return <>{renderInformation()}</>;
}
