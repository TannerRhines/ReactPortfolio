import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';  

const Main = () => {
  return (
    <div>
      <Header title="My App Title" />
    
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);