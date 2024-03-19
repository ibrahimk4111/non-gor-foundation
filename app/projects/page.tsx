"use client";

import React, { use, useState } from "react";
import { ProjectDatas } from "@/api/projects/ProjectData";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = () => {
  const [activeTab, setActiveTab] = useState<Number>(1);
  return (
    <div>
      <div className=" bg-green-700">
        <h1 className=" py-5 text-center lg:text-4xl text-2xl text-white font-bold tracking-widest ">
          Projects
        </h1>
      </div>
      <div className=" container mx-auto my-10">
        <div className=" grid grid-cols-12 gap-5">
          <Tabs
            defaultValue={ProjectDatas[0].name}
            className=" flex flex-col gap-3 lg:col-span-4 col-span-12 overflow-auto lg:h-[65vh] h-[40vh] "
          >
            {ProjectDatas.map((project, index) => (
              <div key={index}>
                <TabsList>
                  <TabsTrigger
                    value={project.name}
                    onClick={() => setActiveTab(project._id)}
                  >
                    {project.name}
                  </TabsTrigger>
                </TabsList>
              </div>
            ))}
          </Tabs>
          <section className="lg:col-span-8 col-span-12 border rounded-lg bg-slate-100 p-5 h-[65vh] overflow-auto">
            <div className=" bg-white rounded-md p-3">
              {ProjectDatas.map(
                (project, index) =>
                  project._id == activeTab && (
                    <div key={index}>
                      <div className=" p-3 ">
                        <div>{project.description}</div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default projects;
