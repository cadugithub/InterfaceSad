import React from 'react';
import Header from '../src/components/Header'
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
    </>
  );
}

export default App;
