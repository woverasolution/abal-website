import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "authorName": coalesce(author->name, "Abal Team"),
    "categories": categories[]->title
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    "authorName": coalesce(author->name, "Abal Team"),
    "categories": categories[]->title
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;
