"use client";

import * as React from "react";
import ass from "@/public/assunnah-complex.jpg";
import sliderShape from "@/public/slider-shape-1.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { paths } from "@/utils/paths";
import { carouselDatas } from "@/api/carousel/CarouselData";

const CarouselPage: React.FC = () => {
  return (
    <div>
      <Carousel plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}>
        <CarouselContent>
          {carouselDatas.map((item, index) => (
            <CarouselItem
              key={index}
              className=" relative flex items-center justify-center md:h-screen h-[70vh] overflow-hidden "
              style={{
                backgroundImage: `url(${item.img.src})`,
                backgroundSize: "cover",
                objectFit: "fill",
                backgroundPosition: "center",
              }}
            >
              <div className=" absolute left-0 top-0 flex justify-center items-center md:p-32 p-10 bg-gradient-to-r from-sky-950 via-sky-800/90 to-transparent w-full h-full">
                <div className=" text-white md:space-y-5 space-y-3 w-full relative">
                  <span className=" bg-sky-800/40 backdrop-blur-sm py-2 md:px-8 px-3 rounded-md md:text-base text-sm ">
                    {item.title}
                  </span>
                  <h1 className=" md:text-7xl text-5xl font-semibold flex flex-col md:gap-3 md:w-[40vw]">
                    <span>{item.desc}</span>
                  </h1>
                  <div className=" flex justify-start items-center gap-10 relative w-96">
                    <button className=" cursor-pointer md:p-5 p-2 text-white rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 ease-in">
                      <Link href={paths.donate}>Donate Now</Link>
                    </button>
                    <Image
                      src={sliderShape}
                      alt="img"
                      className=" absolute -top-10 right-0 md:block hidden"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
