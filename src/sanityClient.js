import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "h1sn8xf3",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
