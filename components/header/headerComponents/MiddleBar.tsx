import React from "react";
import logo from "@/public/Nogor Foundation.jpg";
import Image from "next/image";
import Link from "next/link";

const MiddleBar = () => {
  const activeBtnClasses = " px-3 py-2 text-white bg-green-700 rounded-md"
  
  return (
    <section className=" flex justify-between items-center h-16 my-5">
      <div className="h-full overflow-hidden">
        <Image src={logo} alt="logo" className=" h-full w-auto" />
      </div>
      <div className=" flex gap-3">
        <Link href="#" className={activeBtnClasses}>My Account</Link>
        <Link href="#" className={activeBtnClasses}>Donate</Link>
      </div>
    </section>
  );
};

export default MiddleBar;
