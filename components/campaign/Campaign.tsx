import React from "react";
import CampaignCards from "./campaignCard/CampaignCards";
import { campaignDatas } from "@/api/campaign/campaignData";
import campaignImg from '@/public/campaignImg/plantation.jpeg'
import Image from "next/image";
import Cards from "./cards/Cards";
import { cardDatas } from "@/api/campaign/cardsData";

const Campaign = () => {
  return (
    <div id="campagin" >
      <div className=" py-20">
        <div className=" container mx-auto">
          <div className=" grid md:grid-cols-12 gap-y-5 ">
             <div className=" md:col-span-5">
              <h1 className=" lg:text-2xl text-xl underline mb-5 text-green-800 ">Current Campaign</h1>
              <p className=" text-justify ">Lorem ipsum dolor sit amet  consequuntur reprehenderit, laboriosam laborum quas quae dicta deserunt alias, magni quos dolores esse veniam. Numquam beatae minus reprehenderit explicabo!</p>
             </div>
             <div className=" md:col-span-2 md:block hidden "></div>
             <div className=" md:col-span-5 w-full overflow-hidden h-60 rounded-lg ">
              <Image src={campaignImg} alt="campaign image" className=" "/>
             </div>
          </div>

          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
            {cardDatas &&
              cardDatas.map((data) => (
                <Cards
                  key={data.id}
                  image={data.image}
                  header={data.header}
                  text={data.text}
                  logo={data.logo}
                  button={data.button}
                />
              ))}
          </div>
          
          <h1 className=" text-center font-semibold text-xl my-20 ">Campaigns</h1>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {campaignDatas &&
              campaignDatas.map((data) => (
                <CampaignCards
                  key={data.id}
                  image={data.img}
                  header={data.header}
                  text={data.text}
                  logo={data.logo}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
