---
title: 校務系統重構
year: '2026'
kind: Web App
summary: 把老舊 JSP 校務系統重寫成 ASP.NET Core 的完整遷移專案
stack: ['ASP.NET Core', 'SQL Server', 'TypeScript']
cover: /covers/registrar.svg
links:
  - text: GitHub
    href: https://github.com/
order: 1
---

## 背景

原系統以 JSP 撰寫，畫面與商業邏輯混在同一份檔案裡，密碼以明文儲存。目標是在不中斷學期作業的前提下逐頁替換。

## 做法

分層重寫：資料存取獨立成 repository、驗證改為雜湊加鹽、頁面以伺服器端渲染輸出，維持可在舊瀏覽器運作。

## 結果

登入與成績查詢兩條主要流程已完成遷移，頁面回應時間由平均 1.8s 降至 0.3s。

<!-- 這段是佔位文字，換成你自己的內容即可。標題用 ## -->
