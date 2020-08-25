import React from 'react';
import NightButton from '../../atom/header/NightButton';
import FavButton from '../../atom/header/FavButton';
import LoginButton from '../../atom/header/LoginButton';
import DayButton from '../../atom/header/DayButton';
import UserAvatar from '../../atom/header/UserAvatar';
import './HeaderRight.css';

export default function HeaderRight() {
  return (
    <section>
      <DayButton />
      <NightButton />
      <FavButton />
      <UserAvatar />
      <LoginButton />
    </section>
  );
}
