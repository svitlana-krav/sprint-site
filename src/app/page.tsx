import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ImageSection from "@/components/ImageSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ImageSection />
      <ServicesSection />
      <WorksSection />
    </main>
  );
}
