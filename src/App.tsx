import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';  // Import your AppRoutes here
import Tabs from './components/Tabs';  // Import Tabs component

const App: React.FC = () => {
  return (
    <Router>
      <Tabs />
      <AppRoutes />
    </Router>
  );
};

export default App;
