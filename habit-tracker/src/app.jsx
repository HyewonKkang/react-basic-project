import React from 'react';
import './app.css';

function App() {
  // JSX는 다수의 태그 리턴 불가 -> 형제 노드는 묶어줘야함
  return (
    <> 
      <h1 className="title" onClick="">Hello :)</h1>
    </>
  );
}

export default App;
