// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// AI 101 —— 纯静态、免登录、面向国内读者。
// 视觉设计系统(配色/字体/质感)定稿后,主要落在 src/styles/tokens.css。
export default defineConfig({
  // site: 'https://your-domain.example', // 部署域名定了再填
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      // 代码块走暖色主题,别用冷色科技风
      theme: 'github-light',
      wrap: true,
    },
  },
});
