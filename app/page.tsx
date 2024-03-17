import About from "@/components/about/About";
import Donate from "@/components/donate/Donate";
import News from "@/components/news/News";
import OnGoinProjects from "@/components/onGoinProjects/OnGoinProjects";

export default function Home() {
  return (
    <main>
        <About />
        <Donate />
        <OnGoinProjects />
        <News />
    </main>
  );
}
