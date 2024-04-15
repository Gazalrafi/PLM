import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CategoryProvider from './store/CategoryProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
   <App/>
   </CategoryProvider>
  </React.StrictMode>
);

reportWebVitals();
