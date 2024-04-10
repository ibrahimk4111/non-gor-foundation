import Image from "next/image";
import React from "react";
import golden_gate from "@/public/Profile Photo logo.jpg";
import Link from "next/link";

const About: React.FC = () => {
  const linkPointsClassNames =
    " h-3 w-3 bg-white border-2 border-green-700 rounded-full z-10";
  const linkClassNames =
    " flex justify-start items-center gap-2 text-green-800 font-semibold";
  return (
    <div className="  container mx-auto p-5 py-10 grid grid-cols-12 gap-5">
      <div className=" lg:col-span-4 col-span-12 flex justify-center items-center">
        <div className=" h-70 w-96 overflow-hidden flex items-center">
          <Image src={golden_gate} alt="golden gate" />
        </div>
      </div>
      <div className=" lg:col-span-8 col-span-12 px-5">
        <h1 className=" text-2xl text-green-700 ">Nongor Foundation</h1>
        <hr className=" h-1 bg-slate-300 my-3" />
        <p className=" py-5 text-justify">
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
        <section className=" relative ">
          <div className=" space-y-4">
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>{" "}
              <Link href="#">Education</Link>
            </div>
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>{" "}
              <Link href="#">Charity</Link>
            </div>
            <div className={linkClassNames}>
              <p className={linkPointsClassNames}></p>{" "}
              <Link href="#">Dawah</Link>
            </div>
          </div>
          <div className=" h-20 bg-slate-300 absolute top-2 left-[6px] w-[1px] "></div>
        </section>
      </div>
    </div>
  );
};

export default About;
