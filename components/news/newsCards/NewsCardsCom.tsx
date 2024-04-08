import React from "react";
import member from '@/public/member-conference-2024-1.jpeg';
import Image from "next/image";
import Link from "next/link";

const NewsCardsCom: React.FC = () => {
  return (
    <div className=" rounded-lg overflow-hidden bg-white">
      <section>
        <Image src={member} alt="assunnah_complex" />
      </section>

      <section className="p-5 flex flex-col justify-between items-start gap-3">
        <h1 className=" text-xl text-center text-green-700">
          As-Sunnah Foundation Masjid Complex
        </h1>
        <p className="h-32 px-2">
          The As-Sunnah Foundation Masjid Complex will be the focal point of the
          multi-faceted activities of the As-Sunnah Foundation for the welfare
          of the country, nation...<Link href="#" className="py-3 px-5 underline text-red-600 text-sm font-semibold">
            Read More
          </Link>
        </p>
      </section>
    </div>
  )
}

export default NewsCardsCom