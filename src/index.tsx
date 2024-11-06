import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
}
