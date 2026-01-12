"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Info } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

const testimonials = [
    {
        quote: "Running a gym as big as EDF was too stressful. Now, Abal and their support team have taken a lot of that stress away.",
        author: "Tomas Hailu",
        role: "General Manager",
        gym: "Ethio Dance Fitness",
        
    },
    
    {
        quote: "Abal transformed how we run our gym. We switched to Abal from a software that comes with a ZKTECO device, and we haven't looked back since.",
        author: "Elias M",
        role: "Operations Executive",
        gym: "The Grand Palace Gym",
        
    },
    
    {
        quote: "So much I could mention but I especially want to highlight how the SMS reminders have cut our late payments by more than half.",
        author: "Henok Tadesse",
        role: "General Manager",
        gym: "Radiant Health Center",
        
    },
];

export default function Testimonials() {
    const [showRetentionInfo, setShowRetentionInfo] = useState(false);

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--brand)]/[0.02] rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
                >
                    <motion.p
                        variants={fadeIn}
                        className="text-sm font-semibold text-[var(--brand)] uppercase tracking-wider mb-4"
                    >
                        Testimonials
                    </motion.p>
                    <motion.h2
                        variants={fadeIn}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-6"
                    >
                        Trusted by gyms across Ethiopia
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        See why gym owners and managers choose Abal to streamline their operations and grow their business.
                    </motion.p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={index}
                            variants={fadeIn}
                            className="group relative bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center mb-6">
                                <Quote className="w-5 h-5 text-[var(--brand)]" />
                            </div>

                            {/* Quote Text */}
                            <blockquote className="text-gray-700 text-[15px] leading-relaxed mb-6">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                                {/* Avatar placeholder */}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand)]/5 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-[var(--brand)]">
                                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {testimonial.role}, {testimonial.gym}
                                    </p>
                                </div>
                            </div>

                            {/* Member count badge */}
                            <div className="absolute top-6 right-6">
                                
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mt-16 lg:mt-20 flex flex-wrap justify-center gap-8 lg:gap-16"
                >
                        <div className="text-center">
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900">20+</p>
                        <p className="text-sm text-gray-500 mt-1">Gyms using Abal</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900">15,000+</p>
                        <p className="text-sm text-gray-500 mt-1">Members managed</p>
                    </div>
                    <div className="text-center relative group">
                        <div className="absolute -top-1 right-0 translate-x-full ml-1">
                            <button
                                onClick={() => setShowRetentionInfo(!showRetentionInfo)}
                                className="focus:outline-none"
                                aria-label="More info about client retention"
                            >
                                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                            </button>
                            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg transition-opacity duration-200 whitespace-nowrap ${showRetentionInfo ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'} pointer-events-none`}>
                                No gym has ever stopped their Abal subscription
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                            </div>
                        </div>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-900">100%</p>
                        <p className="text-sm text-gray-500 mt-1">Client Retention</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
