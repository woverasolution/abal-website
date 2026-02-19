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
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <h1 className="text-2xl font-semibold text-amber-900">
              Sanity is not connected yet
            </h1>
            <p className="mt-3 text-amber-800">
              Add the required Sanity environment variables and refresh this
              page.
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogPostJsonLd
        post={post}
        slug={slug}
        coverImageUrl={coverImageUrl}
        authorImageUrl={authorImageUrl}
      />

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-gray-500 transition hover:text-[var(--brand)]"
        >
          ← Back to blog
        </Link>

        <article className="mt-6">
          <header className="space-y-5">
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              <span>{formatDate(post.publishedAt)}</span>
              {post.authorName && <span>• {post.authorName}</span>}
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg leading-8 text-gray-600">{post.excerpt}</p>
            )}

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-medium text-[var(--brand-dark)]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </header>

          {coverImageUrl && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100">
              <Image
                src={coverImageUrl}
                alt={post.mainImage?.alt || post.title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <section className="mt-10">
            <PortableText
              value={post.body || []}
              components={portableTextComponents}
            />
          </section>

          {(post.authorName || post.authorBio || authorImageUrl) && (
            <section className="mt-14 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-[var(--brand-light)]/30 p-6 sm:p-8">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                {authorImageUrl ? (
                  <Image
                    src={authorImageUrl}
                    alt={post.authorImage?.alt || post.authorName || "Author"}
                    width={120}
                    height={120}
                    className="h-20 w-20 rounded-full border border-gray-200 object-cover sm:h-24 sm:w-24"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-light)] text-xl font-semibold text-[var(--brand-dark)] sm:h-24 sm:w-24">
                    {(post.authorName || "A").charAt(0)}
                  </div>
                )}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                    Written By
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-gray-900">
                    {post.authorName || "Abal Team"}
                  </h2>
                  {post.authorBio && (
                    <p className="mt-2 max-w-2xl text-gray-700">{post.authorBio}</p>
                  )}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
