import './assets/css/global.css'
import Index from './pages/Index'
import Cursor from './components/utils/custom/Cursor';
import { Component, useEffect } from 'react';

function App() {


  return (
    <div className="App">
      <Cursor />
      <Index />
    </div>
  );
}

export default App;
