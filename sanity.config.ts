import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId, studioTitle } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: studioTitle,
  projectId: projectId || "replace-project-id",
  dataset: dataset || "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
