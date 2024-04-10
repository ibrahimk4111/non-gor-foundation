import * as React from "react";
import ass from "@/public/assunnah-complex.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className=" flex justify-center items-center ">
        <Carousel>
          <CarouselContent className=" max-h-[60vh] h-auto ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className=" overflow-hidden flex justify-center items-center rounded-lg">
                <Image src={ass} alt="img1" className=" w-full h-auto " />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;
