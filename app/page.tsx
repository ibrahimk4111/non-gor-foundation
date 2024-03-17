import Gallery from "@/components/Gallery/Gallery";
import About from "@/components/about/About";
import Donate from "@/components/donate/Donate";
import News from "@/components/news/News";
import OnGoinProjects from "@/components/onGoinProjects/OnGoinProjects";
import Projects from "@/components/projects/Projects";
import Videos from "@/components/videos/Videos";

export default function Home() {
  return (
    <main>
        <About />
        <Donate />
        <OnGoinProjects />
        <News />
        <Projects />
        <Videos />
        <Gallery />
    </main>
  );
}
