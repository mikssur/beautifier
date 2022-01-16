import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav.jsx'
import Home from "./components/Home/Home.jsx";
import Categories from "./components/Categories/Categories.jsx";
import ServiceList from "./components/ServiceList/ServiceList.jsx"
import MasterList from "./components/MasterList/MasterList.jsx"
import TimeList from "./components/TimeList/TimeList.jsx"
import About from "./components/About/About.jsx"
import Review from "./components/Review/Review.jsx"
import Admin from "./components/AdminForm/AdminForm.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx"
import PortfolioCard from "./components/PortfolioCard/PortfolioCard.jsx"
import AdminCabinet from "./components/AdminCabinet/AdminCabinet.jsx";
import AdminRegistration from './components/AdminRegistration/AdminRegistration.jsx';


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
          <MasterList />
        </Route>

        <Route exact path="/categories/:categoryname/:service/:master">
          <TimeList />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/reviews">
          <Review />
        </Route>

        <Route exact path="/adminform">
          <Admin />
        </Route>

        <Route exact path="/adminregistration">
          <AdminRegistration />
        </Route>

        <Route exact path="/admincabinet">
          <AdminCabinet />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

        <Route exact path="/portfolio/:masterId">
          <PortfolioCard />
        </Route>
      </Switch>


      <Contact />

    </BrowserRouter>
  );
}

export default App;
