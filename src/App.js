import React from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import WebDesign from './components/web-design/WebDesign';
import AppDesign from './components/app-design/AppDesign';
import GraphicDesign from './components/graphic-design/GraphicDesign';
import About from './components/about/About';
import Locations from './components/locations/Locations';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/web-design" component={WebDesign} />
        <Route path="/app-design" component={AppDesign} />
        <Route path="/graphic-design" component={GraphicDesign} />
        <Route path="/about" component={About} />
        <Route path="/locations" component={Locations} />
        <Route path="/contact" component={Contact} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
