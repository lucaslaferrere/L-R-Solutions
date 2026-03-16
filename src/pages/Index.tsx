import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import CaseStudySection from "@/components/landing/CaseStudySection";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import CommandPalette from "@/components/landing/CommandPalette";
import MouseSpotlight from "@/components/landing/MouseSpotlight";
import ConsoleEasterEgg from "@/components/landing/ConsoleEasterEgg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ConsoleEasterEgg />
      <MouseSpotlight />
      <CommandPalette />
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <CaseStudySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
