import React from "react";
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import { Home,Browse,Sign_in,Sign_up } from "./pages";
import * as ROUTES from './constants/routes';


export default function App() {
  return (
    <Router>
      <Route exact path="/browse">
        <Browse/>
    </Route>
      <Route exact path="/sign_in">
        <Sign_in/>
    </Route>
      <Route exact path="/sign_up">
        <Sign_up/>
    </Route>
    <Route exact path={ROUTES.HOME}>
      <Home/>
      </Route>
    </Router>
  );

}


