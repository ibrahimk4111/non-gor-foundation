import {
  RiFacebookFill,
  RiInstagramFill,
  RiTelegramFill,
  RiThreadsFill,
  RiTwitterXLine,
} from "react-icons/ri";

import Image from "next/image";
import React from "react";
import member from "@/public/member-img.jpg";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { teamMembersData } from "@/api/team/teamMemberData";
import { MdOutlineEmail } from "react-icons/md";

const Team = () => {
  const size = 14;
  const classNameforIcon =
    " text-slate-600 hover:scale-110 hover:text-green-400 group-hover:text-green-400 transition-all duration-500 ease-in-out";
  const items = "border-2 border-slate-300 rounded-full p-1";
  return (
    <div className=" container mx-auto ">
      <h1 className=" text-center pt-20 uppercase font-semibold text-slate-500">
        Our Team Members
      </h1>
      <hr className=" h-1 mt-3" />

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-5 py-16">
        {teamMembersData?.map((item) => (
          <div key={item.id}>
            <div className=" overflow-hidden relative flex flex-col items-center justify-center gap-5">
              <div className=" shadow-md shadow-green-500 h-40 w-40 rounded-full overflow-hidden z-50">
                <Image src={member} alt="member img" />
              </div>
              <div className="w-full h-full bg-slate-100 absolute top-1/4 left-0"></div>
              <div className=" py-8 z-50 bg-white w-full flex flex-col justify-center items-center gap-5">
                <h1 className=" font-semibold text-lg ">{item.name}</h1>
                <p className=" text-green-700 text-sm  ">{item.designation}</p>
                <div className=" flex gap-2">
                  {item.contacts.email && (
                    <Link href={item.contacts.email} className={items}>
                      <MdOutlineEmail
                        size={size}
                        className={classNameforIcon}
                      />
                    </Link>
                  )}
                  {item.contacts.fb && (
                    <Link href={item.contacts.fb} className={items}>
                      <RiFacebookFill
                        size={size}
                        className={classNameforIcon}
                      />
                    </Link>
                  )}
                  {item.contacts.twitter && (
                    <Link href={item.contacts.twitter} className={items}>
                      <RiTwitterXLine
                        size={size}
                        className={classNameforIcon}
                      />
                    </Link>
                  )}
                  {item.contacts.telegram && (
                    <Link href={item.contacts.telegram} className={items}>
                      <RiTelegramFill
                        size={size}
                        className={classNameforIcon}
                      />
                    </Link>
                  )}
                  {item.contacts.instagram && (
                    <Link href={item.contacts.instagram} className={items}>
                      <RiInstagramFill
                        size={size}
                        className={classNameforIcon}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
