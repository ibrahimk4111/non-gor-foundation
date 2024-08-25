"use client";

import React from "react";
import { SearchIcon, XIcon } from "lucide-react";

const SearchButton = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <div
        className={` ${
          expanded ? "flex w-52" : "hidden w-0"
        } absolute left-0 h-full z-50 transition-all duration-300 ease-in-out`}
      >
        <form className=" flex items-center h-full w-full">
          <input
            name="name"
            type="text"
            placeholder="Search Products..."
            className=" h-full w-full border bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 px-5 py-2 focus:ring-1 outline-none"
          />
          <button
            onClick={() => setExpanded((prev) => !prev)}
            type="submit"
            className=" h-full px-5 py-2 bg-green-500 hover:bg-green-600 transition-all duration-500 ease-in-out"
          >
            <SearchIcon className=" w-full h-5 " />
          </button>
        </form>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="border-l h-full px-5 py-2 bg-green-500 hover:bg-green-600 transition-all duration-500 ease-in-out"
        >
          <XIcon className=" w-full h-5 " />
        </button>
      </div>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className=" cursor-pointer p-2 text-slate-500 hover:text-black bg-green-200 rounded-md hover:rounded-full transition-all duration-500 ease-in-out"
      >
        <SearchIcon className=" w-5 h-5" />
      </button>
    </>
  );
};

export default SearchButton;
