import React from "react";
import ImageComp from "../Gallery/imageComp/ImageComp";

const Videos: React.FC = () => {
  const videoId = "7R0geoRoIn55f662";
  return (
    <div className=" py-10 bg-white ">
      <div className=" container mx-auto">
        <h1 className=" text-2xl text-center mb-10">Videos</h1>
        <div className=" grid lg:grid-cols-3 gap-5 ">
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

export default Videos;
