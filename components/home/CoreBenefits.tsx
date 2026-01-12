"use client";

import { motion } from "framer-motion";
import {
    Users,
    CalendarCheck,
    CreditCard,
    MessageSquare,
    ArrowRight,
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

const features = [
    {
        title: "Membership and Access Management",
        microHeadline: "Control who can train at all times.",
        description:
            "Manage gym memberships, expirations, freezes, and access rules from one place, with optional biometric and turnstile integrations.",
        icon: Users,
        visual: "access",
    },
    {
        title: "Daily Gym Operations",
        microHeadline: "Software designed for real gym workflows.",
        description:
            "Run daily gym operations smoothly with fast check-ins, class scheduling, trainer management, and staff role control.",
        icon: CalendarCheck,
        visual: "operations",
    },
    {
        title: "Payments and Revenue Tracking",
        microHeadline: "Improve revenue collection and visibility.",
        description:
            "Track membership payments, outstanding balances, and revenue performance using clear reports built for gym owners and managers.",
        icon: CreditCard,
        visual: "payments",
    },
    {
        title: "Built-in SMS Marketing and Communication",
        microHeadline: "Increase retention and reduce missed payments.",
        description:
            "Send payment reminders, promotional offers, and updates directly to members. Keep your gym top of mind without manual effort.",
        icon: MessageSquare,
        visual: "sms",
    },
];

// Access Visual - Member scanning in, status verified
function AccessVisual() {
    return (
        <div className="relative flex items-center justify-center h-full p-4">
            <div className="relative">
                {/* Member card being scanned */}
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 w-[130px]"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                        <div className="flex-1">
                            <div className="h-2 w-14 bg-gray-200 rounded-full mb-1"></div>
                            <div className="h-1.5 w-10 bg-gray-100 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] text-gray-400">Status</span>
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]"></div>
                            <span className="text-[9px] font-medium text-[var(--brand)]">Active</span>
                        </div>
                    </div>
                </motion.div>

                {/* Access granted indicator */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-2 -right-2 bg-[var(--brand)] text-white text-[8px] font-medium px-2 py-1 rounded-full shadow-sm"
                >
                    Entry allowed
                </motion.div>
            </div>
        </div>
    );
}

// Operations Visual - Today's schedule snapshot
function OperationsVisual() {
    return (
        <div className="relative flex items-center justify-center h-full p-4">
            <div className="w-[130px]">
                <div className="text-[9px] text-gray-400 mb-2 font-medium">Today</div>
                <div className="space-y-1.5">
                    {[
                        { time: "6:00", label: "Opening", done: true },
                        { time: "9:30", label: "Yoga Class", done: true },
                        { time: "14:00", label: "PT Session", done: false },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.15 }}
                            className={`flex items-center gap-2 p-1.5 rounded-lg ${
                                item.done ? "bg-gray-50" : "bg-[var(--brand)]/5 border border-[var(--brand)]/20"
                            }`}
                        >
                            <span className="text-[9px] text-gray-400 w-8">{item.time}</span>
                            <span className={`text-[10px] ${item.done ? "text-gray-500" : "text-gray-700 font-medium"}`}>
                                {item.label}
                            </span>
                            {item.done && (
                                <div className="ml-auto w-3 h-3 rounded-full bg-gray-200 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Payments Visual - Revenue snapshot with trend
function PaymentsVisual() {
    return (
        <div className="relative flex items-center justify-center h-full p-4">
            <div className="w-[130px]">
                <div className="text-[9px] text-gray-400 mb-1 font-medium">This Month</div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg font-bold text-gray-900 mb-3"
                >
                    148,500 <span className="text-[10px] font-normal text-gray-400">ETB</span>
                </motion.div>

                {/* Simple trend bars */}
                <div className="flex items-end gap-1 h-10">
                    {[35, 45, 40, 55, 50, 65, 80].map((height, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                            className={`flex-1 rounded-sm ${
                                i === 6 ? "bg-[var(--brand)]" : "bg-[var(--brand)]/20"
                            }`}
                        />
                    ))}
                </div>
                <div className="flex justify-between mt-1">
                    <span className="text-[8px] text-gray-300">Week 1</span>
                    <span className="text-[8px] text-gray-400">Now</span>
                </div>
            </div>
        </div>
    );
}

// SMS Visual - Message thread showing real value
function SmsVisual() {
    return (
        <div className="relative flex items-center justify-center h-full p-4">
            <div className="space-y-2 w-[140px]">
                <motion.div
                    initial={{ y: 5, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 px-2.5 py-2"
                >
                    <p className="text-[9px] text-gray-600 leading-relaxed">
                        Your membership expires in 3 days. Renew now to keep training.
                    </p>
                    <p className="text-[8px] text-gray-300 mt-1">Sent to 24 members</p>
                </motion.div>

                <motion.div
                    initial={{ y: 5, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[var(--brand)]/5 border border-[var(--brand)]/20 rounded-lg px-2.5 py-2"
                >
                    <p className="text-[9px] text-gray-700 leading-relaxed">
                        This week only: 20% off 3-month plans
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

const visualComponents = {
    access: AccessVisual,
    operations: OperationsVisual,
    payments: PaymentsVisual,
    sms: SmsVisual,
};

export default function CoreBenefits() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-20 lg:mb-24"
                >
                    <motion.p
                        variants={fadeIn}
                        className="text-sm font-semibold text-[var(--brand)] uppercase tracking-wider mb-4"
                    >
                        Feature Overview
                    </motion.p>
                    <motion.h2
                        variants={fadeIn}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-6"
                    >
                        Gym management software built for how gyms actually run.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        Abal is a modern gym management system that helps gyms
                        manage memberships, daily operations, payments, and
                        member communication in one reliable platform.
                    </motion.p>
                </motion.div>

                {/* Features Grid - 2x2 with more vertical spacing */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-8 lg:gap-y-10"
                >
                    {features.map((feature, index) => {
                        const VisualComponent =
                            visualComponents[
                                feature.visual as keyof typeof visualComponents
                            ];

                        return (
                            <motion.article
                                key={index}
                                variants={fadeIn}
                                className="group relative bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-gray-300/80 transition-all duration-500 overflow-hidden"
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Content */}
                                    <div className="flex-1 p-6 lg:p-8">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center mb-5">
                                            <feature.icon className="w-5 h-5 text-[var(--brand)]" />
                                        </div>

                                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-snug">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm font-medium text-[var(--brand)]/80 mb-3">
                                            {feature.microHeadline}
                                        </p>

                                        <p className="text-gray-600 text-[15px] leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Visual */}
                                    <div className="lg:w-44 h-36 lg:h-auto bg-gray-50/80 border-t lg:border-t-0 lg:border-l border-gray-100 group-hover:bg-gray-50 transition-colors duration-500 flex items-center justify-center">
                                        <VisualComponent />
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                {/* <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mt-16 text-center"
                >
                    <button className="group inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:text-[var(--brand-dark)] transition-colors">
                        Explore all features
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div> */}
            </div>
        </section>
    );
}
