'use client'

import { ArrowBigUp } from "lucide-react";
import React, { useState } from "react";

const TopButton = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className=" fixed bottom-16 right-5 z-50 cursor-pointer">
        <ArrowBigUp
          onClick={backToTop}
          className={` ${
            isVisible ? "block" : "hidden"
          } w-8 h-8 p-1 bg-white text-[#00cba9] hover:scale-125 rounded-full shadow shadow-theme transition-all duration-300 ease-in`}
        />
      </div>
    </div>
  );
};

export default TopButton;
