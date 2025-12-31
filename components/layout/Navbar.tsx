"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/abal-logo.svg"
                                alt="Abal Logo"
                                width={96}
                                height={96}
                                className="w-24 h-24"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Features', 'Solutions', 'Pricing', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-[var(--brand)] font-medium transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                        <button className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white px-6 py-2.5 rounded-md font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-100 shadow-xl"
                >
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {['Features', 'Solutions', 'Pricing', 'About'].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-[var(--brand)] hover:bg-gray-50 rounded-md"
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            <button className="w-full bg-[var(--brand)] text-white px-6 py-3 rounded-lg font-medium">
                                Get Started
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
