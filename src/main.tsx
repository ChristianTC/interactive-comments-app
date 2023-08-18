import './style.css'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App';

const root = createRoot(
  document.getElementById('app')!
);

const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

root.render(element);