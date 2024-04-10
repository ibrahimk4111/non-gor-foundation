import React from "react";
import ActivityCard from "./activitycards/ActivityCard";
import ActivityImage1 from "@/public/activitiesLogo/Activities-1.png";

import { activitesData } from "@/api/activities/Activities";
import Link from "next/link";

const Activites = () => {
  return (
    <div className=" py-5 bg-slate-100" id="activities">
      <div className=" container mx-auto">
        <h1 className=" lg:text-2xl text-xl text-center mb-5 underline underline-offset-4 ">
          Activites
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {activitesData &&
            activitesData.map((data, index) => (
              <ActivityCard
                key={index}
                image={data.img}
                header={data.header}
                text={data.text}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Activites;
