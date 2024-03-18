import React from "react";
import DonateCards from "./donateCards/DonateCards";

const Donate = () => {
  return (
    <div className=" py-10 bg-slate-100">
      <div className=" max-w-[1280px] mx-auto">
        <h1 className=" text-2xl text-center mb-10">
          Together Let’s make a change
        </h1>
        <div className=" grid lg:grid-cols-3 gap-5 ">
          <DonateCards />
          <DonateCards />
          <DonateCards />
          <DonateCards />
          <DonateCards />
          <DonateCards />
        </div>
        <div className=" flex justify-center items-center py-5 mt-5">
          <button
            type="submit"
            className="py-3 px-32 text-white bg-green-700 rounded-lg "
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
