import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './design-system.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
