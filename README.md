Node: 23.11.1

npm run dev

・再レンダリングのタイミング
　・propsの変更
　・stateの変更
　・再レンダリングされたコンポーネントの子コンポーネントも再レンダリング

・子レンダリング最適化
　・memo 
    子コンポーネントを囲み、子コンポーネントが再レンダリングされないようにする
　・useCallback
    再レンダリングされる関数を囲み、子コンポーネントが再レンダリングされないようにする
  ・useMemo
    変数の最適化

・CSS
  ・Inline Style
  ・CSS Modules
  ・StyledJsx
  ・StyledComponents

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