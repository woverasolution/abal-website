import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/sanity/lib/api";
import { isSanityConfigured } from "@/sanity/lib/client";
import BlogList from "./BlogList";

const BLOG_URL = "https://abal.et/blog";
const BLOG_DESCRIPTION =
  "Insights, playbooks, and product updates for gym owners and fitness operators.";

export const metadata: Metadata = {
  title: "Blog",
  description: BLOG_DESCRIPTION,
  keywords: [
    "gym management blog",
    "fitness business ethiopia",
    "gym operations insights",
    "gym retention strategies",
    "Abal blog",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title: "Abal Blog",
    description: BLOG_DESCRIPTION,
    url: BLOG_URL,
    siteName: "Abal Gym Management",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abal Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abal Blog",
    description: BLOG_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@abal_et",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Subtle Grid Background for Premium Feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[var(--brand)]/10 text-[var(--brand-dark)] text-sm font-bold tracking-widest uppercase mb-6 shadow-sm ring-1 ring-inset ring-[var(--brand)]/20">
              Resources & Playbooks
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-8">
              Discover <br className="hidden md:block" />
              <span className="text-[var(--brand)] relative inline-block">
                Gym Growth Secrets
                <svg className="absolute -bottom-2 w-full h-3 text-[var(--brand)]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl">
              Practical growth, retention, and operations playbooks for gym and fitness owners.
              Get actionable insights to run a better business.
            </p>
          </div>

          {!isSanityConfigured && (
            <div className="mb-12 rounded-2xl border border-amber-300 bg-amber-50 p-8 max-w-2xl mx-auto text-center shadow-sm">
              <h2 className="text-lg font-semibold text-amber-900">
                Sanity is not connected yet
              </h2>
              <p className="mt-2 text-amber-800 font-medium">
                Add Sanity environment variables to show blog content.
              </p>
            </div>
          )}

          {isSanityConfigured && posts.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow p-16 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                No posts published yet
              </h2>
              <p className="text-gray-600 text-lg">
                Create your first post in Sanity Studio and publish it to see it here.
              </p>
            </div>
          )}

          <BlogList posts={posts} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
