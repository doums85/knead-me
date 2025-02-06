import { type SchemaTypeDefinition } from "sanity";
import { user } from "./documents";
import { home } from "./singleton";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    user,

    // Singletons
    home,
  ],
};
