import React, { useState } from 'react';
import FavButton from '../../atom/header/FavButton';
import LoginButton from '../../atom/header/LoginButton';
import UserAvatar from '../../atom/header/UserAvatar';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { welcomeModal } from '../../../redux/modules/modal';
import { push } from 'connected-react-router';
import './HeaderRight.scss';
import ThemeIndicator from './ThemeIndicator';

export default function HeaderRight() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = useCallback(() => {
    dispatch(welcomeModal());
  }, [dispatch]);

  const goProfile = useCallback(() => {
    dispatch(push('/my/profile'));
  }, [dispatch]);

  const goFavorite = useCallback(() => {
    dispatch(push('/my/event/liked'));
  }, [dispatch]);

  return (
    <section className="header-right">
      <ThemeIndicator />
      <FavButton onClick={goFavorite} />
      {user ? (
        <UserAvatar goProfile={goProfile} />
      ) : (
        <LoginButton handleclick={handleLogin} />
      )}
    </section>
  );
}
