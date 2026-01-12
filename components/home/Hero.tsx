"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-32 lg:pb-0 overflow-hidden bg-white">
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
              <span className="text-[var(--brand)] font-bold tracking-widest text-sm uppercase">
                The #1 Gym Management System in Ethiopia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.2]"
            >
              Modern Gym Management Software Built for Growing Fitness Centers
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed"
            >
              Turn your gym into a professional, profitable business. Secure
              your entrance, automate your memberships, and watch your revenue
              grow with one simple platform.
            </motion.p>

            <motion.div variants={fadeIn}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--brand)] text-white rounded-md font-semibold text-lg hover:bg-[var(--brand-dark)] transition-all shadow-lg hover:shadow-[var(--brand)]/20 inline-flex items-center gap-2"
              >
                Get a Free Demo
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-12 pt-8 border-t border-gray-100"
            >
              <p className="text-sm font-semibold text-gray-500 mb-5 uppercase tracking-wider">
                Trusted by the largest gyms in Ethiopia
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 sm:gap-x-10 gap-y-6 w-full max-w-2xl">
                {[
                  {
                    src: "/logos/edf-logo.png",
                    alt: "EDF",
                    width: 2558,
                    height: 1158,
                    opacityClass: "opacity-100",
                  },
                  {
                    src: "/logos/grand-palace-logo.png",
                    alt: "Grand Palace",
                    width: 7202,
                    height: 1158,
                    opacityClass: "opacity-100",
                  },
                  {
                    src: "/logos/radiant-logo.png",
                    alt: "Radiant",
                    width: 2558,
                    height: 1158,
                    opacityClass: "opacity-70",
                  },
                  {
                    src: "/logos/roots-logo.png",
                    alt: "Roots",
                    width: 3788,
                    height: 1158,
                    opacityClass: "opacity-70",
                  },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    tabIndex={0}
                    className={`relative grayscale hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 focus:grayscale-0 focus:opacity-100 focus:outline-none transition-all duration-300 ${logo.opacityClass}`}
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.alt} Logo`}
                      width={logo.width}
                      height={logo.height}
                      className="h-7 sm:h-8 md:h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 50,
            }}
            className="lg:w-[50%] relative perspective-1000"
          >
            <div className="relative">
              {/* Main Monitor */}
              <div className="relative z-20 transform transition-transform hover:scale-[1.02] duration-500">
                <Image
                  src="/images/abal-main-mockup.png"
                  alt="Abal gym management dashboard - member tracking and payments"
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
  );
}
