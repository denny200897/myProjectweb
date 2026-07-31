---
title: 文件檢索介面
year: '2024'
kind: Web App
summary: 一萬份掃描文件的全文檢索前端，主打純鍵盤操作
stack: ['Next.js', 'PostgreSQL', 'Meilisearch']
cover: /covers/archive.svg
links:
  - text: Live
    href: https://example.com
  - text: GitHub
    href: https://github.com/
order: 4
---

## 背景

既有的檢索介面每次查詢都要重新整理整頁，且結果只顯示檔名。

## 做法

以 Meilisearch 建索引，前端提供即時查詢、命中片段高亮與純鍵盤瀏覽，結果頁維持單欄可讀寬度。

## 結果

平均查詢時間低於 50ms，使用者不需離開鍵盤即可完成整段檢索流程。
