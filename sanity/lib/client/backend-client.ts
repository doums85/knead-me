"server-only";

import { frontendClient } from "./frontend-client";

// if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN is not defined");

export const backendClient = frontendClient.withConfig({
  token: process.env.SANITY_API_TOKEN,
});
