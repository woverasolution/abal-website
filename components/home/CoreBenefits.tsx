"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, TrendingUp } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

const benefits = [
    {
        title: "Smart Access Control",
        body: "Stop revenue leakage at the door. Connect Abal to your turnstiles or biometric scanners to automatically block unpaid members from entering.",
        icon: ShieldCheck,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-100",
    },
    {
        title: "Automated Billing & Payments",
        body: "Never miss a payment. Track daily sales, manage recurring memberships, and accept local payments like Telebirr directly in the system.",
        icon: CreditCard,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-100",
    },
    {
        title: "Marketing & Financial Reports",
        body: "Know exactly how your business is performing. View real-time financial reports and send automated SMS reminders to members who need to renew.",
        icon: TrendingUp,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-100",
    },
];

export default function CoreBenefits() {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decorative Blobs - matching Hero density but subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_800px_at_50%_50%,rgba(120,119,198,0.03),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.h2
                        variants={fadeIn}
                        className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4"
                    >
                        Everything You Need to Run a Professional Gym
                    </motion.h2>
                    <motion.div
                        variants={fadeIn}
                        className="h-1.5 w-20 bg-[var(--brand)] mx-auto rounded-full"
                    />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${benefit.bgColor}`}>
                                <benefit.icon className={`w-7 h-7 ${benefit.color}`} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 ml-1">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed ml-1">
                                {benefit.body}
                            </p>

                            {/* Hover line */}
                            <div className={`absolute bottom-0 left-8 right-8 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${benefit.color.replace('text-', 'bg-')}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
