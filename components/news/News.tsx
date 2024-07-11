import React from "react";
import Link from "next/link";
import NewsCardsCom from "./newsCards/NewsCardsCom";

const News = () => {
  return (
    <div className=" py-16 bg-green-50 ">
      <div className=" container mx-auto">
        <div className=" mb-10">
          <div>
            <h1 className=" font-semibold text-2xl ">Related News</h1>
          </div>
          <hr className=" bg-white " />
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          <NewsCardsCom />
        </div>
      </div>
    </div>
  );
};

export default News;
