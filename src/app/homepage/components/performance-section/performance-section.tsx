import React from "react";

export default function PerformanceSection() {
  const renderPerformance = () => {
    return (
      <div className="w-full bg-red-400">
        {/* ----------Desktop---------- */}
        <div className="md:grid hidden grid-cols-3 place-items-center pb-10">
          <div className="text-center text-2xl">
            <p className="font-bold">20+</p>{" "}
            <p className="text-lg">Year In Business</p>
          </div>
          <div className="text-center text-2xl">
            <p className="font-bold">150 </p>
            <p className="text-lg">Project Around The World</p>
          </div>
          <div className="text-center text-2xl">
            <p>150</p>
            <p className="text-lg">Client</p>
          </div>
        </div>
        {/* ----------Mobile---------- */}
        <div className=" md:hidden block h-60 w-full ">
          <div className="flex flex-col items-center gap-10">
            <div className="text-center text-2xl order-1 w-full">
              <p className="font-bold">150</p>
              <p className="text-lg">Project Around The World</p>
            </div>
            <div className="flex justify-between w-full  order-2  ">
              <div className="text-center text-2xl flex-1">
                <p className="font-bold">20+</p>
                <p className="text-lg">Year In Business</p>
              </div>
              <div className="text-center text-2xl flex-1">
                <p className="font-bold">150</p>
                <p className="text-lg">Client</p>
              </div>
            </div>
          </div>
        </div> 
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          magni distinctio amet modi obcaecati harum beatae impedit voluptatem
          sit! Provident minima modi repellendus cum porro iure dicta temporibus
          quia debitis magnam id ratione voluptatem neque iste doloribus
          repudiandae, fuga quasi assumenda architecto explicabo dignissimos qui
          reiciendis ipsum. Quo, quae! A perferendis, deleniti corrupti labore
          ut error consequatur molestias quod quisquam dicta ad itaque est enim
          quo. Dignissimos eius esse fuga.
        </p>
      </div>
    );
  };

  return <div className="md:p-8 p-2">{renderPerformance()}</div>;
}
