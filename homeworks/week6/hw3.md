## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. `<base>` 用於表示網站的 base URL，例如我的個人網站部落格位置是 https://laiyenju.github.io/blog，base URL 就是 https://laiyenju.github.io，/blog 是網站的相對位置。
    
    ```html
    <base href="http://www.example.com/">
    <base target="_blank">
    <base target="_top" href="http://www.example.com/">  
    ```
    
2. `<blockquote>` 表示內容是引用，可搭配 `cite` 屬性標注來源一起使用。

	```html
	<blockquote cite="https://www.huxley.net/bnw/four.html">
	    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
	    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
	</blockquote>
	```
3. `<code>` 表示內容是程式碼，就像是 `<html></html>` 這樣。

## 請問什麼是盒模型（box modal）

從 CSS 的視角來看網頁物件的話，所有網頁上的物件都像是一個一個被盒子裝起來後，擺放在頁面上。

![](https://i.imgur.com/56qc2j7.png)

這些盒子就是 Box Ｍodel，組成元素包含，由物件內到外依序是：

- content 物件本身的內容
- padding 內容外，border 內的空間。
- border 包覆內容的框線。
- margin 最外層的空間，包覆著 content、padding、border。

![](https://mdn.mozillademos.org/files/16558/box-model.png)

Box Model 之所以重要，是因為不同的 Box Model 模式會影響到 CSS 採用的排版方式。
一是 Box Model 與計算物件尺寸的方式有關，二是Box Model 有兩種不同模式：block box 跟 inline box。

### Box Model 的兩種尺寸模式

在不同尺寸模式下，一個物件採用以下 CSS 樣式表中設定樣式，會導致不同的外觀尺寸結果。

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

**standard box-model**
在 standard box-model 模式下，margin、padding 跟 border 是在 width、height 的基礎上，往外擴張，因此物件的實際寬度與高度，會大於 CSS 樣式表內設定的 width 跟 height。
- 物件的總寬度（total width）= width + padding + margin + boarder，
- 物件的總高度（total height）= height + padding + margin + border。

圖中的長方形，寬度（width）是 350px、高度（height）是 150px，但整個物件的實際寬度是 410px (350 + 25 + 25 + 5 + 5)、實際高度是 210px (150 + 25 + 25 + 5 + 5)。

![](https://mdn.mozillademos.org/files/16559/standard-box-model.png)

**alternative box-model**
在 alternative box-model 模式下，物件的實際寬度與高度是將 padding 跟 border 納入 CSS 樣式表中的 width 跟 height 一起計算，
所以實際寬度與高度會跟 CSS 樣式表中的 width 跟 height 設定一致。

在 CSS 樣式表中設定 `box-sizing: border-box;`
效果就會如圖中的長方形，寬度（width）是 350px、高度（height）是 150px，會將 border 納入 width 跟 height 內。
![](https://mdn.mozillademos.org/files/16557/alternate-box-model.png)


### Box Model 的兩種排版模式：block box vs. inline box
**block box 的特性**
每個 box 會獨立成一行，並填滿該行空間，寬度與高度能透過調整 padding、margin 達成。
具備 block box 特性的物件有`<h1>`類型的標題、`<div>`、`<p>`。

**inline box 的特性**
box 們會自動排成一列，且無法調整高度，只有寬度能透過 padding、margin 達成。
具備 inline box 特性的物件有`<a>`、`<span>`、`<em>`、`<strong>`。

這些 HTML 標籤的物件已有預設的 Box Model 特性，為了讓排版時能更自由操作，所以能在 CSS 樣式表中設定 `display` 的參數，
由我們自己決定要讓物件在排版中採用哪種特性。

- `display: inline;` 設定物件是 inline box 特性
- `display: box;` 設定物件是 block box 特性
- `display: inline-box;` 設定物件同時具備 inline box 與 block box 的特性，讓物件們能並排成一列，同時也能透過 padding、margin 等調整寬度與高度，跳脫預設特性的限制。
- `display: flex;` 設定物件是 flex box 的特性。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

在前一題最後說到的 display 能讓我們自己決定要讓物件具備哪種排版特性。
- `display: inline;` 設定物件是 inline box 的特性，物件們會自動排成一列，但無法調整物件高度，只有寬度能透過 padding、margin 調整。具備 inline box 特性的物件有`<a>`、`<span>`、`<em>`、`<strong>`。
- `display: box;` 設定物件是 block box 的特性，物件會自己獨立成一行，並填滿該行空間，佔用一整行，物件的寬度與高度能透過調整 padding、margin 達成。具備 block box 特性的物件有`<h1>`類型的標題、`<div>`、`<p>`。
- `display: inline-box;` 設定物件同時具備 inline box 與 block box 的特性，讓物件們能並排成一列，同時也能透過 padding、margin 等調整寬度與高度，跳脫預設特性的限制。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- `position: static;`：預設屬性，物件會照著瀏覽器預設的配置自動排版在頁面上。
- `position: relative;`：相對定位，指的是物件會相對於自己在頁面中的「原位置」，在不影響其他物件的情況下，進行偏移。如果物件沒有偏移位置，就不會看見`position: relative` 的效果，這也是常常覺得有 relative 但畫面沒差別的原因。我自己在練習切第六週作業的餐廳頁面時，是用 relative 處理評價區塊的個人頭像，因為個人頭像沒有好好待在文字方塊內，反而是頭像突出一半到方塊外，所以覺得能用 relative 處理。
- `position: absolute;`：絕對定位，會根據最先碰到，且具備 fixed 或 relative 或 absolute 或 sticky 之一的 position 屬性的父層，來對齊。常見的使用情境是導覽列中的漢堡選單位置，或者蓋板廣告的 X 按鈕。
    > 看過本週檢討後，覺得這短短一句話最好記：「absolute 的定位點是往上找第一個 position 不是 static 的元素」。不然很容易漏掉也算在內的 `position: sticky;`，或者未來可能新增的屬性。
- `position: fixed;`：使用這個定位方式的物件，會依據「瀏覽器視窗」來定位，物件會獨立成一塊，不會跟其他物件的版位推擠。使用 fixed 的話，物件的 width 要設定成 100%，不然寬度會縮短。常見的使用情境是蓋板廣吿。


## 參考資料

- [學習 CSS 版面配置：關於 position 屬性](https://zh-tw.learnlayout.com/position.html)
- [MDN: The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#What_is_the_CSS_box_model)
- [MDN: box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [MDN: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [金魚都能懂的網頁設計入門 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2072)