import React from "react";
import Link from "next/link";
import NewsCardsCom from "./newsCards/NewsCardsCom";

const News = () => {
  return (
    <div className=" py-10 bg-green-50 ">
      <div className=" container mx-auto">
        <ul className=" mb-10 flex items-center gap-2">
          <li><Link href="/" className=" text-slate-400 hover:text-black ">Home</Link></li>
          <li>/</li>
          <li><Link href="#">Link</Link></li>
        </ul>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          <NewsCardsCom />
        </div>
      </div>
    </div>
  );
};

export default News;
