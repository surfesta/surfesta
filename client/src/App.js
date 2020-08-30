import React from 'react';
import './App.css';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import MyProfile from './pages/MyProfile';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './index';
import CreateEvent from './pages/CreateEvent';


function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/createEvent" component={CreateEvent} />
        <Route path="/event/:event_id" component={EventDetail} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
