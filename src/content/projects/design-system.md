---
title: 元件庫與設計系統
year: '2023'
kind: Module
summary: 跨三個產品共用的元件庫，含無障礙與深色模式規範
stack: ['TypeScript', 'Storybook', 'CSS']
cover: /covers/design-system.svg
links:
  - text: Storybook
    href: https://example.com
order: 8
---

## 背景

三個產品各自實作按鈕與表單，樣式與鍵盤行為都不一致。

## 做法

抽出共用元件並以 Storybook 作為文件，每個元件都附鍵盤操作與對比度測試。

## 結果

新頁面開發時間減半，無障礙檢測問題數下降九成。
