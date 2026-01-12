"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-28 relative">
                    {/* Logo - Left */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2">
                            <Image
                                src="/images/abal-logo.svg"
                                alt="Abal Logo"
                                width={96}
                                height={96}
                                className="w-24 h-24"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Center */}
                    <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                        <div className="bg-white rounded-full px-8 py-3 shadow-lg flex items-center space-x-8">
                            <Link
                                href="/"
                                className={`font-medium transition-colors ${
                                    pathname === "/"
                                        ? "text-[var(--brand)]"
                                        : "text-gray-700 hover:text-[var(--brand)]"
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/pricing"
                                className={`font-medium transition-colors ${
                                    pathname === "/pricing"
                                        ? "text-[var(--brand)]"
                                        : "text-gray-700 hover:text-[var(--brand)]"
                                }`}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/contact"
                                className={`font-medium transition-colors ${
                                    pathname === "/contact"
                                        ? "text-[var(--brand)]"
                                        : "text-gray-700 hover:text-[var(--brand)]"
                                }`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden ml-auto">
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
                        <Link
                            href="/"
                            className={`block px-3 py-4 text-base font-medium rounded-md ${
                                pathname === "/"
                                    ? "text-[var(--brand)] bg-gray-50"
                                    : "text-gray-600 hover:text-[var(--brand)] hover:bg-gray-50"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/pricing"
                            className={`block px-3 py-4 text-base font-medium rounded-md ${
                                pathname === "/pricing"
                                    ? "text-[var(--brand)] bg-gray-50"
                                    : "text-gray-600 hover:text-[var(--brand)] hover:bg-gray-50"
                            }`}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className={`block px-3 py-4 text-base font-medium rounded-md ${
                                pathname === "/contact"
                                    ? "text-[var(--brand)] bg-gray-50"
                                    : "text-gray-600 hover:text-[var(--brand)] hover:bg-gray-50"
                            }`}
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
