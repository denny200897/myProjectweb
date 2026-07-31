import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const safeHref = z
  .string()
  .refine((v) => /^(https?:\/\/|mailto:|\/)/i.test(v), {
    message: 'href 只允許 http(s):// 、mailto: 或站內絕對路徑 /',
  });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    kind: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    cover: z
      .string()
      .regex(/^\/[^/]/, 'cover 必須是 public/ 底下的站內絕對路徑')
      .optional(),
    links: z.array(z.object({ text: z.string(), href: safeHref })).default([]),
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
