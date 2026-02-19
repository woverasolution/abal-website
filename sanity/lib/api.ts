import { client, isSanityConfigured } from "./client";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "./queries";
import { BLOG_TAG, postTag } from "./tags";
import type { Post, PostPreview } from "../types";

export async function getAllPosts(): Promise<PostPreview[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    return await client.fetch<PostPreview[]>(
      postsQuery,
      {},
      { next: { tags: [BLOG_TAG] } }
    );
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await client.fetch<Post | null>(
      postBySlugQuery,
      { slug },
      { next: { tags: [BLOG_TAG, postTag(slug)] } }
    );
  } catch (error) {
    console.error(`Failed to fetch post for slug "${slug}":`, error);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    return await client.fetch<string[]>(
      postSlugsQuery,
      {},
      { next: { tags: [BLOG_TAG] } }
    );
  } catch (error) {
    console.error("Failed to fetch post slugs:", error);
    return [];
  }
}
