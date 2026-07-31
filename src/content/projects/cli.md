---
title: 部署 CLI 工具
year: '2024'
kind: Software
summary: 把多步驟部署流程收斂成一行指令的內部 CLI
stack: ['Go', 'Cobra', 'Docker']
cover: /covers/cli.svg
links: []
order: 6
---

## 背景

部署要跑六個指令、開三個網頁確認，新人常漏步驟。

## 做法

以 Go 寫成單一執行檔，內建流程檢查與回滾，錯誤訊息直接給出下一步建議。

## 結果

部署時間由 20 分鐘縮短到 3 分鐘，新人第一天即可獨立部署。
