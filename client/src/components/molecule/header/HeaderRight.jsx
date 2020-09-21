import React, { useEffect, useState } from 'react';
import FavButton from '../../atom/header/FavButton';
import LoginButton from '../../atom/header/LoginButton';
import UserAvatar from '../../atom/header/UserAvatar';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { welcomeModal } from '../../../redux/modules/modal';
import { push } from 'connected-react-router';
import './HeaderRight.scss';
import ThemeIndicator from './ThemeIndicator';
import { NavLink } from 'react-router-dom';

export default function HeaderRight({ handleLogin }) {
  const user = useSelector((state) => state.auth.user);

  const [visible, setvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setvisible(true), 280);
  }, []);

  return (
    <div className="header-right-wrapper">
      {visible && (
        <section className="header-right">
          <ThemeIndicator />
          <div className="auth-indicator">
            {user ? (
              <>
                <NavLink to="/my/event/liked">
                  <FavButton />
                </NavLink>
                <NavLink to="/my/profile">
                  <UserAvatar />
                </NavLink>
              </>
            ) : (
              <LoginButton
                className="header-login-button"
                onClick={handleLogin}
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
}
