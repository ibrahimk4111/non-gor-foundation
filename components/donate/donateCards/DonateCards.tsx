import React from "react";
import assunnah_complex from '@/public/assunnah-complex.jpg';
import Image from "next/image";

const DonateCards = () => {
  return (
    <div className=" bg-white rounded-lg overflow-hidden">
      <section>
        <Image src={assunnah_complex} alt="assunnah_complex" />
      </section>

      <section className="p-5 flex flex-col justify-between items-start gap-3">
        <h1 className=" text-2xl text-center text-green-700">
          As-Sunnah Foundation Masjid Complex
        </h1>
        <p className=" overflow-auto h-28 px-2">
          The As-Sunnah Foundation Masjid Complex will be the focal point of the
          multi-faceted activities of the As-Sunnah Foundation for the welfare
          of the country, nation and ummah. In-Sha-Allah it will be the center
          of various humanitarian and public welfare projects, including an
          ideal mosque, a modern madrasah with an integrated syllabus aimed at
          creating an Islamic scholar to meet the needs of the age.
        </p>
        <div className=" w-full ">
          <button
            className="py-3 px-5 text-white bg-green-700 rounded-lg w-full "
          >
            Donate
          </button>
        </div>
      </section>
    </div>
  )
}

export default DonateCards