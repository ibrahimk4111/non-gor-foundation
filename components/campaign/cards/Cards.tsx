import React, { ReactNode } from "react";
import Image from "next/image";
import {FiChevronsRight} from 'react-icons/fi'
import Link from "next/link";

interface propsType {
  image: any;
  header: string;
  text: string;
  logo: ReactNode;
  button: string;
}

const Cards = ({ image, header, text, logo, button }: propsType) => {
  return (
    <div className=" group" >
      <div className=" h-44 overflow-hidden flex justify-center items-center rounded-lg">
        <Image src={image} alt="campaign image" className=" w-full " />
      </div>

      <section className=" relative p-2 ">
        <div className=" flex justify-center items-center ">
          <span className=" absolute -top-5 rounded-full bg-green-700 p-2 text-white ">{logo}</span>
        </div>
        <h1 className=" text-center font-bold mt-10 mb-5 ">{header}</h1>
        <p className=" px-2 text-sm text-center ">
          {text} 
        </p>

        <Link href="#" className=" flex gap-2 items-center justify-center hover:underline w-full text-center mt-3 text-green-700 "> {button} <FiChevronsRight size={16} className=" group-hover:translate-x-3 transition-all duration-500 ease-in-out" /> </Link>
      </section>
    </div>
  );
};

export default Cards;
