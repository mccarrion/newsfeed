import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './main/App';
import { RouterProvider } from '@tanstack/react-router'
import reportWebVitals from './main/reportWebVitals';

const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={App} />
    </StrictMode>
  )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
