'use client'

import React, { useState } from "react";

const EngBnToggle = () => {
  const [activeBtn, setActiveBtn] = useState<string>("eng");
  const activeBtnClasses = (btnName: string) => `cursor-pointer p-1 ${activeBtn === btnName ? "text-white bg-green-900 " : " bg-slate-100 "}`

  return (
    <div>
      <section className=" flex justify-center items-center rounded-md overflow-hidden">
        <div onClick={()=>setActiveBtn('eng')} className={activeBtnClasses('eng')} >Eng</div>
        <div onClick={()=>setActiveBtn('bn')} className={activeBtnClasses('bn')} >বাংলা</div>
      </section>
    </div>
  );
};

export default EngBnToggle;
