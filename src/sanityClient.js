import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: "h1sn8xf3",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return imageBuilder(source);
};
