import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import Logo from '../atom/header/Logo';
import './Footer.scss';

export default function Footer() {
  const dispatch = useDispatch();
  const handleLogoClick = useCallback(() => {
    dispatch(push('/'));
  }, [dispatch]);

  return (
    <footer>
      <a
        href='https://github.com/surfesta/surfesta'
        target='_blank'
        className='github'
      >
        <img src='/img/github.svg' />
      </a>
      <ul className='detail-info'>
        <li>
          <a href='https://github.com/tinkerbell93' target='_blank'>
            김가현
          </a>
        </li>
        <li>
          <a href='https://github.com/domuk-k' target='_blank'>
            김동욱
          </a>
        </li>
        <li>
          <a href='https://github.com/Crescenteea' target='_blank'>
            김미연
          </a>
        </li>
        <li>
          <a href='https://github.com/kr-ub' target='_blank'>
            윤유비
          </a>
        </li>
      </ul>
    </footer>
  );
}
