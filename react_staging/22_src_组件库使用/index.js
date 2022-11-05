// react核心库
import React from 'react';
// ReactDOM
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 检查代码是否合理
  <React.StrictMode>
    <App />
  </React.StrictMode >
);

