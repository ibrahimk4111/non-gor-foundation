import Image from "next/image";
import React from "react";
import golden_gate from "@/public/golden-gate.jpg";
import Link from "next/link";

const About: React.FC = () => {
  const linkPointsClassNames =
    " h-3 w-3 bg-white border-2 border-green-700 rounded-full z-10";
  const linkClassNames =
    " flex justify-start items-center gap-2 text-green-800 font-semibold";
  return (
    <div className="  max-w-[1280px] mx-auto p-5 py-10 grid grid-cols-12 gap-5">
      <div className=" lg:col-span-5 flex justify-center items-center">
        <div className=" h-70 w-96 rounded-full overflow-hidden flex items-center">
          <Image src={golden_gate} alt="golden gate" height={500} />
        </div>
      </div>
      <div className=" lg:col-span-7 px-5">
        <h1 className=" text-2xl text-green-700 ">As-Sunnah Foundation</h1>
        <hr className=" h-1 bg-slate-300 my-3" />
        <p className=" py-5 ">
          As-Sunnah Foundation is a non-profit, non-political, and entirely
          charitable organization dedicated to human welfare. Following the
          ideals and footsteps of the teacher of humanity, liberator of mankind,
          and role model of generosity Prophet Muhammad (Saw), this organization
          is engaged in social reform, inculcation of great morality,
          establishing employment, poverty alleviation, low cost or free health
          care, expansion of Islamic teachings and culture, conducting
          multidisciplinary education projects, continuous program in building a
          clean mindset, above all using oral, written and modern media to make
          people obey Allah and abide by His Messenger (Saw).
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
