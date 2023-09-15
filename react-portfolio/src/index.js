

import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header'; 

const Main = () => {
  return (
    <div>
      <Header title="My App Title" />
      {/* {where other components will go} */}
    </div>
  );
};

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
