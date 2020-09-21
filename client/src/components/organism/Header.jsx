import React, { useCallback } from 'react';
import HeaderRight from '../molecule/header/HeaderRight';
import Logo from '../atom/header/Logo';
import PostEventButton from '../atom/header/PostEventButton';
import './Header.scss';
import { welcomeModal } from '../../redux/modules/modal';
import MobileBurger from '../atom/header/MobileBurger';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useState } from 'react';
import ThemeIndicator from '../molecule/header/ThemeIndicator';
import MobileDrawer from '../molecule/header/MobileDrawer';
import ProfileBtn from '../atom/profile/ProfileBtn';
import MobileHeaderRight from './MobileHeaderRight';
import LoginButton from '../atom/header/LoginButton';
import UserService from '../../services/UserService';
import { cookieCheckSagaActionCreator } from '../../redux/modules/auth';
import { Link } from 'react-router-dom';
import { createRef } from 'react';

function Header() {
  const user = useSelector((state) => state.auth.user);
  const location = useSelector((state) => state.router.location.pathname);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const handlePostEvent = useCallback(() => {
    if (location === '/createEvent') return;
    if (user === null) {
      dispatch(welcomeModal('로그인 후 시작하기😉'));
      return;
    }
    dispatch(push('/createEvent'));
  }, [dispatch, user, location]);

  const handleDrawerClick = useCallback(() => setVisible(!visible), [visible]);

  const handleLogin = useCallback(() => dispatch(welcomeModal()), [dispatch]);

  const handleLogout = useCallback(async () => {
    const { success } = await UserService.logout();
    dispatch(cookieCheckSagaActionCreator());
    if (success) dispatch(push('/'));
    window.scrollTo(0, 0);
  }, [dispatch]);

  const goHome = useCallback(() => {
    if (location === '/createEvent' || location.includes('/reviseEvent')) {
      dispatch(push('/'));
    } else {
      window.location.href = '/';
    }
  }, [location, dispatch]);

  return (
    <section className="main-header">
      <div className="header-wrapper">
        <div className="not-mobile">
          <PostEventButton handleClick={handlePostEvent} />
        </div>
        <Logo onClick={goHome} />
        <div className="not-mobile">
          <HeaderRight handleLogin={handleLogin} />
        </div>
        <MobileHeaderRight className="only-mobile header-right">
          <ThemeIndicator />
          <MobileBurger onClick={handleDrawerClick} />
        </MobileHeaderRight>
      </div>
      {visible && (
        <MobileDrawer
          className="mobile-drawer"
          handleDrawerClick={handleDrawerClick}
        >
          <ul>
            <li onClick={handlePostEvent}>
              <Link to="/my/event/liked">
                <div className="sub-nav-div">이벤트 주최하기</div>
              </Link>
            </li>
            <div className="mobile-divider" />
            {!user && (
              <li>
                <LoginButton handleclick={handleLogin} />
              </li>
            )}
            {user && (
              <>
                <li>
                  <Link to="/my/profile">
                    <div className="sub-nav-div">프로필</div>
                  </Link>
                </li>
                <li>
                  <Link to="/my/event/enlisted">
                    <div className="sub-nav-div">참가신청한 이벤트</div>
                  </Link>
                </li>
                <li>
                  <Link to="/my/event/hosting">
                    <div className="sub-nav-div">주최한 이벤트 </div>
                  </Link>
                </li>
                <li>
                  <Link to="/my/event/liked">
                    <div className="sub-nav-div">찜한 이벤트</div>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </MobileDrawer>
      )}
    </section>
  );
}

export default Header;
