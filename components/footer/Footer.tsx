import React from "react";
import { Input } from "../ui/input";
import ImageComp from "../Gallery/imageComp/ImageComp";

const Footer = () => {

  const liClassNames = " hover:text-green-500 hover:translate-x-3 transition-all duration-300 ease-in-out"

  return (
    <div className=" bg-green-950 text-white py-16 ">
      <div className=" container mx-auto grid md:grid-cols-4 gap-10  ">

        {/* gallery */}
        <div>
          <h1 className=" mb-5 text-2xl font-bold">Gallery</h1>
          <ImageComp />
        </div>
        
        {/* elements */}
        <div>
          <h1 className=" mb-5 text-2xl font-bold">Elements</h1>
          
          <ul className=" space-y-3 ">
            <li className={liClassNames}><a href="#">* Out Events</a></li>
            <li className={liClassNames}><a href="#">* Ask any Question</a></li>
            <li className={liClassNames}><a href="#">* Refund Policy</a></li>
            <li className={liClassNames}><a href="#">* Payment Options</a></li>
            <li className={liClassNames}><a href="#">* Privacy Policy</a></li>
            <li className={liClassNames}><a href="#">* Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className=" mb-5 text-2xl font-bold">Quick Links</h1>
          
          <ul className=" space-y-3">
            <li className={liClassNames}><a href="#">* Activities</a></li>
            <li className={liClassNames}><a href="#">* Volunteer</a></li>
            <li className={liClassNames}><a href="#">* Campaigns</a></li>
            <li className={liClassNames}><a href="#">* Contact</a></li>
            <li className={liClassNames}><a href="#">* Register</a></li>
          </ul>
        </div>
        
        {/* newsletter */}
        <div>
          <h1 className=" text-2xl font-bold">Newsletter</h1>
          <p className=" my-5">Lorem ipsum dolor sit amet.</p>
          <form action="" className=" flex flex-col justify-start items-start gap-5">
            <input
              type="email"
              className=" p-2 w-full rounded-md bg-slate-100 "
              placeholder="example@gmail.com"
            />
            <button className=" bg-green-100 text-black rounded-md hover:bg-green-800 hover:text-white hover:ring-1 p-2 transition-all duration-500 ease-in-out ">
              subscribe
            </button>
          </form>
        </div>
      </div>

      {/* copyright  */}
      <p className=" text-center mt-10 ">
        Copyright © 2024 |{" "}
        <a href="#" className=" text-green-500">
          Nongor Foundation
        </a>
      </p>
    </div>
  );
};

export default Footer;
