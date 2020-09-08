import React, { useEffect } from 'react';
import './App.css';
import './style/theme.scss';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import MyPage from './pages/MyPage';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './index';
import CreateEvent from './pages/CreateEvent';
import useThemeWithLocalStorage from './hooks/useThemeWithLocalStorage';

export const ThemeContext = React.createContext();

function App() {
  const [theme, toggleTheme] = useThemeWithLocalStorage();

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [theme]);

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
