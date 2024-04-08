import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormSlice from './Redux-toolkit/FormSlice';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

const store = configureStore({
  reducer:{
    formRedux:FormSlice
  }
})





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

