"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Smartphone, ShieldCheck, CheckCircle2, Menu } from "lucide-react";

export default function FeaturesGrid() {
    return (
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
    );
}
