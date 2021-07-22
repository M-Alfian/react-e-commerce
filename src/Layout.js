import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Products from './components/products/Products'
import Detail from './pages/detail'
import Shopping from './pages/shopping'
import Checkout from './pages/checkout';

export default function Layout() {
  return (
    <Router>
      <Header />
      <Switch>
        <div className="container">
          <Route exact path="/" component={Products} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/checkout" component={Checkout} />
        </div>
      </Switch>
      <Footer />
    </Router>
  )
}
