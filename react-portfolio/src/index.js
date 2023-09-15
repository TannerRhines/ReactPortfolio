

import React from 'react';
import { createRoot } from 'react-dom/client';
import AboutMe from './AboutMe';
import Header from './Header'; 
import NavBar from './NavBar';

const Main = () => {
  return (
    <div>
      <Header title="Tanner Rhines" />
      <NavBar />
      <AboutMe />
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
