# Restaurant-List

此專案為餐廳清單，使用者可透過搜尋餐廳名稱和分類，來獲得對應到的餐廳資訊，包含餐廳照片、名稱、類別、評分

## 功能列表

-  使用餐廳名稱或類別搜尋

-  依需求排序餐廳資訊

-  瀏覽餐廳詳細資訊
   -  餐廳詳細資訊包含名稱、類別、地址、電話、描述及照片  

-  編輯餐廳資訊
   -  編輯餐廳詳細資訊包含名稱、類別、地址、電話、描述及照片

-  刪除餐廳資訊

## 環境建置與需求 - Prerequisites

-  Node.js: v12.17.0
-  Express: v4.17.1
-  Express-Handlebars: v4.0.4
-  Nodemon: v2.0.4
-  Body-Parser: v1.19.0
-  Mongoose: v5.9.18
-  Method-override: v3.0.0

## 安裝與執行步驟 - Installation and execution

1. 開啟終端機(Terminal)，Clone此專案到本機位置:
```
git clone https://github.com/TZChen117/Restaurant-List-CRUD.git
```
2. 開啟終端機(Terminal)，進入存放此專案之資料夾
```
cd Restaurant-List-CRUD
```
3. 在終端機(Terminal)安裝 npm 套件
```
npm install
```
4. 從終端機(Terminal)獲得資料
```
npm run seed
```
5. 執行專案
```
npm run dev
```
終端顯示 http://localhost:3000 ，請至瀏覽器輸入 http://localhost:3000 開始使用。
