---
title: 排程桌面工具
year: '2025'
kind: Software
summary: 完全離線、不需帳號的本機排程工具，安裝檔只有 6 MB
stack: ['Rust', 'Tauri', 'SQLite']
cover: /covers/scheduler.svg
links: []
order: 3
---

## 背景

需要一個能離線使用、啟動快、不會偷偷同步資料的個人排程工具。

## 做法

Tauri 打包，核心邏輯寫在 Rust，資料存於本機 SQLite。安裝檔約 6 MB，冷啟動低於 200ms。

## 結果

日常自用，同時作為 Rust 與系統整合的練習專案。
