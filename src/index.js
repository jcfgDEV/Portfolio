import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/Custom.css';
import Menu from './components/Menu';



const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  
  <React.StrictMode>
   <Menu/>
  </React.StrictMode>
);

