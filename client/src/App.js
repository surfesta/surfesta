import React from 'react';
import './App.css';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from './index';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/event/:event_id" component={EventDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
