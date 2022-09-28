import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 检查代码是否合理
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 记录页面性能
reportWebVitals();
