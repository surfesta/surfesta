import React from 'react';
import NightButton from '../../atom/header/NightButton';
import FavButton from '../../atom/header/FavButton';
import LoginButton from '../../atom/header/LoginButton';
import DayButton from '../../atom/header/DayButton';
import UserAvatar from '../../atom/header/UserAvatar';
import './HeaderRight.css';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { welcomeModal } from '../../../redux/modules/modal';
import { push } from 'connected-react-router';

export default function HeaderRight() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => {
    dispatch(welcomeModal());
  }, [dispatch]);

  const goProfile = useCallback(() => {
    dispatch(push('/my/profile'));
  }, [dispatch]);

  return (
    <section>
      <DayButton />
      <NightButton />
      <FavButton />
      {user ? (
        <UserAvatar goProfile={goProfile} />
      ) : (
        <LoginButton handleclick={handleLogin} />
      )}
    </section>
  );
}
