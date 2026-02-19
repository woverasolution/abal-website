import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { BLOG_TAG, postTag } from "@/sanity/lib/tags";

type SanityWebhookBody = {
  _type?: string;
  slug?: string | { current?: string };
};

function resolveSlug(body: SanityWebhookBody | null): string | null {
  if (!body?.slug) {
    return null;
  }

  if (typeof body.slug === "string") {
    return body.slug;
  }

  return body.slug.current || null;
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;

    if (!secret) {
      return NextResponse.json(
        { message: "Missing SANITY_REVALIDATE_SECRET" },
        { status: 500 }
      );
    }

    const { isValidSignature, body } = await parseBody<SanityWebhookBody>(
      req,
      secret,
      true
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature", isValidSignature },
        { status: 401 }
      );
    }

    const type = body?._type || null;

    revalidateTag(BLOG_TAG, "max");
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");

    const slug = resolveSlug(body || null);
    if (type === "post" && slug) {
      revalidateTag(postTag(slug), "max");
      revalidatePath(`/blog/${slug}`);
    } else {
      // Author/category updates affect many post pages, so invalidate blog subtree.
      revalidatePath("/blog", "layout");
    }

    return NextResponse.json({
      revalidated: true,
      type,
      slug,
    });
  } catch (error) {
    console.error("Failed to process Sanity revalidation webhook:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
