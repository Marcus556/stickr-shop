import React from 'react';
import './App.css';
import './pages/webpage/webpage.styles.scss';
import { Route } from 'react-router-dom'
import WebPage from './pages/webpage/webpage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component'

function App() {
  return (
    <div>
    <Header />
    <switch>
    <Route exact path='/' component={WebPage} />
    <Route path='/shop' component={ShopPage} />
    </switch>
    </div>
  );
}

export default App;