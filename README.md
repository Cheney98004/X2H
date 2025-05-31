# X2H

X2H 是一個將自訂 XML UI 描述語言轉換為 HTML 元素並渲染於網頁的工具。你可以用 XML 描述 UI 結構，X2H 會自動將其轉換成對應的 HTML 元素，並套用樣式與事件。

## 特色

- 支援常見 UI 元素：Label、Button、Input、Image、Frame、Checkbox
- 可自訂樣式、位置、尺寸、顏色、事件等屬性
- 支援巢狀 Frame 結構
- 事件支援 inline JavaScript
- XML 描述簡單直觀

## 使用方式

1. 撰寫 XML UI 描述（參考 [`examples/example.xml`](examples/example.xml) 或 [`examples/desktop-ui.xml`](examples/desktop-ui.xml)）


2. 在 HTML 中引用並渲染：

   ```html
   <script type="module">
     import X2HRender from '../src/x2h.js';

     fetch("example.xml")
       .then(r => r.text())
       .then(xmlString => {
         const renderer = new X2HRender(xmlString);
         renderer.render();
       });
   </script>
   ```

   詳細範例請見 [`examples/example.html`](examples/example.html)。