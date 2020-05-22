import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage'
import PrivateRoute from "./utils/PrivateRoute"
import ColorList from "./components/ColorList";
function App() {
  return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="colorlist" component={ColorList}/>
        <PrivateRoute path="/BubblePage" component={BubblePage} />
        </Switch>
      </div>
  
  );
}

export default App;
