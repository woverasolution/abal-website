"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, BarChart3, Users, Smartphone, ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/abal-logo.svg"
                  alt="Abal Logo"
                  width={96}
                  height={96}
                  className="w-24 h-24"
                />

              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Solutions', 'Pricing', 'About'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[var(--brand)] font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
              <button className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Features', 'Solutions', 'Pricing', 'About'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-[var(--brand)] hover:bg-gray-50 rounded-md"
                >
                  {item}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <button className="w-full bg-[var(--brand)] text-white px-6 py-3 rounded-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-0 lg:pb-0 overflow-hidden bg-white">
        {/* Main Background Gradient - Subtle but rich */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(18,120,88,0.15),rgba(255,255,255,0))]"></div>

        {/* Secondary Gradient - Bottom Right for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(59,130,246,0.15),rgba(255,255,255,0))]"></div>

        {/* Decorative background blur blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[var(--brand)]/10 blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-purple-200/20 blur-[100px] rounded-full mix-blend-multiply"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:w-[50%] text-left"
            >
              <motion.div variants={fadeIn} className="mb-6">
                <span className="text-[var(--brand)] font-bold tracking-widest text-sm uppercase">The #1 Gym Management System in Ethiopia</span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.2]">
                Modern Gym Management Software Built for Growing Fitness Centers
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Manage memberships, automate billing, and track performance—all from one powerful, easy-to-use platform. Trusted by gyms across Ethiopia.
              </motion.p>

              <motion.div variants={fadeIn}>
                <button className="px-8 py-4 bg-[var(--brand)] text-white rounded-md font-semibold text-lg hover:bg-[var(--brand-dark)] transition-all shadow-lg hover:shadow-[var(--brand)]/20 inline-flex items-center gap-2">
                  Request a Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Mockup Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="lg:w-[50%] relative perspective-1000"
            >
              <div className="relative">
                {/* Main Monitor */}
                <div className="relative z-20 transform transition-transform hover:scale-[1.02] duration-500">
                  <Image
                    src="/images/abal-main-mockup.png"
                    alt="Abal Dashboard Interface"
                    width={1920}
                    height={1080}
                    className="w-full h-auto drop-shadow-2xl rounded-lg"
                    priority
                  />
                </div>

                {/* Background Glow/Shadow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500/20 blur-[80px] -z-10 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything to run a world-class fitness facility</h2>
            <p className="text-gray-600 text-lg">Abal combines robust gym operations tools with a beautiful interface, making management a joy for owners and staff.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-[var(--brand)]" />,
                title: "Member Lifecycle",
                description: "Track the entire member journey from lead capture to renewal and retention."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-[var(--brand)]" />,
                title: "Facility Analytics",
                description: "Deep insights into peak hours, class attendance, and revenue per square foot."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-[var(--brand)]" />,
                title: "Member App",
                description: "A premium mobile experience for members to book classes and track workouts."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[var(--brand)]" />,
                title: "24/7 Access Control",
                description: "Seamless integration with turnstiles and door systems for automated entry."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-[var(--brand)]" />,
                title: "Smart Billing",
                description: "Automated membership renewals, failed payment recovery, and POS integration."
              },
              {
                icon: <Menu className="w-8 h-8 text-[var(--brand)]" />,
                title: "Class & Trainer Scheduling",
                description: "Manage group fitness timetables, personal training sessions, and resource availability."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group hover:bg-white"
              >
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--brand-light)] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase 1 */}
      <section className="py-24 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white text-gray-600 font-medium text-sm mb-6 shadow-sm">
                Operational Clarity
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Pulse of your gym at a glance.</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Abal dashboard centers on what matters most to gym owners. Track active check-ins, new sign-ups, and class capacity in real-time. Make data-driven decisions without digging through spreadsheets.
              </p>
              <ul className="space-y-4">
                {['Live facility occupancy tracking', 'Monthly Recurring Revenue (MRR) forecasting', 'Trainer utilization rates'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="text-[var(--brand)] w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
                <Image
                  src="/images/abal-mockup-1.png"
                  alt="Abal Dashboard Detail"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Showcase 2 */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--brand-dark)] opacity-10 blur-3xl rounded-l-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800 text-gray-300 font-medium text-sm mb-6">
                Member Experience
              </div>
              <h2 className="text-4xl font-bold mb-6">Your brand in their pocket.</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Give your members the freedom to book classes, purchase PT packs, and access the facility via their smartphone. A fully branded app experience that boosts retention and engagement.
              </p>
              <button className="text-white border-b-2 border-[var(--brand)] pb-1 hover:text-[var(--brand)] transition-colors inline-flex items-center gap-2">
                Explore the Member App <ArrowRight size={16} />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/abal-mockup-2.png"
                  alt="Abal Mobile App"
                  width={600}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--brand-light)] -z-20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--brand)] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to upgrade your gym?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Join hundreds of forward-thinking fitness studios and gyms who trust Abal to power their growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-10 py-4 bg-[var(--brand)] text-white rounded-full font-bold text-lg hover:bg-[var(--brand-dark)] transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200">
              Get Started for Free
            </button>
            <button className="px-10 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Image
                  src="/images/abal-logo.svg"
                  alt="Abal Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-gray-900">Abal</span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed">
                The most elegant and powerful gym management software on the market. Built for modern fitness businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[var(--brand)]">Features</Link></li>
                <li><Link href="#" className="hover:text-[var(--brand)]">Pricing</Link></li>
                <li><Link href="#" className="hover:text-[var(--brand)]">API</Link></li>
                <li><Link href="#" className="hover:text-[var(--brand)]">Integrations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[var(--brand)]">About Us</Link></li>
                <li><Link href="#" className="hover:text-[var(--brand)]">Careers</Link></li>
                <li><Link href="#" className="hover:text-[var(--brand)]">Blog</Link></li>
                <li><Link href="#" className="hover:text-[var(--brand)]">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[var(--brand)]">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[var(--brand)]">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Abal. All rights reserved.
            </p>
            <div className="flex gap-6">
              {/* Social placeholders */}
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
