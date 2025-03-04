import Footer from "@/components/common/Footer";
import Marquee from "@/components/home/NekozumaMarquee";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Team from "@/components/home/Team";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <Team />
      <Footer />
    </>
  );
}
