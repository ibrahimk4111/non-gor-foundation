import React, { ReactNode } from "react";
import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";
import Link from "next/link";
import { cardDatas } from "@/api/campaign/cardDatas";

const Cards = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
      {cardDatas &&
        cardDatas.map((item, index) => (
          <div className=" group">
            <div className=" h-44 overflow-hidden flex justify-center items-center rounded-lg">
              <Image
                src={item.image}
                alt="campaign image"
                className=" w-full "
              />
            </div>

            <section className=" relative p-2 ">
              <div className=" flex justify-center items-center ">
                <span className=" absolute -top-5 rounded-full bg-green-700 p-2 text-white ">
                  {item.logo}
                </span>
              </div>
              <h4 className=" text-center font-semibold mt-10 mb-5 ">
                {item.header}
              </h4>
              <p className=" px-2 text-sm text-center ">{item.text}</p>

              <Link
                href="#"
                className=" flex gap-2 items-center justify-center hover:underline w-full text-center mt-3 text-green-700 "
              >
                {item.button}
                <FiChevronsRight
                  size={16}
                  className=" group-hover:translate-x-3 transition-all duration-500 ease-in-out"
                />
              </Link>
            </section>
          </div>
        ))}
    </div>
  );
};

export default Cards;
