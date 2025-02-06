import { z } from "zod";
import { defineQuery } from "next-sanity";
import { fetchSanityData, urlFor } from "../lib";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const HomeDataSchema = z.custom<any>();

export default async function getHome() {
  const QUERY_HOME = defineQuery(`*[_type == "home"]`);

  const data = await fetchSanityData({
    params: {
      query: QUERY_HOME,
    },
    dataSchema: HomeDataSchema,
  });

  const imagesUrl = data[0]?.banner_section.images.map((image: SanityImageSource) =>
    urlFor(image).url()
  );

  data[0].banner_section.images = imagesUrl;

  return data[0];
}
