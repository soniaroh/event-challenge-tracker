import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses `react-dom/client`
import App from './App'; // Your main App component

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
