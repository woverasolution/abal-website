"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ArrowRight, Calendar, User } from "lucide-react";

function formatDate(dateString?: string) {
    if (!dateString) {
        return "No publish date";
    }

    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogList({ posts }: { posts: any[] }) {
    if (!posts || posts.length === 0) return null;

    const featuredPost = posts[0];
    const remainingPosts = posts.slice(1);

    const getImageUrl = (image: any, width: number, height: number) => {
        if (!image) return null;
        return urlForImage(image)
            .width(width)
            .height(height)
            .fit("crop")
            .auto("format")
            .url();
    };

    return (
        <div className="w-full">
            {/* Featured Post */}
            {featuredPost && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mb-16 md:mb-24"
                >
                    <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="group flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white rounded-[2rem] border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-gray-300/80 transition-all duration-500 overflow-hidden"
                    >
                        <div className="lg:w-3/5 overflow-hidden relative min-h-[300px] lg:min-h-[400px]">
                            {featuredPost.mainImage ? (
                                <Image
                                    src={getImageUrl(featuredPost.mainImage, 1200, 800) || ""}
                                    alt={featuredPost.mainImage?.alt || featuredPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400">
                                    No cover image
                                </div>
                            )}
                            {/* Gradient Overlay for subtle text contrast if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {featuredPost.categories?.map((category: string) => (
                                    <span
                                        key={category}
                                        className="rounded-full bg-[var(--brand)]/10 px-3.5 py-1.5 text-xs font-semibold text-[var(--brand-dark)] tracking-wide"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-[1.2] group-hover:text-[var(--brand)] transition-colors duration-300">
                                {featuredPost.title}
                            </h2>

                            {featuredPost.excerpt && (
                                <p className="text-lg text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                            )}

                            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <span>{formatDate(featuredPost.publishedAt)}</span>
                                    </div>
                                    {featuredPost.authorName && (
                                        <div className="flex items-center gap-1.5 hidden sm:flex">
                                            <User className="w-4 h-4 text-gray-400" />
                                            <span>{featuredPost.authorName}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 text-[var(--brand)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            )}

            {/* Remaining Posts Grid */}
            {remainingPosts.length > 0 && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {remainingPosts.map((post: any) => (
                        <motion.article
                            variants={fadeIn}
                            key={post._id}
                            className="group flex flex-col bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-gray-300/80 transition-all duration-500 overflow-hidden"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/10]">
                                {post.mainImage ? (
                                    <Image
                                        src={getImageUrl(post.mainImage, 800, 500) || ""}
                                        alt={post.mainImage?.alt || post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400">
                                        No cover image
                                    </div>
                                )}
                            </Link>

                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.categories?.map((category: string) => (
                                        <span
                                            key={category}
                                            className="rounded-full bg-[var(--brand)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--brand-dark)] uppercase tracking-wider"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--brand)] transition-colors duration-300">
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        {post.title}
                                    </Link>
                                </h3>

                                {post.excerpt && (
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                                        {post.excerpt}
                                    </p>
                                )}

                                <div className="mt-auto border-t border-gray-100 pt-5 flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                        <span>{formatDate(post.publishedAt)}</span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="flex items-center gap-1 text-[var(--brand)] font-medium group-hover:gap-2 transition-all duration-300"
                                    >
                                        Read <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
