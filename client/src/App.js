import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import MyProfile from './pages/MyProfile';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './index';
import CreateEvent from './pages/CreateEvent';

function App() {
  window.fbAsyncInit = function () {
    FB.init({
      appId: 'your-app-id',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v8.0',
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/createEvent" component={CreateEvent} />
        <Route path="/event/:event_id" component={EventDetail} />
        <Route path="/my/profile" component={MyProfile} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
