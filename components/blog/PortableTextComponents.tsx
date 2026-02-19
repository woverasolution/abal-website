import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

type PortableTextImageValue = {
  alt?: string;
};

type PortableTextLinkValue = {
  href?: string;
};

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageValue = value as PortableTextImageValue;
      const imageUrl = urlForImage(value)
        .width(1400)
        .height(900)
        .fit("max")
        .auto("format")
        .url();

      if (!imageUrl) {
        return null;
      }

      return (
        <figure className="my-10 overflow-hidden rounded-xl border border-gray-100">
          <Image
            src={imageUrl}
            alt={imageValue.alt || "Blog image"}
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
          />
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-semibold text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl font-semibold text-gray-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-lg leading-8 text-gray-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-4 border-[var(--brand)] pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const linkValue = value as PortableTextLinkValue;
      const href = linkValue?.href || "#";
      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="underline decoration-[var(--brand)] underline-offset-4 hover:text-[var(--brand)]"
        >
          {children}
        </a>
      );
    },
  },
};
