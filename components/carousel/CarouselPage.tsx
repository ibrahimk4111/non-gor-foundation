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
              <div className=" md:p-24 p-10 bg-black/20 absolute left-0 top-0 flex justify-center items-end w-full h-full">
                <div className=" text-white flex flex-col gap-7 justify-center items-center w-full md:max-w-[50vw]">
                  <span className="  md:text-base text-sm ">{item.title}</span>
                  <h1 className=" md:text-6xl text-4xl font-semibold text-center">{item.desc}</h1>
                  <button className=" cursor-pointer p-2 text-white rounded-md bg-green-700 hover:bg-orange-600 transition-all duration-300 ease-in">
                    <Link href={paths.donate}>Donate Now</Link>
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:flex hidden" />
        <CarouselNext className=" md:flex hidden " />
      </Carousel>
    </div>
  );
};

export default CarouselPage;
