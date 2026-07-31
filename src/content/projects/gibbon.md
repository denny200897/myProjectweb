---
title: Gibbon 課務模組
year: '2025'
kind: Module
summary: 為開源校務平台開發的排課與點名模組，可直接掛載
stack: ['PHP', 'MySQL', 'Twig']
cover: /covers/gibbon.svg
links:
  - text: Demo
    href: https://example.com
order: 2
---

## 背景

學校已導入 Gibbon，但內建排課無法處理跑班與跨年級選修。

## 做法

以官方模組規格實作，資料表加前綴避免衝突，權限沿用 Gibbon 既有的 action / role 機制，升級主程式時不需改動。

## 結果

一個學期的排課作業從人工試算表轉為系統產生，衝堂檢查即時回饋。
