import Button from "@/app/components/Button";
import React from "react";

export default function ContactUsForm() {
  const renderContactForm = () => {
    return (
      <div className="border py-6 shadow-lg">
        <p className="text-center text-3xl">LET'S CONNECT</p>

        <div className="flex justify-center flex-col items-center mt-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <p className=" ">First Name</p>
              <input className="py-2 outline-none border-b-2 border-black " />
            </div>
            <div>
              <p className=" ">Last Name</p>
              <input className="py-2 outline-none border-b-2 border-black " />
            </div>
            <div>
              <p className=" ">Company Name</p>
              <input className="py-2 outline-none border-b-2 border-black " />
            </div>
            <div>
              <p className=" ">Company Email</p>
              <input className="py-2 outline-none border-b-2 border-black " />
            </div>
            <div className="grid grid-col-1 gap-10">
              <div>
                <p className=" ">Phone Number</p>
                <input className="py-2 outline-none border-b-2 border-black " />
              </div>
              <div>
                <p className=" ">Leave A Message</p>
                <input className="py-2 outline-none border-b-2 border-black " />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button title={"SENT MESSAGE"} />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderContactForm()}</>;
}
