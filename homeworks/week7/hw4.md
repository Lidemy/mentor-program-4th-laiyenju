## 什麼是 DOM？

全名是 Document Object Model，將 XML 或 HTML Document 視為為有各種 node 物件的樹狀結構，方便 JavaScript 跟瀏覽器溝通。

讓人印象深刻的 DOM 圖。👇

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/220px-DOM-model.svg.png)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

先假想網頁元素中有個按鈕，然後我去點擊按鈕後（有了點擊事件，按鈕則是 target），開始整個點擊事件的傳遞機制：
1. 當按鈕被點擊後，事件會開始從 DOM 最上層的 Document 開始往下傳遞。
2. （開始捕獲階段）
3. 當按鈕接收到 Document 傳遞過來的事件後，轉而往上傳遞事件。
4. （開始冒泡階段）
5. 最後，事件會傳給最上層的 Document。

![](dom.png)

## 什麼是 event delegation，為什麼我們需要它？


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
