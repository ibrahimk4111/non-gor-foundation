import Gallery from "@/components/Gallery/Gallery";
import About from "@/components/about/About";
import CarouselPage from "@/components/carousel/CarouselPage";
import Donate from "@/components/donate/Donate";
import OnGoinProjects from "@/components/onGoinProjects/OnGoinProjects";

export default function Home() {
  return (
    <main>
      <CarouselPage />
      <About />
      <Donate />
      <OnGoinProjects />
      <Gallery />
    </main>
  );
}
