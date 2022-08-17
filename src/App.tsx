import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import AppRoute from './route/AppRoute';

function App() {
  return (
    <BrowserRouter>
    <AppRoute></AppRoute>
    </BrowserRouter>
  );
}

export default App;
