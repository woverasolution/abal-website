"use client";

import { motion } from "framer-motion";
import { UserPlus, Phone, Target, TrendingUp, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function LeadManagement() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Subtle Background Element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gray-50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Content Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="w-full lg:w-1/2"
                    >
                        <motion.div variants={fadeIn}>
                            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                Lead Management
                            </p>
                        </motion.div>

                        <motion.h2
                            variants={fadeIn}
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
                        >
                            Every fitness center visitor is a{" "}
                            <span className="text-gray-900">
                                customer waiting to happen
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn}
                            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
                        >
                            Someone walked into your gym. They looked around, asked questions, maybe even tried a machine. Then they left. In most Ethiopian gyms, that&apos;s where the story ends.{" "}
                            <span className="font-semibold text-gray-900">It shouldn&apos;t be.</span>
                        </motion.p>

                        <motion.div
                            variants={fadeIn}
                            className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100"
                        >
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-bold text-gray-900">The reality:</span> If someone takes the time to visit your gym, they&apos;re already interested. They&apos;re a warm lead. But without a system to capture their contact and follow up, you&apos;re leaving money on the table—every single day.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Capture Every Lead",
                                    desc: "Abal's lead management captures visitor names and phone numbers instantly. No more forgotten faces or lost opportunities.",
                                    icon: UserPlus,
                                },
                                {
                                    title: "Follow Up with Purpose",
                                    desc: "Send targeted promotions, new service announcements, or limited-time offers directly to people who already showed interest.",
                                    icon: Phone,
                                },
                                {
                                    title: "Convert Browsers to Members",
                                    desc: "Turn casual visitors into paying members with systematic follow-ups. A simple reminder can be the difference between a lost lead and a new customer.",
                                    icon: Target,
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0">
                                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-gray-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            {/* Main Visual Container */}
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100/80 rounded-2xl p-8 lg:p-10 border border-gray-200/60">

                                {/* Lead Capture Flow Visualization */}
                                <div className="space-y-5">
                                    {/* Step 1: Visitor Enters */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                            <UserPlus className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                            <p className="text-xs text-gray-400 mb-1">New Visitor</p>
                                            <p className="font-medium text-gray-900 text-sm">Someone walks in...</p>
                                        </div>
                                    </motion.div>

                                    {/* Arrow */}
                                    <div className="flex justify-center">
                                        <ArrowRight className="w-4 h-4 text-gray-300 rotate-90" />
                                    </div>

                                    {/* Step 2: Capture Info */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                                            <p className="text-xs text-gray-500 mb-2 font-medium">Abal Captures</p>
                                            <div className="flex gap-3">
                                                <div className="flex-1">
                                                    <div className="text-[10px] text-gray-400 mb-1">Name</div>
                                                    <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-[10px] text-gray-400 mb-1">Phone</div>
                                                    <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Arrow */}
                                    <div className="flex justify-center">
                                        <ArrowRight className="w-4 h-4 text-gray-300 rotate-90" />
                                    </div>

                                    {/* Step 3: Follow Up */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                                            <p className="text-xs text-gray-500 mb-1 font-medium">You Follow Up</p>
                                            <p className="text-sm text-gray-600">&quot;Hi! This week only: 20% off...&quot;</p>
                                        </div>
                                    </motion.div>

                                    {/* Arrow */}
                                    <div className="flex justify-center">
                                        <ArrowRight className="w-4 h-4 text-gray-300 rotate-90" />
                                    </div>

                                    {/* Step 4: Conversion - Brand Green (the payoff) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="bg-[var(--brand)] rounded-xl p-5 text-white"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-white/70 text-xs mb-1">Result</p>
                                                <p className="font-bold text-base">New Member Signed Up!</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-xl shadow-lg border border-gray-100 p-4 w-[160px]"
                            >
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Potential Revenue</div>
                                <div className="text-xl font-bold text-[var(--brand)]">+35%</div>
                                <div className="text-xs text-gray-500">from captured leads</div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
