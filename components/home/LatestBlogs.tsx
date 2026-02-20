import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "@/sanity/lib/api";
import { urlForImage } from "@/sanity/lib/image";

function formatDate(dateString?: string) {
    if (!dateString) {
        return "No publish date";
    }

    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default async function LatestBlogs() {
    const posts = await getAllPosts();

    // Only show the 3 latest posts
    const latestPosts = posts.slice(0, 3);

    if (!latestPosts || latestPosts.length === 0) {
        return null;
    }

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
        <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-x-0 top-0 h-[500px] bg-gray-50 -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)] border-b border-gray-100">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-[var(--brand)] uppercase tracking-wider mb-4">
                            Resources & Playbooks
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-6">
                            Insights to grow your gym business.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Practical growth, retention, and operations playbooks for fitness owners in Ethiopia.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-900 hover:text-[var(--brand)] hover:border-[var(--brand)]/30 hover:shadow-sm transition-all group shrink-0"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {latestPosts.map((post: any) => (
                        <article
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
                                    {post.categories?.slice(0, 2).map((category: string) => (
                                        <span
                                            key={category}
                                            className="rounded-full bg-[var(--brand)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--brand-dark)] uppercase tracking-wider line-clamp-1"
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
                        </article>
                    ))}
                </div>

                <div className="mt-10 md:hidden flex justify-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-900 hover:text-[var(--brand)] hover:border-[var(--brand)]/30 hover:shadow-sm transition-all group"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
