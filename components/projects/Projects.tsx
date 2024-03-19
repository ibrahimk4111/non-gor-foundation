import React from "react";
import ProjectCards from "./projectCards/ProjectCards";

const Projects = () => {
  return (
    <div className=" lg:py-10 py-5 ">
      <div className=" container mx-auto">
        <h1 className=" text-xl lg:text-2xl text-center mb-10">Projects</h1>
        <div className=" grid lg:grid-cols-3 gap-5 ">
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
        </div>
        <div className=" flex justify-center items-center mt-8">
          <button className="py-3 px-32 text-white bg-green-700 rounded-lg ">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
