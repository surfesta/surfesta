import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={MyProfile} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
