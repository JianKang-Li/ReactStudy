// react核心库
import React from 'react';
// ReactDOM
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 检查代码是否合理
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

