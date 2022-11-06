import React from "react"
import ReactDOM from 'react-dom/client';
import App from "./App"
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// 监视redux的数据变化
store.subscribe(() => {
  root.render(
    <App />
  );
})