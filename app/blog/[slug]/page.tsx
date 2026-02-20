import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import BlogPostJsonLd from "@/components/seo/BlogPostJsonLd";
import { getAllPostSlugs, getPostBySlug } from "@/sanity/lib/api";
import { isSanityConfigured } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Post } from "@/sanity/types";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://abal.et";
const DEFAULT_AUTHOR = "Abal Team";

function buildPostUrl(slug: string) {
  return `${SITE_URL}/blog/${slug}`;
}

function getPostDescription(post: Post) {
  return (
    post.excerpt ||
    `Read "${post.title}" on the Abal blog for practical gym growth and operations insights.`
  );
}

function getPostKeywords(post: Post) {
  return Array.from(
    new Set([
      "gym management blog",
      "fitness business ethiopia",
      "gym growth strategies",
      ...(post.categories || []),
    ])
  );
}

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

// Simple estimated reading time based on word count
function getReadingTime(text: string) {
  const wordsPerMinute = 200;
  const words = text ? text.split(/\s+/).length : 0;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Simple text extractor for reading time (this approximates from body but isn't perfect)
function extractTextFromBlocks(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join(' ');
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const postUrl = buildPostUrl(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      alternates: {
        canonical: postUrl,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = getPostDescription(post);
  const keywords = getPostKeywords(post);
  const authorName = post.authorName || DEFAULT_AUTHOR;
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : null;

  return {
    title: post.title,
    description,
    keywords,
    authors: [{ name: authorName }],
    creator: authorName,
    publisher: "Wovera Solutions",
    category: post.categories?.[0],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      siteName: "Abal Gym Management",
      locale: "en_US",
      title: post.title,
      description,
      type: "article",
      url: postUrl,
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [authorName],
      section: post.categories?.[0],
      tags: post.categories || [],
      images: imageUrl
        ? [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.mainImage?.alt || post.title,
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : [],
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
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!isSanityConfigured) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-3xl mx-auto px-4 w-full flex items-center justify-center">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center shadow-sm w-full">
            <h1 className="text-2xl font-bold text-amber-900 mb-2">
              Sanity is not connected yet
            </h1>
            <p className="text-amber-800">
              Add the required Sanity environment variables and refresh this page.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.mainImage
    ? urlForImage(post.mainImage)
      .width(1600)
      .height(900)
      .fit("crop")
      .auto("format")
      .url()
    : null;
  const authorImageUrl = post.authorImage
    ? urlForImage(post.authorImage)
      .width(240)
      .height(240)
      .fit("crop")
      .auto("format")
      .url()
    : null;

  const readingTime = getReadingTime(extractTextFromBlocks(post.body || []));

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[var(--brand)]/20 selection:text-[var(--brand-dark)] flex flex-col">
      <Navbar />
      <BlogPostJsonLd
        post={post}
        slug={slug}
        coverImageUrl={coverImageUrl}
        authorImageUrl={authorImageUrl}
      />

      <main className="flex-1 relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Subtle decorative top background */}
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gray-50 -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)] border-b border-gray-100">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 lg:mb-16 text-center flex flex-col items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-600 transition-all hover:text-[var(--brand)] hover:border-[var(--brand)]/30 hover:shadow-sm mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-[var(--brand)] group-hover:-translate-x-0.5 transition-transform" /> Back to Resources
            </Link>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-[var(--brand)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-dark)]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900 mb-8 max-w-3xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mb-8">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium text-gray-500 bg-white border border-gray-100 shadow-sm rounded-full py-2.5 px-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900">{post.authorName || "Abal Team"}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{readingTime}</span>
              </div>
            </div>
          </header>

          {coverImageUrl && (
            <div className="mb-16 lg:mb-20 overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 relative aspect-video bg-gray-100">
              <Image
                src={coverImageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          <div className="mx-auto max-w-[700px]">
            <section className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[var(--brand)] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:border prose-img:border-gray-100 prose-img:shadow-sm mt-10">
              <PortableText
                value={post.body || []}
                components={portableTextComponents}
              />
            </section>

            {/* Author Section */}
            {(post.authorName || post.authorBio || authorImageUrl) && (
              <section className="mt-20 pt-10 border-t border-gray-200/60">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 rounded-3xl p-8 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand)]/5 rounded-bl-full -z-0"></div>
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={post.authorImage?.alt || post.authorName || "Author"}
                      width={120}
                      height={120}
                      className="h-20 w-20 rounded-full border-2 border-white shadow-md object-cover relative z-10 shrink-0"
                    />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white shadow-md bg-[var(--brand-light)] text-xl font-bold text-[var(--brand-dark)] relative z-10 shrink-0">
                      {(post.authorName || "Abal").charAt(0)}
                    </div>
                  )}

                  <div className="text-center sm:text-left relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand)] mb-2">
                      Written By
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {post.authorName || "Abal Team"}
                    </h2>
                    {post.authorBio ? (
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {post.authorBio}
                      </p>
                    ) : (
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        The Abal team shares practical templates, insights, and lessons for building and running a highly profitable fitness business in Ethiopia.
                      </p>
                    )}
                  </div>
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
