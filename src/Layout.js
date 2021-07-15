import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './components/header/header'
import Products from './components/products/Products'
import Footer from './components/footer/footer'
import Detail from './pages/detail'
import Shopping from "./pages/shopping";

export default function Layout() {
  return (
    <Router>
      <Header />
          <Switch>
            <Route exact path='/'>
              <Products />
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/detail'>
              <Detail />
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/shopping'>
              <Shopping />
            </Route>
          </Switch>
      <Footer />
    </Router>
  )
}