import React from "react";

import Image from "next/image";
import Link from "next/link";

interface propTypes {
    image: any;
    header: string;
    text: string;
}

const ActivityCard = ({image, header, text}: propTypes) => {
  return (
    <div className=" relative group bg-white rounded-lg hover:outline outline-green-400 transition-all duration-300 ease-in-out overflow-hidden">
      <div className=" absolute -top-32 -left-32 bg-gradient-to-br from-orange-950 via-green-700 to-transparent w-0 group-hover:w-60 h-0 group-hover:h-60 rounded-full transition-all duration-500 ease-in-out "></div>
      <section className=" h-32 overflow-hidden flex justify-center items-center p-2">
        <Image
          src={image}
          alt="assunnah_complex"
          className=" h-full w-auto  "
        />
      </section>

      <section className="p-2 space-y-2">
        <h1 className=" text-xl text-center text-green-700">
          {header}
        </h1>
        <p className=" px-2 text-sm text-justify">
          {text}
        </p>
      </section>
    </div>
  );
};

export default ActivityCard;
