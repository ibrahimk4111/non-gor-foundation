import React from "react";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-t from-green-200 to-green-50">
      <div className=" py-20 ">
        <div className=" container mx-auto md:grid grid-cols-12 md:gap-0 ">
          <div className=" md:col-span-5 p-4">
            <h1 className=" text-3xl font-bold mb-5 ">Newsletter</h1>
            <form action="" className=" flex justify-start items-center">
              <input
                type="email"
                className=" p-2 rounded-l-md w-full bg-slate-100 "
                placeholder="example@gmail.com"
              />
              <button className=" bg-sky-100 hover:bg-green-800 hover:text-white hover:ring-1 p-2 rounded-r-md transition-all duration-300 ease-in ">
                subscribe
              </button>
            </form>
          </div>
          <div className=" md:col-span-2 "></div>
          <div className=" md:col-span-5 md:mt-0 mt-10 ">
            <h1 className=" text-4xl text-center font-bold tracking-wider leading-10">Stay Connected With Us. May Allah Bless Us All. </h1>
          </div>
        </div>
      </div>
      <div className=" container mx-auto flex flex-col justify-center items-center py-10 gap-3 lg:text-base text-sm ">
        <p className=" text-center ">
          Copyright © 2024{" "}
          <span className=" text-green-700 ">Nongor Foundation </span>- all
          rights reserved. Technical support team{" "}
          <span className=" text-green-700">Latent Talent.</span>
        </p>
        <p>
          <span className=" text-green-700 ">Terms and conditions</span> |{" "}
          <span className=" text-green-700 "> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
