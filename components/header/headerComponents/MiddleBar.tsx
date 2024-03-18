import React from "react";
import logo from "@/public/Nogor Foundation.jpg";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const MiddleBar = () => {
  const activeBtnClasses = " py-3 px-5 text-white bg-green-900 rounded-md ";

  return (
    <div className=" bg-white pb-10 ">
      <div className=" container mx-auto">
        <div className=" flex justify-between items-center">
          {/* logo section */}
          <div className=" flex justify-start items-center h-20 gap-5">
            <button className=" lg:hidden block bg-green-700 hover:bg-green-900 text-white p-3 rounded-full ">
              <RxHamburgerMenu size={30} />
            </button>
            <div className="h-full overflow-hidden">
              <Image src={logo} alt="logo" className=" h-full w-auto" />
            </div>
          </div>

          {/* button section */}
          <div className=" flex gap-3">
            <Link href="#" className={activeBtnClasses}>
              My Account
            </Link>
            <Link href="#" className={activeBtnClasses}>
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
