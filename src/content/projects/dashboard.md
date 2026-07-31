---
title: 營運數據儀表板
year: '2024'
kind: Web App
summary: 即時營運指標儀表板，支援自訂圖表與深色模式
stack: ['React', 'D3', 'Go']
cover: /covers/dashboard.svg
links:
  - text: Live
    href: https://example.com
order: 5
---

## 背景

原本的報表每天寄一封 PDF，資料落後一天且無法追問細節。

## 做法

後端以 Go 提供聚合 API，前端用 D3 自繪圖表以精準控制排版與色彩，全站支援深色模式。

## 結果

決策會議改為直接看即時數字，報表信件停發。
