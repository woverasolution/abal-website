"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--brand-dark)] opacity-10 blur-3xl rounded-l-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800 text-gray-300 font-medium text-sm mb-6">
                            See It In Action
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our website only says so much.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                            Get in touch with us for a free demo and see how Abal can transform the way you run your gym.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="px-10 py-4 bg-[var(--brand)] text-white rounded-full font-bold text-lg hover:bg-[var(--brand-dark)] transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
                            >
                                Get a Free Demo
                            </Link>
                            <a
                                href="tel:+251910428013"
                                className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
                            >
                                <Phone size={20} />
                                Call Now
                            </a>
                        </div>
                    </motion.div>

                    {/* Mockup Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/images/abal-mockup-2.png"
                                alt="Abal mobile app for gym membership management"
                                width={600}
                                height={800}
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
