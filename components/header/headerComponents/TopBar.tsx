'use client'

import { FaYoutube } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import EngBnToggle from "./EngBnToggle";
import Link from "next/link";
import { ExternalLink, ShareIcon } from "lucide-react";

const TopBar: React.FC = () => {

  let size = 15;
  return (
    <section className=" pt-2 bg-white ">
      <div className=" flex justify-end items-center gap-x-10 container mx-auto ">
        {/* <Link href="https://facebook.com" target="_blank">
          <FaFacebookSquare size={size} fill="blue " />
        </Link>

        <Link href="https://youtube.com" target="_blank">
          <FaYoutube size={size} fill="red " />
        </Link>

        <Link href="https://gmail.com" target="_blank">
          <AiFillMail size={size} fill=" green " />
        </Link>

        <Link href="https://facebook.com" target="_blank">
          <IoCall size={size} fill=" green " />
        </Link>

        <EngBnToggle /> */}
        <div className=" flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <AiFillMail size={size} />
          <span className=" text-sm ">nongorfoundation@gmail.com</span>
        </div>
        <div className=" flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <IoCall size={size} />
          <span className=" text-sm ">01700-000 000</span>
        </div>
        <div className=" flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <ExternalLink size={size} />
          <span className=" text-sm ">Share</span>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
