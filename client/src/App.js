import React from 'react';
import './App.css';
import Home from './pages/Home';
import Event from './pages/Event';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/event/:event_id' component={Event} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
