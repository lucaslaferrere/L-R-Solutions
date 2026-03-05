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

const Index = () => {
  return (
    <div className="min-h-screen">
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
