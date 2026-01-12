"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Envelope } from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function ContactClient() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section with gradient background */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(18,120,88,0.12),rgba(255,255,255,0))]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Column - Header & Info */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeIn} className="mb-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-xs font-bold uppercase tracking-wider">
                                    Get in Touch
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeIn}
                                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]"
                            >
                                Let&apos;s Help You Run Your Gym Better{" "}
                                
                            </motion.h1>

                            <motion.p
                                variants={fadeIn}
                                className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
                            >
                                Ready to transform your fitness business? Our team is here to help you every step of the way.
                            </motion.p>

                            {/* Quick Stats */}
                            <motion.div variants={fadeIn} className="flex gap-8 mb-10">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">20+</p>
                                    <p className="text-sm text-gray-500">Gyms Powered</p>
                                </div>
                                <div className="w-px bg-gray-200"></div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">24/7</p>
                                    <p className="text-sm text-gray-500">Support</p>
                                </div>
                                <div className="w-px bg-gray-200"></div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">98%</p>
                                    <p className="text-sm text-gray-500">Satisfaction</p>
                                </div>
                            </motion.div>

                            {/* Trusted By Logos */}
                            <motion.div variants={fadeIn} className="pt-8 border-t border-gray-100">
                                <p className="text-sm font-semibold text-gray-500 mb-5 uppercase tracking-wider">
                                    Trusted by the largest gyms in Ethiopia
                                </p>
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                                    {[
                                        { src: "/logos/edf-logo.png", alt: "EDF", width: 2558, height: 1158 },
                                        { src: "/logos/grand-palace-logo.png", alt: "Grand Palace", width: 7202, height: 1158 },
                                        { src: "/logos/radiant-logo.png", alt: "Radiant", width: 2558, height: 1158 },
                                        { src: "/logos/roots-logo.png", alt: "Roots", width: 3788, height: 1158 },
                                    ].map((logo) => (
                                        <div
                                            key={logo.alt}
                                            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        >
                                            <Image
                                                src={logo.src}
                                                alt={`${logo.alt} Logo`}
                                                width={logo.width}
                                                height={logo.height}
                                                className="h-6 sm:h-7 w-auto object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Contact Options */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--brand)]/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-100 rounded-full blur-3xl"></div>

                            {/* Contact Options */}
                            <div className="relative space-y-8">
                                {/* Phone Section */}
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[var(--brand)]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Phone size={24} weight="fill" className="text-[var(--brand)]" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-lg">Call Us</h3>
                                    </div>
                                    <div className="flex flex-col gap-2 pl-16">
                                        <a href="tel:+251910428013" className="text-gray-600 hover:text-[var(--brand)] transition-colors">
                                            +251 91 042 8013
                                        </a>
                                        <a href="tel:+251942310367" className="text-gray-600 hover:text-[var(--brand)] transition-colors">
                                            +251 94 231 0367
                                        </a>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100"></div>

                                {/* Email Section */}
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[var(--brand)]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Envelope size={24} weight="fill" className="text-[var(--brand)]" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-lg">Email Us</h3>
                                    </div>
                                    <div className="flex flex-col gap-2 pl-16">
                                        <a href="mailto:info@woverasolutions.com" className="text-gray-600 hover:text-[var(--brand)] transition-colors">
                                            info@woverasolutions.com
                                        </a>
                                        <a href="mailto:tettemqe@woverasolutions.com" className="text-gray-600 hover:text-[var(--brand)] transition-colors">
                                            tettemqe@woverasolutions.com
                                        </a>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-100"></div>

                                {/* Telegram Section */}
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[var(--brand)]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Image
                                                src="/logos/Telegram_logo.svg"
                                                alt="Telegram"
                                                width={24}
                                                height={24}
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 text-lg">Chat on Telegram</h3>
                                    </div>
                                    <div className="pl-16">
                                        <a
                                            href="https://t.me/tettemqe"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--brand)] transition-colors"
                                        >
                                            @tettemqe
                                            <span className="text-sm text-gray-400">— Get instant responses</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
