"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MemberExperience() {
    return (
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
    );
}
