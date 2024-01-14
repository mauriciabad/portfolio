import { z, defineCollection } from "astro:content"

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    url: z.string().url(),
    sourceCode: z.string().url().optional(),
    name: z.string(),
    shortName: z.string(),
    maskableIcon: z.string().optional(),

    addShortcut: z.boolean(),
  }),
})

export const collections = {
  projects: projectsCollection,
}
