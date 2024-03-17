import * as React from "react";
import ass from "@/public/assunnah-complex.jpg";

import { Card, CardContent } from "@/components/ui/card";
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
    <div className=" max-w-[1280px] mx-auto py-10">
      <div className=" flex justify-center items-center ">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="h-[60vh] overflow-hidden flex justify-center items-center rounded-lg">
                  <Image src={ass} alt="img1" />
                </div>
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
