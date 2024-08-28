import Activites from "@/components/activites/Activites";
import ActivityCard from "@/components/activites/activitycards/ActivityCard";
import Footstep from "@/components/footStep/Footstep";
import { paths } from "@/utils/paths";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

interface paramsType {
  params: { slug: string };
}

const DynamicActivities: React.FC<paramsType> = ({ params }) => {
  const { slug } = params;
  return (
    <>
      <Footstep>
        <Link
          href={paths.home}
          className=" cursor-pointer hover:text-green-800 "
        >
          Home
        </Link>
        /{" "}
        <Link
          href={paths.activity}
          className=" cursor-pointer hover:text-green-800 "
        >
          Activities
        </Link>
        / <span className=" text-green-800 ">{decodeURIComponent(slug)}</span>
      </Footstep>
      <div className=" container mx-auto py-10 ">
        <h1 className=" uppercase text-green-800 ">
          {decodeURIComponent(slug)}
        </h1>
        <hr className=" h-1 " />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 py-10">
          <ActivityCard />
        </div>
      </div>
    </>
  );
};

export default DynamicActivities;
