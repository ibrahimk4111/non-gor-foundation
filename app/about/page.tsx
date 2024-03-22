"use client";

import React, { useState } from "react";
import { ProjectDatas } from "@/api/projects/ProjectData";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(ProjectDatas[0].name);

  return (
    <div className=" bg-slate-100 ">
      <div className=" bg-green-700">
        <h1 className=" py-5 text-center lg:text-4xl text-2xl text-white font-bold tracking-widest ">
          About Us
        </h1>
      </div>
      <div className=" container mx-auto py-10">
        <div className=" grid grid-cols-12">
          <Tabs
            defaultValue={ProjectDatas[0].name}
            className=" flex lg:flex-col flex-row lg:col-span-4 col-span-12 overflow-auto"
          >
            {ProjectDatas.map((project, index) => (
              <div key={index}>
                <TabsList>
                  <TabsTrigger
                    value={project.name}
                    onClick={() => setActiveTab(project.name)}
                  >
                    {project.name}
                  </TabsTrigger>
                </TabsList>
              </div>
            ))}
          </Tabs>
          <section className="lg:col-span-8 col-span-12 lg:border-l bg-slate-100 lg:px-5 py-5 overflow-auto">
            <div className=" bg-white rounded-md p-3">
              {ProjectDatas.map(
                (project, index) =>
                  project.name === activeTab && (
                    <div key={index}>
                      <div className=" p-3 ">
                        <h1 className=" text-green-700 lg:text-3xl text-xl font-semibold mb-5 ">
                          {project.name}
                        </h1>
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

export default About;
