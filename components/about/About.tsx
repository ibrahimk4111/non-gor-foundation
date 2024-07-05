import Image from "next/image";
import React from "react";
import golden_gate from "@/public/Profile Photo logo.jpg";
import office from "@/public/campaignImg/office.jpeg";
import Link from "next/link";

const About: React.FC = () => {
  const linkPointsClassNames =
    " h-3 w-3 bg-white group-hover:bg-green-800 border-2 border-green-700 rounded-full z-10 transition-all duration-500 ease-in";
  const linkClassNames =
    " group flex justify-start items-center gap-2 hover:text-green-800 ";
  return (
    <div className=" px-5 py-20 grid grid-cols-12 gap-5">
      <div className=" lg:col-span-5 col-span-12 flex justify-center items-center">
        <div className=" h-full w-full rounded-md overflow-hidden " style={{ backgroundImage: `url(${office.src})`, backgroundSize:"cover", backgroundPosition: "center"}}></div>
      </div>
      <div className=" lg:col-span-7 col-span-12 md:px-5">
        <h1 className=" text-2xl text-green-700 flex gap-5 items-center  ">
          <Image
            src={golden_gate}
            alt="foundation logo"
            className=" h-14 w-auto"
          />
          <span className=" text-4xl font-bold tracking-wider ">Nongor Foundation</span>
        </h1>
        <hr className=" bg-slate-300 my-3" />
        <p className=" py-2 text-justify">
          "Eternal conviction in building a prosperous society" - With this
          motto in mind, this progress is aimed at building a prosperous society
          in the service of humanity and the implementation of welfare work
          through cooperation. Social development is only possible with
          organized cooperation in this era of globalization. Therefore, if we
          can do something creative for the welfare of the socialized people by
          utilizing the development of thoughts, consciousness, and intellect of
          the organized people, the society will be prosperous, and the nation
          and the next generation will benefit. With the unwavering support and
          cooperation of the people from all walks of life in the area by
          incorporating the organizational wisdom of the people engaged in the
          work of building the society, this organization called "Nongor
          Foundation" was established, which will be operated as a
          non-political, non-profit voluntary social welfare organization
          InshaAllah.
        </p>
        <h1>
          <span className=" text-xl font-bold tracking-wider ">Our Activites</span>
        </h1>
        <hr className=" bg-slate-300 my-3" />
        <section className=" relative flex justify-start items-center gap-5 ">
          <div className=" space-y-2">
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>
              <Link href="#">Human needs (Food, Housing, Clothing)</Link>
            </div>
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>
              <Link href="#">Education</Link>
            </div>
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>
              <Link href="#">Health</Link>
            </div>
          </div>
          <div className=" space-y-2">
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>
              <Link href="#">Training</Link>
            </div>
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>
              <Link href="#">The Culture</Link>
            </div>
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>
              <Link href="#">Awareness</Link>
            </div>
          </div>
          {/* <div className=" h-20 bg-slate-300 absolute top-2 left-[6px] w-[1px] "></div> */}
        </section>
      </div>
    </div>
  );
};

export default About;
