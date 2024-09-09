"use client";
import React, { useEffect, useState } from "react";

export default function PerformanceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [countStarted, setCountStarted] = useState(false);
  const [storeCount, setYearCount] = useState(0);
  const [provinceCount, setNumberOfProjectCount] = useState(0);
  const [areaCount, setNumberOfClientCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("performance-section");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (
        sectionTop < windowHeight * 0.75 &&
        sectionBottom > windowHeight * 0.25
      ) {
        setIsVisible(true);
        if (!countStarted) {
          setCountStarted(true);
          startCountAnimation();
        }
      } else {
        setIsVisible(false);
        setCountStarted(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [countStarted]); // Dependency on countStarted state

  useEffect(() => {
    // Simulate initial visibility for animation on component mount
    setIsVisible(true);

    startCountAnimation();

    // Clean up on component unmount
    return () => {
      setIsVisible(false); // Reset visibility state
    };
  }, []); // Empty dependency array to run this effect only once on mount

  const startCountAnimation = () => {
    const year = 20;
    const numberOfProject = 100;
    const numberOfClient = 50;

    const duration = 800; // Animation duration in milliseconds
    const fps = 60; // Frames per second

    const yearIncrement = Math.ceil(year / ((duration / 1000) * fps));
    const numberOfProjectIncrement = Math.ceil(
      numberOfProject / ((duration / 1000) * fps)
    );
    const numberOfClientIncrement = Math.ceil(
      numberOfClient / ((duration / 1000) * fps)
    );

    let currentYear = 0;
    let currentNumberOfProject = 0;
    let currentNumberOfClient = 0;

    const interval = setInterval(() => {
      currentYear += yearIncrement;
      currentNumberOfProject += numberOfProjectIncrement;
      currentNumberOfClient += numberOfClientIncrement;

      setYearCount(Math.min(currentYear, year));
      setNumberOfProjectCount(
        Math.min(currentNumberOfProject, numberOfProject)
      );
      setNumberOfClientCount(Math.min(currentNumberOfClient, numberOfClient));

      if (
        currentYear >= year &&
        currentNumberOfProject >= numberOfProject &&
        currentNumberOfClient >= numberOfClient
      ) {
        clearInterval(interval);
      }
    }, 1000 / fps);
  };

  const renderPerformance = () => {
    return (
      <div id="performance-section" className="w-full">
        {/* ----------Desktop---------- */}
        <div className="md:grid hidden grid-cols-3 place-items-center">
          <div className="text-center text-2xl">
            <p className="font-bold text-4xl">{storeCount.toLocaleString("en-US")} +</p>
            <p className="text-lg">Year In Business</p>
          </div>
          <div className="text-center text-2xl">
            <p  className="font-semibold text-4xl">
              {provinceCount.toLocaleString("en-US")} +
            </p>
            <p className="text-lg">Project Around The World</p>
          </div>
          <div className="text-center text-2xl">
            <p  className="font-semibold text-4xl">{areaCount.toLocaleString("en-US")} +</p>
            <p className="text-lg">Client</p>
          </div>
        </div>
        {/* ----------Mobile---------- */}
        <div className=" md:hidden block h-50 w-full ">
          <div className="flex flex-col items-center gap-10">
            <div className="text-center text-2xl order-1 w-full">
              <p className="font-bold text-3xl">
                {provinceCount.toLocaleString("en-US")} +
              </p>
              <p className="text-lg">Project Around The World</p>
            </div>
            <div className="flex justify-between w-full  order-2  ">
              <div className="text-center text-2xl flex-1">
                <p className="font-bold text-3xl">
                  {storeCount.toLocaleString("en-US")} +
                </p>
                <p className="text-lg">Year In Business</p>
              </div>
              <div className="text-center text-2xl flex-1">
                <p className="font-bold text-3xl">
                  {areaCount.toLocaleString("en-US")} +
                </p>
                <p className="text-lg">Client</p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          magni distinctio amet modi obcaecati harum beatae impedit voluptatem
          sit! Provident minima modi repellendus cum porro iure dicta temporibus
          quia debitis magnam id ratione voluptatem neque iste doloribus
          repudiandae, fuga quasi assumenda architecto explicabo dignissimos qui
          reiciendis ipsum. Quo, quae! A perferendis, deleniti corrupti labore
          ut error consequatur molestias quod quisquam dicta ad itaque est enim
          quo. Dignissimos eius esse fuga.
        </p> */}
      </div>
    );
  };

  return <div className="md:p-8 p-2">{renderPerformance()}</div>;
}
