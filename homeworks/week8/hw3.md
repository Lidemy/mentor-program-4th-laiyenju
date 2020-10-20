## 什麼是 Ajax？

Asynchronous JavaScript And XML，指的是可以跟伺服器非同步交換資料的 JavaScript。  
不過既然是 JavaScript 為什麼會看到 XML？因為早期使用 XML 這種資料格式，後來較常見 JSON，因此現在即使交換的資料格式是 JSON，只要是非同步的也稱作 Ajax。

> 非同步指的是，發出 request 後，不需要等 response，仍然可繼續執行任務。

## 用 Ajax 與我們用表單送出資料的差別在哪？

從使用者角度來看，用表單送出資料，會換頁；使用 Ajax 交換資料，會在同個頁面更新資料。
從資料請求跟回傳路徑來看，瀏覽器透過 JavaScript 送出請求後，使用表單的話，伺服器把資料回傳給瀏覽器，讓瀏覽器重新渲染頁面，使用 Ajax 的話，則是由 JavaScript 處理伺服器回傳給瀏覽器的資料。

## JSONP 是什麼？

一種資料交換方式，是除了 CORS 跨來源資源共享以外，跨來源請求的另一種方法。
JSONP 善用 script 不受同源政策影響的特點，在 script 中引入資料的連結，透過指定好的 function 取得資料回傳。

**server 端**

```javascript
<script>
  receiveData({
    data: 'test'
  });
</script>
```

**請求方**

```javascript
<script>
  function receiveData (response) {
    console.log(response);
  }
</script>
```

## 要如何存取跨網域的 API？

請求者看來只有被動處理的份。

一是成為同來源，在跟網站相同的 Domain 下發出 request；
二是 CORS（Cross-Origin Resource Sharing，跨來源資源共享），伺服器的 response header 有 `Access-Control-Allow-Origin` 欄位，request 被允許權限，才能夠存取跨網域的 API；

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為「瀏覽器」。

第四週時，是在本地端向伺服器發送 request，但這週卻在這中間卡了一個瀏覽器。
也就是說這週是由本地端寫好的 JavaScript，透過「瀏覽器」發送 request 給伺服器，因此多了瀏覽器給的安全性限制。

> 但有例外：圖片、script 不受同源政策影響。