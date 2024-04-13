import React from "react";
import small_business from '@/public/small-business-management.jpg';
import Image from "next/image";
import Link from "next/link";

interface propsType {
  image: any;
  header: string;
  text: string;
}

const CampaignCards = ({ image, header, text }: propsType) => {
  return (
    <div className=" border-2 rounded-lg ">
      <section className=" h-auto overflow-hidden flex justify-center items-center rounded-t-lg">
        <Image
          src={image}
          alt="assunnah_complex"
          className=" h-auto w-auto"
        />
      </section>

      <section className="p-2 space-y-2">
        <h1 className=" text-xl text-center text-green-700">
          {header}
        </h1>
        <div className=" px-2 text-sm text-justify">
          {
            text.length > 200 ? (<div>{text.slice(0, 200) + "....."}<button className=" text-green-400">Read More</button></div>) : text
          }
        </div>
      </section>
    </div>
  )
}

export default CampaignCards