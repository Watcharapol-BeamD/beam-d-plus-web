"use client";
import Button from "@/app/components/Button";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import React, { FormEvent, useRef, useState } from "react";

import { Loading3QuartersOutlined } from "@ant-design/icons";

export default function ContactUsForm() {
  const [isSended, setIsSended] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const form = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    if (!form.current) return false;

    const firstName = form.current["first_name"].value.trim();
    const lastName = form.current["last_name"].value.trim();
    const companyEmail = form.current["company_email"].value.trim();
    const userPhoneNumber = form.current["user_phone_number"].value.trim();
    const message = form.current["message"].value.trim();

    if (!firstName || !lastName || !companyEmail || !userPhoneNumber || !message) {
      setFormError("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const serviceId = "service_q9s9gjr";
    const templateId = "template_n97d793";
    const publicId = "xNN5z4-4CSl_OIbqs";

    setIsSended(true);

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicId,
        })
        .then(
          (response: EmailJSResponseStatus) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSended(false);
            setFormError(""); // Reset error message after success
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setIsSended(false);
          }
        );
    }
  };

  const renderContactForm = () => {
    return (
      <div id="contact-us" className="border py-6 shadow-md bg-white w-full">
        <p className="text-center text-3xl">LET'S CONNECT</p>

        {formError && (
          <p className="text-red-500 text-center mt-2">{formError}</p>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex justify-center flex-col items-center mt-6"
        >
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <p>First Name</p>
              <input
                type="text"
                name="first_name"
                className="py-2 outline-none border-b-2 border-black"
              />
            </div>

            <div>
              <p>Last Name</p>
              <input
                type="text"
                name="last_name"
                className="py-2 outline-none border-b-2 border-black"
              />
            </div>

            <div>
              <p>Company Name</p>
              <input
                type="text"
                name="company_name"
                className="py-2 outline-none border-b-2 border-black"
              />
            </div>

            <div>
              <p>Company Email</p>
              <input
                type="email"
                name="company_email"
                className="py-2 outline-none border-b-2 border-black"
              />
            </div>

            <div className="grid grid-col-1 gap-10">
              <div>
                <p>Phone Number</p>
                <input
                  type="text"
                  name="user_phone_number"
                  className="py-2 outline-none border-b-2 border-black"
                />
              </div>

              <div>
                <p>Leave A Message</p>
                <input
                  type="text"
                  name="message"
                  className="py-2 outline-none border-b-2 border-black"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              disabled={isSended}
              type="submit"
              className="bg-primary py-3 px-6 rounded-full text-white text-lg hover:scale-105 duration-300 flex items-center"
            >
              {isSended && (
                <div className="animate-spin mr-3">
                  <Loading3QuartersOutlined />
                </div>
              )}
              SENT MESSAGE
            </button>
          </div>
        </form>
      </div>
    );
  };

  return <>{renderContactForm()}</>;
}
