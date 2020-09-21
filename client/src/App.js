import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './index';
import { cookieCheckSagaActionCreator } from './redux/modules/auth';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch } from 'react-redux';
import { startGetEvents } from './redux/modules/events';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import ErrorPage from './pages/ErrorPage';
import CreateEvent from './pages/CreateEvent';
import useThemeWithLocalStorage from './hooks/useThemeWithLocalStorage';
import HeaderTemplate from './components/template/HeaderTemplate';
import ReviseEvent from './pages/ReviseEvent';
import Meta from './components/Meta';
import FooterTemplate from './components/template/FooterTemplate';
import HostOffice from './pages/HostOffice';
import QrScanner from './pages/QrScanner';
import './style/theme.scss';

export const ThemeContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useThemeWithLocalStorage();

  useEffect(() => {
    dispatch(cookieCheckSagaActionCreator());
    dispatch(startGetEvents());
  }, [dispatch]);

  const data = {
    locale: 'ko',
    title: 'Surfesta! - 이벤트를 찾는 빠른 방법',
    canonical: 'https://surfesta.site',
    description: '서페스타입니다',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3110e469822527.5b8ed1c3d5977.jpg',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <Meta data={data} />
          <ConnectedRouter history={history}>
            <HeaderTemplate />
            <Switch>
              <Route path="/qr/:event_id" component={QrScanner} />
              <Route path="/reviseEvent/:event_id" component={ReviseEvent} />
              <Route path="/createEvent" component={CreateEvent} />
              <Route path="/event/:event_id" component={EventDetail} />
              <Route path="/search/:keyword" component={Search} />
              <Route path="/my/host/:event_id" component={HostOffice} />
              <Route path="/my" component={MyPage} />
              <Route path="/" component={Home} />
            </Switch>
            <FooterTemplate />
          </ConnectedRouter>
        </ErrorBoundary>
      </>
    </ThemeContext.Provider>
  );
}

export default App;
