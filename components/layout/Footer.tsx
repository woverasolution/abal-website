"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    {/* Logo and Description */}
                    <div className="max-w-sm">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/abal-logo.svg"
                                alt="Abal Logo"
                                width={80}
                                height={80}
                                className="w-20 h-20"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The most powerful gym management software on the market. Built for modern fitness businesses in Ethiopia and beyond.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16">
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><Link href="/blog" className="hover:text-[var(--brand)]">Blog</Link></li>
                                <li><Link href="/pricing" className="hover:text-[var(--brand)]">Pricing</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><Link href="/contact" className="hover:text-[var(--brand)]">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Abal. All rights reserved.
                    </p>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-400 text-xs">
                        Abal is a product of{" "}
                        <a 
                            href="https://woverasolutions.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[var(--brand)] transition-colors underline"
                        >
                            Wovera Solutions PLC
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
