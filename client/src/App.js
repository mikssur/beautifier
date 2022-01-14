import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav.jsx'
import Home from "./components/Home/Home.jsx";
import Categories from "./components/Categories/Categories.jsx";
import ServiceList from "./components/ServiceList/ServiceList.jsx"
import Service from "./components/Service/Service.jsx"
import About from "./components/About/About.jsx"
import Review from "./components/Review/Review.jsx"
import Admin from "./components/Admin/Admin.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx"

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/categories">
          <Categories />
        </Route>

        <Route exact path="/categories/:categoryname">
          <ServiceList />
        </Route>

        <Route exact path="/categories/:categoryname/:service">
          <Service />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>


      <Contact />

    </BrowserRouter>
  );
}

export default App;
