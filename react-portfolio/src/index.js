

import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header'; 

const Main = () => {
  return (
    <div>
      <Header title="Tanner Rhines" />
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
