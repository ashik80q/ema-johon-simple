import React from 'react';
import './App.css';
import Header from './componen/Header/header';
import Shop from './componen/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Review from './componen/Review/Review';
import Inventory from './componen/Inventory/Inventory';
import NotFount from './componen/NotFount/NotFount';
import ProductDetail from './componen/ProductDetail/ProductDetail';





function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route  path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/review">
            <Review></Review>

          </Route>

          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>

          <Route exact path="/">
          <Shop></Shop>
          </Route>

          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>

          <Route path="*">
           <NotFount></NotFount>
          </Route>

        </Switch>
        
      </Router>
      
      
      
    </div>
  );
}

export default App;
