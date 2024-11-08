import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Tabs from './components/Tabs';
import GlobalStyles from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles/>
      <Tabs />
      <AppRoutes />
    </Router>
  );
};

export default App;
