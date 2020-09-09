import React, { useEffect } from 'react';
import './App.css';
import './style/theme.scss';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import MyPage from './pages/MyPage';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './index';
import { cookieCheckSagaActionCreator } from './redux/modules/auth';
import CreateEvent from './pages/CreateEvent';
import useThemeWithLocalStorage from './hooks/useThemeWithLocalStorage';
import { useDispatch } from 'react-redux';

export const ThemeContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useThemeWithLocalStorage();

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [theme]);
  useEffect(() => {
    dispatch(cookieCheckSagaActionCreator());
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/createEvent" component={CreateEvent} />
            <Route path="/event/:event_id" component={EventDetail} />
            <Route path="/my" component={MyPage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
      </>
    </ThemeContext.Provider>
  );
}

export default App;
