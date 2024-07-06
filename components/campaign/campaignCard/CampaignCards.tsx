import React from "react";
import small_business from "@/public/small-business-management.jpg";
import Image from "next/image";
import Link from "next/link";

interface propsType {
  image: any;
  header: string;
  text: string;
  logo: any;
}

const CampaignCards = ({ image, header, text, logo }: propsType) => {
  return (
    <div className=" border-2 rounded-lg ">
      <section className=" h-auto overflow-hidden flex justify-center items-center rounded-t-lg">
        <Image src={image} alt="campaign image" className=" h-auto w-auto " />
      </section>

      <section className=" relative p-2 ">
        {/* <div className=" flex justify-center items-center ">
          <Image
            src={logo}
            alt="logo"
            className=" absolute -top-5 w-10 h-auto rounded-full shadow-md shadow-black "
          />
        </div> */}
        <h1 className=" text-center text-green-700 my-5 ">{header}</h1>
        <p className=" px-2 text-sm text-justify line-clamp-4">
          {text} 
        </p>

        <button className=" hover:underline w-full text-center mt-3 text-green-700 "> Read More </button>
      </section>
    </div>
  );
};

export default CampaignCards;
