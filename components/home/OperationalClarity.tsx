"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function OperationalClarity() {
    return (
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
    );
}
