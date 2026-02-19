import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/sanity/lib/api";
import { isSanityConfigured } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, playbooks, and product updates for gym owners and fitness operators.",
  alternates: {
    canonical: "https://abal.et/blog",
  },
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

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <section className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Resources
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-gray-900 sm:text-5xl">
            Abal Blog
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Practical growth, retention, and operations playbooks for gym and
            fitness business owners.
          </p>
        </section>

        {!isSanityConfigured && (
          <section className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <h2 className="text-lg font-semibold text-amber-900">
              Sanity is not connected yet
            </h2>
            <p className="mt-2 text-sm text-amber-800">
              Add Sanity environment variables to show blog content.
            </p>
          </section>
        )}

        {isSanityConfigured && posts.length === 0 && (
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              No posts published yet
            </h2>
            <p className="mt-2 text-gray-600">
              Create your first post in Sanity Studio and publish it.
            </p>
          </section>
        )}

        <section className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            const coverImageUrl = post.mainImage
              ? urlForImage(post.mainImage)
                  .width(1200)
                  .height(675)
                  .fit("crop")
                  .auto("format")
                  .url()
              : null;

            return (
              <article
                key={post._id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {coverImageUrl ? (
                    <Image
                      src={coverImageUrl}
                      alt={post.mainImage?.alt || post.title}
                      width={1200}
                      height={675}
                      className="h-56 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-gray-100 text-gray-500">
                      No image
                    </div>
                  )}
                </Link>

                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.authorName && <span>• {post.authorName}</span>}
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[var(--brand)]"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-600">{post.excerpt}</p>
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
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
