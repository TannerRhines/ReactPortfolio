import React from 'react';
import { createRoot } from 'react-dom/client'; // Keep this line as is
import App from './App.js';
import './assets/styles/styles.css';

import { BrowserRouter } from "react-router-dom"

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);
