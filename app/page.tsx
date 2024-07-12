'use client'

import About from "@/components/about/About";
import Campaign from "@/components/campaign/Campaign";
import CarouselPage from "@/components/carousel/CarouselPage";
import { AnimationProvider } from "@/components/context/AnimationContext";
import News from "@/components/news/News";


export default function Home() {
  return (
    <AnimationProvider>
      <CarouselPage />
      <About />
      <Campaign />
      <News />
    </AnimationProvider>
  );
}
