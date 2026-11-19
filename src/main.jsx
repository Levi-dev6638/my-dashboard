import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './style.css'
import FinancesProvider from './context/FinancesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <FinancesProvider>
      <App />
    </FinancesProvider>

    </BrowserRouter>

  </StrictMode>,
);
