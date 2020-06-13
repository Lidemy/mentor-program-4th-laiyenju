## 請解釋後端與前端的差異。

以打開 Google 首頁輸入關鍵字搜尋為例，前端是使用者看得到的部分，像是首頁文字、顏色、排版等等；後端則是處理使用者是否有登入 Google 帳號、輸入關鍵字如何呈現個人化搜尋結果。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

![](https://i.imgur.com/GSvevk6.jpg)

1. 瀏覽器（經作業系統、網路卡）送出 request 給伺服器
2. 伺服器從資料庫取用相關資料
3. 伺服器回傳 response 到瀏覽器
4. 瀏覽器顯示搜尋結果

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

我參考 Codecademy 製作的 [command line cheatsheet](https://www.codecademy.com/articles/command-line-commands)，從裡面拉出 3 個課程沒講到，但未來可能會用到的指令。

1. `alias`：可以自訂指令或快捷鍵，例如 `alias pwd="pd"`，原本想知道目前所處的資料夾位置，要輸入 `pwd`，自訂後，輸入 `pd` 也有相同功能。
2. `nano`：是種 command line 的文字編輯器，看到這個讓我想到課堂介紹的 vim，兩者都不需要另外開啟文字編輯器，能直接編輯檔案內容。
3. `sort`：排序，預設是能根據英文字母的順序排序。
    - `sort abc.txt`，對英文文檔 abc.txt 內的文字內容排序。
    - `sort -M mon.txt`，mon.txt 是月份的英文文字檔，多了 `-M` 能依據月份順序排序。
    - `LC_ALL=C sort -M mon.txt`，當月份文檔是中文文檔時，需要加上 `LC_ALL=C` 才能依照中文月份順序排序。