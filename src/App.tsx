import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './app/store'
import { Provider } from 'react-redux'

import './App.css';

import AppRoute from './route/AppRoute';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <AppRoute></AppRoute>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
