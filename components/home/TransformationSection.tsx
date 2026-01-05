"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, TrendUp, HandWaving, ChartLineUp } from "@phosphor-icons/react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function TransformationSection() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50/50 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side - Elegant & Anchored */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Main Device Frame */}
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200/50">
                            <div className="absolute inset-0 bg-gray-900/5 mix-blend-multiply pointer-events-none" />
                            <Image
                                src="/images/abal-mockup-3.png"
                                alt="Abal Dashboard Interface"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        {/* Anchored Insight Card - Revenue */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="absolute -bottom-8 -right-8 z-20 w-[260px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-1"
                        >
                            <div className="rounded-lg overflow-hidden border border-gray-50">
                                <Image
                                    src="/images/abal-revenue-screenshot.png"
                                    alt="Revenue Growth"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>

                        {/* Anchored Insight Card - Membership */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -top-6 -left-6 z-20 w-[200px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-4 flex gap-3 items-center"
                        >
                            <div className="bg-red-50 text-red-500 p-2 rounded-lg">
                                <HandWaving weight="bold" size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Alert</p>
                                <p className="text-sm font-bold text-gray-900">Entry Denied</p>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Content Side - Clean & Refined */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="w-full lg:w-1/2"
                    >
                        <motion.div variants={fadeIn}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-xs font-bold uppercase tracking-wider mb-6">
                                <TrendUp weight="bold" size={14} />
                                <span>Maximize Profit</span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeIn}
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
                        >
                            Turn your gym into a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] to-emerald-600">
                                money making machine
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn}
                            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg"
                        >
                            Stop chasing payments and drowning in spreadsheets. Abal automates the silent killers of your profit margin so you can focus on growth.
                        </motion.p>

                        <div className="space-y-10">
                            {[
                                {
                                    title: "Eliminate Revenue Leakage",
                                    desc: "Abal's access control instantly restricts entry when a subscription ends—zero exceptions, zero lost revenue.",
                                    icon: HandWaving,
                                },
                                {
                                    title: "End the Manual Follow-ups",
                                    desc: "Automate renewal reminders and marketing campaigns. Save 15+ hours of manual admin work every single week.",
                                    icon: CheckCircle,
                                },
                                {
                                    title: "Real-time Financial Clarity",
                                    desc: "Track every birr in real-time. Monitor daily sales trends and membership growth to make verified, data-driven decisions.",
                                    icon: ChartLineUp,
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn}
                                    className="flex gap-5"
                                >
                                    <div className="shrink-0 pt-1">
                                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                            <item.icon size={20} weight="fill" className="text-[var(--brand)]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
