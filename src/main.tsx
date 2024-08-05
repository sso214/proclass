import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import 'aos/dist/aos.css';
import AOS from 'aos';

import App from '@/App';
import { DialogProvider } from '@/common/contexts';
import './index.css';

AOS.init();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <DialogProvider>
          <App />
        </DialogProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
