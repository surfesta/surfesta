import React, { useCallback } from 'react';
import HeaderRight from '../molecule/header/HeaderRight';
import Logo from '../atom/header/Logo';
import './Header.css';
import { useDispatch } from 'react-redux';
import { setSignInModal } from '../../redux/modules/modal';
import PostEventButton from '../atom/header/PostEventButton';

export default function Header() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    // if(로그인되었다면) /postEvent로 이동
    dispatch(setSignInModal('📝로그인 후 시작하기😉'));
  }, [dispatch]);

  return (
    <header>
      <PostEventButton handleClick={handleClick}>
        이벤트추가하기
      </PostEventButton>
      <Logo />
      <HeaderRight />
    </header>
  );
}
