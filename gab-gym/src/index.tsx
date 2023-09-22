import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exercises from './pages/exercises';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Exercises />
  </React.StrictMode>
);