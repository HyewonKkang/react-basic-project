import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render( // 페이지에서 id가 root인 요소(index.html)를 가져와 컴포넌트 연결
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);