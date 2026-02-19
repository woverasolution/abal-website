import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import { getAllPostSlugs, getPostBySlug } from "@/sanity/lib/api";
import { isSanityConfigured } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : null;

  return {
    title: post.title,
    description: post.excerpt || "Read the latest article from the Abal blog.",
    alternates: {
      canonical: `https://abal.et/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || "Read the latest article from the Abal blog.",
      type: "article",
      url: `https://abal.et/blog/${slug}`,
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
        </article>
      </main>

      <Footer />
    </div>
  );
}
