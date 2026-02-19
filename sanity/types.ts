import type { TypedObject } from "@portabletext/types";

export type SanityImage = {
  _type?: "image";
  alt?: string;
  asset?: {
    _ref: string;
    _type: "reference";
  };
};

export type PostPreview = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  authorName?: string;
  authorBio?: string;
  authorImage?: SanityImage;
  categories?: string[];
};

export type Post = PostPreview & {
  body?: TypedObject[];
};
