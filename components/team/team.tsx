import React from "react";
import MemberInfo from "./memberInfo";
import { teamMembersData } from "@/api/team/teamMemberData";
import foundationLogo from "@/public/Profile Photo logo.jpg";
import Image from "next/image";
import { Button } from "../ui/button";

const Team = () => {
  return (
    <div>
      <h1 className=" text-center uppercase font-semibold text-slate-500">
        Our Team Members
      </h1>
      <hr className=" h-1 mt-3" />
      {/* <Image src={foundationLogo} alt="..." /> */}
      <div className=" grid lg:grid-cols-5 gap-5 p-4">
        <div className=" flex flex-col justify-center items-center ">
          <MemberInfo {...teamMembersData[0]} />
          <div className=" flex items-center justify-center my-3">
            <Button variant={"outline"} className=" w-fit ">
              Other Members
            </Button>
          </div>
        </div>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:col-span-4 gap-3 ">
          {teamMembersData.slice(1, 7)?.map((item) => (
            <MemberInfo key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
