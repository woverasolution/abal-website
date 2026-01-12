"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, TrendingUp, ArrowRight, CheckCircle2, Lock, Smartphone, PieChart, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function CoreBenefits() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                            Built with substance.<br />
                            Designed for growth.
                        </h2>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Abal brings together the three pillars of modern gym management into one cohesive, beautiful interface.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="hidden md:block"
                    >
                        <button className="group flex items-center gap-2 text-[var(--brand)] font-semibold text-lg hover:text-[var(--brand-dark)] transition-colors">
                            View all features
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Card 1: Security */}
                    <motion.div
                        variants={fadeIn}
                        className="group relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="p-8 pb-0">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Access</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Connect biometrics and turnstiles to block unpaid members instantly at the door.
                            </p>
                        </div>

                        {/* Visual Stage */}
                        <div className="mt-auto h-48 bg-gray-50 relative overflow-hidden border-t border-gray-100 group-hover:bg-blue-50/50 transition-colors duration-500">
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Visual Element: Verified Badge */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-500">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <CheckCircle2 className="w-6 h-6 fill-green-600 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">Access Granted</div>
                                            <div className="text-xs text-gray-500">Verified Member</div>
                                        </div>
                                    </div>
                                    {/* Decorative floating elements */}
                                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center opacity-60 transform rotate-12 group-hover:translate-y-2 transition-transform duration-700 delay-100">
                                        <Smartphone className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Finance */}
                    <motion.div
                        variants={fadeIn}
                        className="group relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="p-8 pb-0">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Payments</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Accept Telebirr and card payments. Track every cent with automated daily reports.
                            </p>
                        </div>

                        {/* Visual Stage */}
                        <div className="mt-auto h-48 bg-gray-50 relative overflow-hidden border-t border-gray-100 group-hover:bg-emerald-50/50 transition-colors duration-500">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full max-w-[200px]">
                                    {/* Stacked Cards */}
                                    <div className="absolute top-0 w-full h-16 bg-white rounded-xl border border-gray-200 shadow-sm transform scale-90 -translate-y-4 opacity-70 z-0"></div>
                                    <div className="absolute top-0 w-full h-16 bg-white rounded-xl border border-gray-200 shadow-sm transform scale-95 -translate-y-2 opacity-90 z-10"></div>
                                    <div className="relative w-full bg-white rounded-xl border border-emerald-100 shadow-md p-4 z-20 transform group-hover:-translate-y-1 transition-transform duration-300">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="h-2 w-12 bg-gray-200 rounded-full"></div>
                                            <span className="text-xs font-bold text-emerald-600">+1,500 ETB</span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                                            <div className="flex-1">
                                                <div className="h-2 w-20 bg-gray-100 rounded-full mb-1"></div>
                                                <div className="h-1.5 w-10 bg-gray-50 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Growth */}
                    <motion.div
                        variants={fadeIn}
                        className="group relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
                    >
                        <div className="p-8 pb-0">
                            <div className="w-12 h-12 rounded-2xl bg-[rgb(173,250,30)]/20 flex items-center justify-center mb-6 text-[rgb(140,200,25)]">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Data-Driven Growth</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Real-time visualizations of your member retention, revenue, and churn rates.
                            </p>
                        </div>

                        {/* Visual Stage */}
                        <div className="mt-auto h-48 bg-gray-50 relative overflow-hidden border-t border-gray-100 group-hover:bg-[rgb(173,250,30)]/10 transition-colors duration-500">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-end gap-3 h-24 mb-4">
                                    <div className="w-6 bg-[rgb(173,250,30)]/30 rounded-t-lg h-[40%] group-hover:h-[50%] transition-all duration-500"></div>
                                    <div className="w-6 bg-[rgb(173,250,30)]/50 rounded-t-lg h-[60%] group-hover:h-[70%] transition-all duration-500 delay-75"></div>
                                    <div className="w-6 bg-[rgb(173,250,30)]/70 rounded-t-lg h-[50%] group-hover:h-[60%] transition-all duration-500 delay-150"></div>
                                    <div className="w-6 bg-[rgb(173,250,30)] rounded-t-lg h-[80%] group-hover:h-[95%] transition-all duration-500 delay-200 relative">
                                        {/* Tooltip-ish indicator */}
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            +24% Growth
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold text-lg">
                        View all features
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
