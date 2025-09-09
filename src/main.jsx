import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from '../src/app.jsx';
import './i18n';

// import App from "./App.jsx";
// import App from './App';
// import "./src/index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
