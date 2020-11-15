import React from 'react';
import './assets/css/app.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Browse from './pages/Browse';
import Home from './pages/Home';
import Search from './pages/Search';
import Item from './pages/Item';
import Horse from './pages/Horse';
import Purchase from './pages/Purchase';
import Quotation from './pages/Quotation';
import Confirm from './pages/Confirm';
import Error404 from './pages/Error404';
// import BusinessProfile from './pages/BusinessProfile';
// import Category from './pages/Category';
// import HorseProfile from './pages/HorseProfile';
// import ProductProfile from './pages/ProductProfile';
// import Purchase from './pages/Purchase';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>

        {/* <Route path="/category">
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
        </Route> */}
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/purchase">
          <Purchase />
        </Route>
        <Route path="/quotation">
          <Quotation />
        </Route>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/item/:itemId">
          <Item />
        </Route>
        <Route path="/horse/:horseId">
          <Horse />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
