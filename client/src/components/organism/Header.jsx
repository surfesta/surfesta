import React, { useCallback } from 'react';
import HeaderRight from '../molecule/header/HeaderRight';
import Logo from '../atom/header/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { welcomeModal } from '../../redux/modules/modal';
import PostEventButton from '../atom/header/PostEventButton';
import { push } from 'connected-react-router';
import './Header.scss';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handlePostEvent = useCallback(() => {
    if (user === null) {
      dispatch(welcomeModal('📝로그인 후 시작하기😉'));
      return;
    }
    dispatch(push('/createEvent'));
  }, [dispatch, user]);

  const handleLogoClick = useCallback(() => {
    dispatch(push('/'));
  }, [dispatch]);

  return (
    <header>
      <PostEventButton handleClick={handlePostEvent} />
      <Logo onClick={handleLogoClick} />
      <HeaderRight />
    </header>
  );
}
export default Header;
