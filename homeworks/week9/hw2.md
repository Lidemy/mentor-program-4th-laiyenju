## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

|      | VARCHAR | TEXT |
| ---- | ------- | ---- |
| 長度設定 | 可變長度的字串，最多 65,535 個字元 | 可變長度的字串。最多 2^16 - 1 字元資料。 |
| 查詢速度 | 快 | 慢 |
| 適用情境 | 少文字的欄位 | 無法推估文字的最大長度時 |

**參考資料**

- [MySQL性能優化之char、varchar、text的區別](https://www.twblogs.net/a/5c126982bd9eee5e40bb4de6)
- [以資料庫為開發核心，利用通用 API 玩轉後端資料存取的概念與實作系列 Day12：：常用的資料庫資料型態](https://ithelp.ithome.com.tw/articles/10203456?sc=iThelpR)
- [MySQL 官方文件 11.3.2 The CHAR and VARCHAR Types](https://dev.mysql.com/doc/refman/5.7/en/char.html)
- [MySQL 官方文件 11.3.4 The BLOB and TEXT Types](https://dev.mysql.com/doc/refman/5.7/en/char.html)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

從「為什麼需要 Cookie？」 切入，讓我比較了解 Cookie 是什麼。

為什麼需要 Cookie？因為這樣才能解決 HTTP 的無狀態特性（stateless），也就是 HTTP 有臉盲問題。  
HTTP 無法靠自己辨識每次發出 request 的瀏覽器（user agent）是否相同，就沒辦法實現登入機制，因此需要 Cookie 幫忙記住 request 是由哪些 user agent 發出的。

瀏覽器與伺服器的互動步驟：

1. 瀏覽器發出 request
2. 伺服器回傳 Set-Cookie 的 header
3. 瀏覽器接收到回傳的 Set-Cookie header，會把 Cookie 的資料儲存下來
4. 之後同個瀏覽器在 **相同網域** 同個頁面發出的 request，就會自動帶入 **沒過期的 Cookie 資料**

第 4 點中的兩個粗體字，代表瀏覽器只會帶符合以下兩點資格的 Cookie
- 沒過期
- 屬於相同網域

Cookie 紀錄了 HTTP 的狀態，為 user agent 提供可儲存的資訊，方便未來發出的 request 擁有「狀態」，才能解決 HTTP stateless 的問題。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1. 密碼被明文儲存在資料庫中，如果資料庫被盜，所有密碼都外流了。
2. 特殊符號的輸入問題（沒有做跳脫字元），發布留言時會有無法顯示的內容。
