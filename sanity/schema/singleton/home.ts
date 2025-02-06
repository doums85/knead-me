import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";
import { Home } from "lucide-react";

export default defineType({
  type: "document",
  name: "home",
  title: "Page d'accueil",
  icon: Home,

  fields: [
    /* Home Section */
    defineField({
      name: "banner_section",
      title: "Section de bannière",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Titre",
          type: "string",
          description: "Le titre de la bannière",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          description: "Les images de la bannière",
          validation: (Rule) => Rule.required(),
          of: [
            {
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        }),
      ],
    }),
  ],
});
