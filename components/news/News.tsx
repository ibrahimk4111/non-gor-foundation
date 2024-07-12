import React from "react";
import Link from "next/link";
import NewsCardsCom from "./newsCards/NewsCardsCom";

const News = () => {
  return (
    <div className=" py-16 bg-green-50 ">
      <div className=" container mx-auto">
        <div className=" ">
          <h1 className=" font-semibold text-3xl uppercase text-green-700 ">News Feeds</h1>
          <hr className=" bg-white " />
        </div>
        <p className=" my-10 text-justify ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed minus
          officiis fugit consectetur delectus, tempore aliquam esse molestias
          eius sint ratione repellat incidunt illum eum ad quidem alias suscipit
          quaerat iste nobis nam! Minima amet, explicabo doloribus corrupti nam
          ipsum.
        </p>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          <NewsCardsCom />
        </div>
      </div>
    </div>
  );
};

export default News;
