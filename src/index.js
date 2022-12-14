import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    {/* <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter> */}
  </React.StrictMode>
);
