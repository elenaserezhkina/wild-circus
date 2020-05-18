import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Review from "./pages/Review";
import Food from "./pages/Food";
import Location from "./pages/Location";
import Tickets from "./pages/Tickets";
import Shows from "./pages/Shows";
import ShowDescription from "./pages/ShowDescription";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/food">
          <Food />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/tickets">
          <Tickets />
        </Route>
        <Route exact path="/shows">
          <Shows />
        </Route>
        <Route path="/shows/:id" component={ShowDescription}></Route>
      </Switch>
    </Router>
  );
}

export default App;
