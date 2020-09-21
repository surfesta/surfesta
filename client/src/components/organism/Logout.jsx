import React from 'react';
import LogoutDiv from '../molecule/profile/LogoutDiv';
import DeactivateDiv from '../molecule/profile/DeactivateDiv';
import './Logout.scss';
import UserService from '../../services/UserService';
import { push } from 'connected-react-router';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cookieCheckSagaActionCreator } from '../../redux/modules/auth';

function LogoutSection() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = useCallback(async () => {
    const { success } = await UserService.logout();
    dispatch(cookieCheckSagaActionCreator());
    if (success) dispatch(push('/'));
    window.scrollTo(0, 0);
  }, [dispatch]);

  const handleDeactivate = useCallback(async () => {
    window.location.href = '/';
    window.scrollTo(0, 0);
    await UserService.deactivate(user);
    dispatch(cookieCheckSagaActionCreator());
  }, [dispatch, user]);

  return (
    <section className="logout-section">
      <LogoutDiv handleClick={handleLogout} />
      <DeactivateDiv handleClick={handleDeactivate} />
    </section>
  );
}

export default LogoutSection;
