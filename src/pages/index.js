import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Marquee from "@/components/common/NekozumaMarquee";
import Story from "@/components/home/Story";
import Team from "@/components/home/Team";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Header />
      <Marquee />
      <Story />
      <Team />
      <Footer />
    </>
  );
}
