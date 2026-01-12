import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CoreBenefits from "@/components/home/CoreBenefits";
import TransformationSection from "@/components/home/TransformationSection";
import LeadManagement from "@/components/home/LeadManagement";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Abal - #1 Gym Management Software in Ethiopia",
  description: "Modern gym management software tailored for Ethiopian fitness centers. Manage memberships, payments, and check-ins effortlessly.",
  alternates: {
    canonical: "https://abal.et",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CoreBenefits />
      <TransformationSection />
      <LeadManagement />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
