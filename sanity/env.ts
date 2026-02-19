export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const studioTitle =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_TITLE || "Abal Content Studio";

export const isSanityConfigured = Boolean(projectId && dataset);
