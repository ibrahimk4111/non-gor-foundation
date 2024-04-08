import React from "react";
import DonateCards from "./donateCards/DonateCards";

const Donate = () => {
  return (
    <div className=" py-10 bg-slate-100">
      <div className=" container mx-auto">
        <h1 className=" lg:text-2xl text-xl text-center mb-10">
          Activites
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          <DonateCards />
          <DonateCards />
          <DonateCards />
          <DonateCards />
          <DonateCards />
          <DonateCards />
        </div>
      </div>
    </div>
  );
};

export default Donate;
