"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CoreBenefits from "@/components/home/CoreBenefits";
import TransformationSection from "@/components/home/TransformationSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import OperationalClarity from "@/components/home/OperationalClarity";
import MemberExperience from "@/components/home/MemberExperience";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CoreBenefits />
      <TransformationSection />
      <FeaturesGrid />
      <OperationalClarity />
      <MemberExperience />
      <CallToAction />
      <Footer />
    </div>
  );
}
