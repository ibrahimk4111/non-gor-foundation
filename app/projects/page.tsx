"use client";

import React, { use, useState } from "react";
import { ProjectDatas } from "@/api/projects/ProjectData";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = () => {
  const [activeTab, setActiveTab] = useState<Number>(1);
  return (
    <div className=" container mx-auto ">
      <div className=" grid grid-cols-12 gap-5">
        <Tabs
          defaultValue="account"
          className=" lg:col-span-4 flex gap-2 flex-col "
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
        <section className="lg:col-span-8 border rounded-lg bg-slate-100 p-5">
          <div  className=" bg-white rounded-md p-3">
            {ProjectDatas.map(
              (project, index) =>
                project._id == activeTab && (
                  <div key={index}>
                    <div className=" p-3 ">
                      <Link href={`prjects/${project._id}`}>
                        {project.description}
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default projects;
