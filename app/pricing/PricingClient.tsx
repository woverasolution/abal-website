"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plans = [
    {
        name: "Abal Starter",
        description: "Perfect for small gyms just getting started",
        monthlyPrice: 0,
        features: [
            "Up to 100 members",
            "Basic member management",
            "Simple check-in system",
            "Basic reporting",
            "On-site training",
            "Email support",
        ],
        cta: "Get Started Free",
        popular: false,
    },
    {
        name: "Abal Growth",
        description: "For growing gyms ready to scale",
        monthlyPrice: 4600,
        features: [
            "Up to 300 members",
            "Advanced member management",
            "QR code check-in",
            "Payment tracking",
            "SMS notifications",
            "On-site training",
            "Priority email support",
        ],
        cta: "Start Growing",
        popular: false,
    },
    {
        name: "Abal Pro",
        description: "Full-featured solution for established gyms",
        monthlyPrice: 9999,
        features: [
            "Unlimited members",
            "Everything in Growth",
            "Lead management",
            "Advanced analytics",
            "Automated reminders",
            "Phone & email support",
        ],
        cta: "Go Pro",
        popular: true,
    },
    {
        name: "Abal Enterprise",
        description: "For large fitness chains and franchises",
        monthlyPrice: null,
        features: [
            "Unlimited members",
            "Everything in Pro",
            "Multi-location support",
            "Custom integrations",
            "Dedicated account manager",
            "On-site training",
            "24/7 priority support",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function PricingClient() {
    const [isYearly, setIsYearly] = useState(false);

    const getPrice = (monthlyPrice: number | null) => {
        if (monthlyPrice === null) return null;
        if (monthlyPrice === 0) return 0;
        return isYearly ? Math.round(monthlyPrice * 0.9) : monthlyPrice;
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(18,120,88,0.12),rgba(255,255,255,0))]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-xs font-bold uppercase tracking-wider">
                                Pricing
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6"
                        >
                            Simple, transparent pricing
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
                        >
                            Choose the plan that fits your gym. Start free and upgrade as you grow.
                        </motion.p>

                        

                    {/* Free Trial Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="bg-[var(--brand)]/5 border border-[var(--brand)]/20 rounded-2xl p-6 mb-12 text-center"
                    >
                        <p className="text-lg font-semibold text-gray-900 mb-1">
                            30-day free trial on all plans
                        </p>
                        <p className="text-gray-600">
                            No contracts or commitments. We just want you to see Abal in action.
                        </p>
                    </motion.div>
                    {/* Billing Toggle - Desktop (inline) */}
                    <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="hidden md:flex items-center justify-center gap-3"
                        >
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    !isYearly
                                        ? 'bg-[var(--brand)] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    isYearly
                                        ? 'bg-[var(--brand)] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Yearly
                                <span className={`ml-2 text-xs ${isYearly ? 'text-white/80' : 'text-[var(--brand)]'}`}>
                                    Save 10%
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Billing Toggle - Mobile (sticky) */}
                    <div className="md:hidden sticky top-20 z-20 bg-white/95 backdrop-blur-sm py-3 px-4 -mx-4 mb-6 border-b border-gray-100">
                        <div className="flex items-center justify-center gap-3">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    !isYearly
                                        ? 'bg-[var(--brand)] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    isYearly
                                        ? 'bg-[var(--brand)] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                Yearly
                                <span className={`ml-2 text-xs ${isYearly ? 'text-white/80' : 'text-[var(--brand)]'}`}>
                                    Save 10%
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => {
                            const price = getPrice(plan.monthlyPrice);
                            return (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index + 0.4 }}
                                    className={`relative rounded-2xl p-6 ${
                                        plan.popular
                                            ? 'bg-gray-900 text-white ring-2 ring-[var(--brand)]'
                                            : 'bg-white border border-gray-200'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="bg-[var(--brand)] text-white text-xs font-bold px-3 py-1 rounded-full">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                            {plan.name}
                                        </h3>
                                        <p className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        {price !== null ? (
                                            <>
                                                <div className="flex items-baseline gap-1">
                                                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                                        {price.toLocaleString()}
                                                    </span>
                                                    <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                                                        ETB/mo
                                                    </span>
                                                </div>
                                                {price > 0 && isYearly && (
                                                    <p className={`text-xs mt-1 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                                                        Billed yearly ({(price * 12).toLocaleString()} ETB/year)
                                                    </p>
                                                )}
                                                {price === 0 && (
                                                    <p className={`text-xs mt-1 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                                                        Free forever
                                                    </p>
                                                )}
                                            </>
                                        ) : (
                                            <div className="flex items-baseline gap-1">
                                                <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                                    Custom
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check
                                                    size={18}
                                                    className="shrink-0 mt-0.5 text-[var(--brand)]"
                                                />
                                                <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-all ${
                                            plan.popular
                                                ? 'bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]'
                                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* FAQ or Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-gray-600">
                            Have questions?{' '}
                            <Link href="/contact" className="text-[var(--brand)] font-semibold hover:underline">
                                Contact our team
                            </Link>
                            {' '}for a personalized recommendation.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
