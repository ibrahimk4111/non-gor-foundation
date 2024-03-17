import React from "react";
import ImageComp from "./imageComp/ImageComp";


const Gallery = () => {
  return (
    <div className=" py-10 bg-slate-100 ">
      <div className=" max-w-[1280px] mx-auto">
        <h1 className=" text-2xl text-center mb-10">Gallery</h1>
        <div className=" grid lg:grid-cols-4 gap-5 ">
          <ImageComp />
          <ImageComp />
          <ImageComp />
          <ImageComp />
          <ImageComp />
          <ImageComp />
          <ImageComp />
          <ImageComp />
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

export default Gallery;
