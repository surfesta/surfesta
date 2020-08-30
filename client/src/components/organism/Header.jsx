import React, { useCallback } from 'react';
import './Header.css';
import HeaderRight from '../molecule/header/HeaderRight';
import Logo from '../atom/header/Logo';
import { useDispatch } from 'react-redux';
import { welcomeModal } from '../../redux/modules/modal';
import PostEventButton from '../atom/header/PostEventButton';
import { push } from 'connected-react-router';
import { Redirect, withRouter } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    // if(로그인되었다면) /postEvent로 이동
    // dispatch(welcomeModal('📝로그인 후 시작하기😉'));
  }, [dispatch]);

  const handleLogoClick = useCallback(() => {
    dispatch(push('/'));
  }, [dispatch]);

  return (
    <header>
      <PostEventButton handleClick={handleClick} />
      <Logo onClick={handleLogoClick} />
      <HeaderRight />
    </header>
  );
}
export default withRouter(Header);
