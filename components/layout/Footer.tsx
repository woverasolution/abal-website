"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/images/abal-logo.svg"
                                alt="Abal Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <span className="text-xl font-bold text-gray-900">Abal</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The most elegant and powerful gym management software on the market. Built for modern fitness businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-[var(--brand)]">Features</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand)]">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand)]">API</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand)]">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-[var(--brand)]">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand)]">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand)]">Blog</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand)]">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-[var(--brand)]">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand)]">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Abal. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Social placeholders */}
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
