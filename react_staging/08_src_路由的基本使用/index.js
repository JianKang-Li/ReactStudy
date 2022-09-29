// react核心库
import React from 'react';
// ReactDOM
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 检查代码是否合理
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

