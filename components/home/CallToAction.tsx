"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--brand-light)] -z-20"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--brand)] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                    Ready to upgrade your gym?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                    Join hundreds of forward-thinking fitness studios and gyms who trust Abal to power their growth.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-10 py-4 bg-[var(--brand)] text-white rounded-full font-bold text-lg hover:bg-[var(--brand-dark)] transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200">
                        Get Started for Free
                    </button>
                    <button className="px-10 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all">
                        Schedule Demo
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
