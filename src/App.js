import './App.css';
import Home from './components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Services from './components/Home/Services/Services';
import Dentists from './components/Home/Dentists/Dentists';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import Notfound from './components/Home/Notfound/Notfound';
import Signin from './components/Home/Signin/Signin';
import Register from './components/Home/Register/Register';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/dentists">
              <Dentists></Dentists>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/sign-in">
              <Signin></Signin>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
