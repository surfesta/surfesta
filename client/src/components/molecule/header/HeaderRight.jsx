import React from 'react';
import NightButton from '../../atom/header/NightButton';
import FavButton from '../../atom/header/FavButton';
import LoginButton from '../../atom/header/LoginButton';
import DayButton from '../../atom/header/DayButton';
import UserAvatar from '../../atom/header/UserAvatar';
import './HeaderRight.css';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { welcomeModal } from '../../../redux/modules/modal';

export default function HeaderRight() {
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => {
    dispatch(welcomeModal());
  }, [dispatch]);
  return (
    <section>
      <DayButton />
      <NightButton />
      <FavButton />
      <UserAvatar />
      <LoginButton handleclick={handleLogin} />
    </section>
  );
}
