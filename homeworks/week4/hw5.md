## 請以自己的話解釋 API 是什麼

API（application programming interface）照字面看就是種介面，幾乎世界上每個東西都有介面，介面是讓人操作某種東西的媒介。
馬桶的介面就是馬桶蓋、沖水手把、浮球等，讓人能坐著上廁所，上完廁所能沖水，沖完水會自動集水，這些零件讓我即使不知道如何製造馬桶，也能使用馬桶的功能。
API 也是這種概念，只是我們要操作的不是馬桶，而是電腦，透過輸入程式碼（操作零件），即使不知道 Twitch 是如何提供遊戲的數據資料（製造馬桶），
我們還是能透過輸入／組合正確的程式碼，取得這些遊戲數據。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

HTTP status code 乍看很陌生，若說 404 的話，相信很多人都有看過，當連到的網頁不存在，頁面就會顯示大大的 404。
這個 404 號碼就是 HTTP status code。
HTTP status code 表達發出 request 後的狀況，是一套標準化後的號碼，就像 [Huli 老師說過的傳紙條故事](https://medium.com/@hulitw/learning-tcp-ip-http-via-sending-letter-5d3299203660)，這些號碼都是大家先說好的，
因此號碼代表某種意義，從開頭第一個號碼就能略知 request 發出後碰到哪種狀況：


| HTTP Status Code | 種類 | 意義 | 傳紙條訂便當的比喻 |
| -------- | ------ | ------- | -------- |
| 1xx | informational responses | 發出的 request 已送到，但需要點時間處理 | 我有拿到紙條了，待會回覆 ｜
| 2xx | successful responses | 發出的 request 已被接收 | 收到紙條了，你要的東西沒問題！|
| 3xx | redirects | 需要有其他操作才能完成 request | 你要把紙條送到隔壁班的千千那裡才行 |
| 4xx | client errors | client 發生錯誤 | 只幫我們學校的訂便當喔，你不是我們學校的 |
| 5xx | server errors | 伺服器發生錯誤 | 抱歉，便當店臨時通知關店，所以沒有便當可訂 |

在 Lidemy 課程影片中有提到的 HTTP status code 有

- 200：OK，request 成功，並回傳 request 要求的內容。
- 204：No Content，伺服器成功處理 request，但沒返回任何內容。
- 301：Moved Permanently，東西被永久移到到某處。
- 302：Found，東西暫時被移到某處。
- 404：Not Found
- 500：Internal Server Error，代表伺服器發生未預期問題，是通用的伺服器錯誤訊息。
- 503：Service Unavailable，例如臨時伺服器維修中。

> 301 與 302 的差別在於下次對舊位置發出 request 後，瀏覽器是否會自動導到新位置。
> 如果這次對舊位置發出 request 後得到 301，下次 client 發出 request，會被自動導到新位置（已記住新位置才是正確的地點）。
> 如果這次對舊位置發出 request 後得到 302，下次 client 發出 request，瀏覽器要再次詢問正確位置（不會記住正確位置）。

另外找出 3 個課程沒有的 HTTP status code，我都是找自己曾經見過的，通常是學校的選課系統或這次寫作業時踫見的：

1. **410 Gone**，表示 request 要求的資源已不可用。在這次串接 Twitch API 作業中，忘了再 header 放入`Accept: application/vnd.twitchtv.v5+json`，所以得到的回傳是`{"error":"Gone","status":410,"message":"The API version you are looking for is in another castle. See https://dev.twitch.tv/docs"}`
2. **403 Forbidden**：已接受並理解 request，但拒絕執行。最常在學校的選課系統出現，在尋找有興趣的課程時，會不小心在選課系統按到下一頁，要再返回的話，就會出現這個錯誤警告，即使重新整理頁面也不行，只好在。
3. **502 Bad Gateway**：從上游伺服器接收到無效的 response。因為自己習慣將學校的選課系統設定為書籤，但在政大選課系統剛改版時，點選書籤內的選課系統連結，就會出現 Bad Gateway，只能自己不斷更新頁面。

參考資料：

- [HTTP response status codes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [HTTP狀態碼 - 維基百科](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
- [從傳紙條輕鬆學習基本網路概念 - Huli](https://medium.com/@hulitw/learning-tcp-ip-http-via-sending-letter-5d3299203660)


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

base URL: https://yen-taste.com (假連結勿試)

| 說明 | Method | path | 參數 | 範例 |
| --- | ------ | ----- | ---- | ----|
| 回傳所有餐廳資料 | GET | `/restaurants` | `_limit:限制回傳資料數量` | `/restaurants?_limit=10` |
| 回傳單一餐廳資料 | GET | `/restaurants/:id` | 無 | `/restaurants/2` |
| 刪除餐廳 | DELETE | `/restaurants/:id` | 無 | 無 |
| 新增餐廳 | POST | `/restaurants` | `name: 餐廳名稱, address: 地址, phone: 電話` | 無 |
| 更改餐廳 | PATCH | `/restaurants/:id` | `name: 餐廳名稱, address: 地址, phone: 電話` | 無 |