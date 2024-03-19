import React from "react";
import NewsCardsCom from "./newsCards/NewsCardsCom";

const News = () => {
  return (
    <div className=" py-10 bg-slate-100 ">
      <div className=" container mx-auto">
        <h1 className=" text-xl lg:text-2xl text-center mb-10">On Going Projects</h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          <NewsCardsCom />
          <NewsCardsCom />
          <NewsCardsCom />
        </div>
        <div className=" flex justify-center items-center py-5 mt-5">
          <button className="py-3 px-32 text-white bg-green-700 rounded-lg ">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
