import React from 'react';
import "./App.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Navbar from "./components/Navbar";


const App = () =>{
  return(
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default App;