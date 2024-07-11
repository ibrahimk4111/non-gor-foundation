import About from "@/components/about/About";
import Activites from "@/components/activites/Activites";
import Campaign from "@/components/campaign/Campaign";
import CarouselPage from "@/components/carousel/CarouselPage";
import News from "@/components/news/News";


export default function Home() {
  return (
    <main>
      <CarouselPage />
      <About />
      <Campaign />
      <News />
    </main>
  );
}
