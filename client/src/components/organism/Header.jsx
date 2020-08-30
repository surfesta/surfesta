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
  const token = useSelector((state) => state.auth.token);
  const handleClick = useCallback(() => {
    if (!token) {
      dispatch(welcomeModal('📝로그인 후 시작하기😉'));
      return;
    }
    dispatch(push('/createEvent'));
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
export default Header;
