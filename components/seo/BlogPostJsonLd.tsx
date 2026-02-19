import type { Post } from "@/sanity/types";

const SITE_URL = "https://abal.et";

type BlogPostJsonLdProps = {
  post: Post;
  slug: string;
  coverImageUrl: string | null;
  authorImageUrl: string | null;
};

export default function BlogPostJsonLd({
  post,
  slug,
  coverImageUrl,
  authorImageUrl,
}: BlogPostJsonLdProps) {
  const postUrl = `${SITE_URL}/blog/${slug}`;
  const authorName = post.authorName || "Abal Team";
  const description =
    post.excerpt ||
    `Read "${post.title}" on the Abal blog for practical gym business insights.`;

  const article = {
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: authorName,
      ...(post.authorBio ? { description: post.authorBio } : {}),
      ...(authorImageUrl ? { image: authorImageUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Wovera Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/abal-logo.svg`,
      },
    },
    ...(post.publishedAt
      ? {
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
        }
      : {}),
    ...(coverImageUrl ? { image: [coverImageUrl] } : {}),
    ...(post.categories && post.categories.length > 0
      ? {
          articleSection: post.categories[0],
          keywords: post.categories.join(", "),
        }
      : {}),
    inLanguage: "en",
  };

  const breadcrumbs = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [article, breadcrumbs],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
