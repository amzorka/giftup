import Header from "../components/Header";
import "../scss/Home.scss";
import { useMobile } from "../hooks/useMobile";
import HowItWorks from "../components/HowItWorks";
import HeroTop from "../components/HeroTop";
import HeroAbout from "../components/HeroAbout";
import PresaleDetails from "../components/PresaleDetails";
import Roadmap from "../components/Roadmap";
import PresaleBox from "../components/PresaleBox";
import Footer from "../components/Footer";
import MobileHeroTop from "../components/MobileHeroTop";
import MobileRoadmap from "../components/MobileRoadmap";
import DecorativeEllipse from "../components/DecorativeEllipse";

export default function Home() {
  const isMobile = useMobile();

  return (
    <div className="home">
      <Header />
      <section className="hero-section">
        {isMobile ? <MobileHeroTop /> : <HeroTop />}
        <section id="about">
          <HeroAbout />
        </section>
        <DecorativeEllipse size={700} top={-85} left={-190} />
        <DecorativeEllipse size={700} top={-85} right={-150} />
        <DecorativeEllipse size={700} top={300} right={100} />
      </section>
      <section id="how">
        <HowItWorks />
      </section>
      <DecorativeEllipse size={700} top={-85} left={-190} />
      <DecorativeEllipse size={700} top={600} left={-100} />
      <section id="details">
        <PresaleDetails />
      </section>
      <section id="roadmap">
        {isMobile ? <MobileRoadmap /> : <Roadmap />}
      </section>
      <section id="presale">
        <PresaleBox />
      </section>
      <Footer />
    </div>
  );
}
