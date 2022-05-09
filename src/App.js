import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
