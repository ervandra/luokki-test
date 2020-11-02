import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Browse from './pages/Browse';
import BusinessProfile from './pages/BusinessProfile';
import Category from './pages/Category';
import HorseProfile from './pages/HorseProfile';
import ProductProfile from './pages/ProductProfile';
import Purchase from './pages/Purchase';
import UserProfile from './pages/UserProfile';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/business">
          <BusinessProfile />
        </Route>
        <Route path="/horse">
          <HorseProfile />
        </Route>
        <Route path="/product">
          <ProductProfile />
        </Route>
        <Route path="/purchase">
          <Purchase />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/" exact>
          <Browse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
