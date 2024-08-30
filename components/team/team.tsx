import React from "react";
import MemberInfo from "./memberInfo";
import { teamMembersData } from "@/api/team/teamMemberData";

const Team = () => {
  return (
    <div className=" container mx-auto ">
      <h1 className=" text-center pt-20 uppercase font-semibold text-slate-500">
        Our Team Members
      </h1>
      <hr className=" h-1 mt-3" />

      <div className=" flex justify-center items-center py-5">
        <div className=" w-96 ">
          <MemberInfo {...teamMembersData[0]} />
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-5 py-16">
        {teamMembersData.slice(1, 7)?.map((item) => (
          <MemberInfo key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
