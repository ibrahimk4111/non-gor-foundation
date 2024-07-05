import React from "react";
import CampaignCards from "./campaignCard/CampaignCards";
import { campaignDatas } from "@/api/campaign/campaignData";

const Campaign = () => {
  return (
    <div id="campagin">
      <div className=" py-20 bg-white">
        <div className=" container mx-auto">
          <h1 className=" lg:text-2xl text-xl text-center text-green-700 mb-5 underline underline-offset-8 ">Campaign</h1>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
            {campaignDatas &&
              campaignDatas.map((data) => (
                <CampaignCards
                  key={data.id}
                  image={data.img}
                  header={data.header}
                  text={data.text}
                />
              ))}
          </div>
          <div className=" flex justify-center items-center mt-5">
            <button className="px-10 py-1 text-white bg-green-700 rounded-lg ">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
