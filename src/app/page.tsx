import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ImageSection from "@/components/ImageSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ImageSection />
      <ServicesSection />
      <WorksSection />
      <TestimonialsSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
