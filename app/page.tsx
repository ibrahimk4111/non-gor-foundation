import Gallery from "@/components/Gallery/Gallery";
import About from "@/components/about/About";
import Activites from "@/components/activites/Activites";
import Campaign from "@/components/campaign/Campaign";
import CarouselPage from "@/components/carousel/CarouselPage";
import TopButton from "@/components/ui/TopButton";

export default function Home() {
  return (
    <main>
      <CarouselPage />
      <About />
      <Activites />
      <Campaign />
      <Gallery />
      <TopButton />
    </main>
  );
}
