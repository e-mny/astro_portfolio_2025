import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }: { image: () => z.ZodType<any> }) =>
    z.object({
      title: z.string().max(80),
      hero: image(),
      heroAlt: z.string(),
      description: z.string().max(220),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      tags: z.array(z.string()),
    }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }: { image: () => z.ZodType<any> }) =>
    z.object({
      title: z.string().max(80),
      hero: image().optional(),
      heroAlt: z.string(),
      description: z.string().max(220),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      tags: z.array(z.string()),
      repoUrl: z.string().optional(),
      techStack: z.array(z.string()),
      draft: z.boolean().optional().default(true)
    }),
});

const nowCollection = defineCollection({
  type: 'content',
  schema: (() =>
    z.object({
      title: z.string().max(80),
      description: z.string().max(220),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
    }))
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  now: nowCollection
};
