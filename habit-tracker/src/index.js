import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import SimpleHabit from './components/simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render( // 페이지에서 id가 root인 요소(index.html)를 가져와 컴포넌트 연결
  <React.StrictMode>
    <SimpleHabit />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);