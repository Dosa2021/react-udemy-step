Node: 23.11.1

npm run dev

------------------------------------------------------------------

【参考】
・reactバージョン変更
https://qiita.com/tsubasa_k0814/items/d90254c807c7280c2db7
→index.jsを以下に変更


import { StrictMode } from "react";
import ReactDom from "react-dom";
 
import App from "./App";
 
ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>
  , document.getElementById("root")
);