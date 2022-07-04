import React from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/css/style';
import App from '@pages/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
