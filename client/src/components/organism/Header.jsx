import React from 'react';
import HeaderRight from '../molecule/header/HeaderRight';
import PostEventButton from '../atom/header/PostEvent';
import Logo from '../atom/header/Logo';
import './Header.css';

export default function Header() {
  return (
    <header>
      <PostEventButton />
      <Logo />
      <HeaderRight />
    </header>
  );
}
