import { z } from "zod";
import catchError from "@/lib/catchError";
import { sanityFetch } from "./live";

const SanityResponseSchema = <T>(dataSchema: z.ZodType<T>) =>
  z.object({
    data: dataSchema.optional(),
  });

const FetchSanityParamsSchema = z.object({
  query: z.string(),
  params: z.record(z.any()).optional(),
});

type FetchSanityDataParams<T> = {
  params: z.infer<typeof FetchSanityParamsSchema>;
  dataSchema: z.ZodType<T>;
};

export default async function fetchSanityData<T>({
  params,
  dataSchema,
}: FetchSanityDataParams<T>): Promise<T> {
  const validatedParams = FetchSanityParamsSchema.parse(params);
  const [error, response] = await catchError(sanityFetch(validatedParams));

  if (error) {
    console.error("Error fetching Sanity data:", error);
    return [] as T;
  }

  const validatedResponse = SanityResponseSchema(dataSchema).safeParse(response);

  if (!validatedResponse.success) {
    console.error("Invalid response data:", validatedResponse.error);
    return [] as T;
  }

  return validatedResponse.data.data ?? ([] as T);
}
