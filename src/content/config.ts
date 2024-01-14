import { z, defineCollection } from "astro:content"

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    url: z.string(),
    name: z.string(),
    shortName: z.string(),
    maskableIcon: z.string(),

    addShortcut: z.boolean(),
  }),
})

export const collections = {
  projects: projectsCollection,
}
