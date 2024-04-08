import Gallery from "@/components/Gallery/Gallery";
import About from "@/components/about/About";
import Activites from "@/components/activites/Activites";
import CarouselPage from "@/components/carousel/CarouselPage";
import OnGoinProjects from "@/components/onGoinProjects/OnGoinProjects";
import TopButton from "@/components/ui/TopButton";

export default function Home() {
  return (
    <main>
      <CarouselPage />
      <About />
      <Activites />
      <OnGoinProjects />
      <Gallery />
      <TopButton />
    </main>
  );
}
