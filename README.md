# 作品集

極簡單欄長捲作品集，Astro 靜態輸出。沒有自我介紹頁，首頁直接就是專案。

## 指令

```bash
npm run dev      # 本機預覽 http://localhost:4321
npm run build    # 輸出到 dist/
npm run preview  # 預覽 build 結果
```

## 改內容

**名字、連結、頁尾** → `src/site.ts`

**新增一個專案** → 在 `src/content/projects/` 新增一個 `.md`，檔名就是網址（`abc.md` → `/work/abc/`）：

```markdown
---
title: 專案名稱
year: '2026'
kind: Web App        # Web App / Software / Module…自由填
summary: 首頁那兩行短說明。
stack: ['Rust', 'SQLite']
cover: /covers/abc.png   # 放在 public/covers/，沒圖就整行刪掉
links:
  - text: GitHub
    href: https://github.com/…
order: 1             # 數字小的排前面
draft: false         # true = 不會出現在網站上
---

## 背景
內文用 Markdown 寫，只有內頁看得到。
```

**配色 / 字級** → `src/styles/global.css` 最上面的 `:root` 變數，深色模式在下面的 `@media (prefers-color-scheme: dark)`。

`public/covers/*.svg` 目前是灰底格線的佔位圖，換成自己的截圖後把 `cover:` 路徑改掉即可。

## 部署

`npm run build` 產生的 `dist/` 是純靜態檔案，直接丟 Cloudflare Pages / Vercel / Netlify / GitHub Pages 都可以（build 指令 `npm run build`，輸出目錄 `dist`）。上線前記得改 `astro.config.mjs` 的 `site` 網址。
