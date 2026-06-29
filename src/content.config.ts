import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 关卡:碎关(atom)与合练关(workshop)。每一关 = 一个概念 / 一次组装。
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    // 哪栋楼:1 = 聊天 AI(全民);2 = Agent CLI 实操(进阶);3 = 让 AI 看见你(AI 可见性)
    building: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    // 第几章 / 关内排序
    chapter: z.number(),
    order: z.number(),
    // 关卡类型:atom 碎关(一关一概念) / workshop 合练关(组装真实任务)
    kind: z.enum(['atom', 'workshop']),
    // 一句话共情钩子(四段式①),用于卡片预览;可含 <span class="hl-o"> 高亮
    hook: z.string(),
    // ① 泡芙表情:think 思考 / hi 打招呼 / aha 原来如此 / clap 鼓掌
    hookMood: z.enum(['hi', 'think', 'aha', 'clap']).default('think'),
    // 本关绑定的术语(四段式③),对应 terms 集合的 id
    term: z.string().optional(),
    // 预计阅读分钟,目标 2~3
    minutes: z.number().default(3),
    draft: z.boolean().default(false),
  }),
});

// 术语卡:双链的"岸边注释"。固定三块:是什么 / 如何改变 AI 行为 / 一个例子。
const terms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/terms' }),
  schema: z.object({
    term: z.string(), // 显示名,如「上下文」
    whatItIs: z.string(), // 是什么(一句人话)
    behaviorChange: z.string(), // 它如何改变 AI 的行为(before→after 一句话)
    example: z.string().optional(), // 一个例子
    related: z.array(z.string()).default([]), // 相关术语 id
  }),
});

export const collections = { lessons, terms };
