// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';// Imports your App component
import './index.css';    // Imports the global styles we defined

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);