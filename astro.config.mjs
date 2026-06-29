// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// AI 101 —— 纯静态、免登录、面向国内读者。
// 视觉设计系统(配色/字体/质感)定稿后,主要落在 src/styles/tokens.css。
export default defineConfig({
  // 接入自定义域名后,把这里换成你的域名(用于 OG 绝对地址 / sitemap)
  site: 'https://ai101-ivory.vercel.app',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // 代码块走暖色主题,别用冷色科技风
      theme: 'github-light',
      wrap: true,
    },
  },
});
