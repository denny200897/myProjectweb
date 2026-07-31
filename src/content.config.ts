import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    // Web App / Software / Module ...：自由填，會顯示在標題旁
    kind: z.string(),
    // 首頁那兩行短說明
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    cover: z.string().optional(),
    // 外部連結（線上網站、GitHub…），沒有就留空陣列
    links: z
      .array(z.object({ text: z.string(), href: z.string() }))
      .default([]),
    // 數字越小越前面
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
