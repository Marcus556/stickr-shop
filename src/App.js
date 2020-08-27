import React from 'react';
import './App.css';
import WebPage from './pages/webpage/webpage.component';
import './pages/webpage/webpage.styles.scss';
import { Route } from 'react-router-dom'

const HostPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
    <Route exact path='/' component={WebPage} />
    </div>
  );
}

export default App;