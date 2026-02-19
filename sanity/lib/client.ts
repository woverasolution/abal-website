import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "../env";

export const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: {
    enabled: false,
  },
});

export { isSanityConfigured };
