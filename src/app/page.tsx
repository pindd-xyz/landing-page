"use client";

import {
  HeroSection,
  ServicesSection,
  AboutSection,
  ProcessSection,
  ContactSection,
} from "@/components/landing-page";

export default function Home() {
  return (
    <div className="min-h-screen text-black">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
