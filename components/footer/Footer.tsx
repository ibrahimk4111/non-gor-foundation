import React, { useEffect } from "react";
import ImageComp from "../Gallery/imageComp/ImageComp";
import { Input } from "../ui/input";
import Image from "next/image";
import qrCodeScanner from '@/public/QR code.jpg'

const Footer = async () => {
  const liClassNames =
    " hover:text-green-500 hover:translate-x-3 transition-all duration-300 ease-in-out";

  return (
    <div className=" bg-green-950 text-white py-16 ">
      <div className=" container mx-auto grid md:grid-cols-4 gap-10  ">
        {/* gallery */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">Photo Showcase</h4>
          <ImageComp />
        </div>

        {/* elements */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">Elements</h4>

          <ul className=" space-y-3 ">
            <li className={liClassNames}>
              <a href="#">* Out Events</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Ask any Question</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Refund Policy</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Payment Options</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Privacy Policy</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">Quick Links</h4>

          <ul className=" space-y-3">
            <li className={liClassNames}>
              <a href="#">* Activities</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Volunteer</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Campaigns</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Contact</a>
            </li>
            <li className={liClassNames}>
              <a href="#">* Register</a>
            </li>
          </ul>
        </div>

        {/* newsletter */}
        <div>
          <h4 className=" mb-5 text-2xl font-semibold">Scan Here</h4>
          <Image src={qrCodeScanner} alt="..." />
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
