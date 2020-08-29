import React from 'react';
import './App.css';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/event/:event_id" component={EventDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
