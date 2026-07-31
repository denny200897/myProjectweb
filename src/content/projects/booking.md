---
title: 場地預約系統
year: '2023'
kind: Web App
summary: 教室與器材線上預約，含衝突檢查與簽核流程
stack: ['Laravel', 'MySQL', 'Alpine.js']
cover: /covers/booking.svg
links:
  - text: GitHub
    href: https://github.com/
order: 7
---

## 背景

借用場地靠紙本表單，常發生重複預約。

## 做法

以資料庫層的排他約束確保不會衝突，簽核流程可依單位自訂關卡。

## 結果

上線後重複預約歸零，紙本表單全面停用。
