import React from 'react';
import LogoutDiv from '../molecule/profile/LogoutDiv';
import DeactivateDiv from '../molecule/profile/DeactivateDiv';
import './Logout.scss';
import UserService from '../../services/UserService';
import { push } from 'connected-react-router';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function LogoutSection() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = useCallback(async () => {
    const { success } = await UserService.logout();
    if (success) dispatch(push('/'));
  }, [dispatch]);

  const handleDeactivate = useCallback(async () => {
    const status = await UserService.deactivate(user);
    if (status === 204) dispatch(push('/'));
  }, [dispatch, user]);

  return (
    <section className="logout-section">
      <LogoutDiv handleClick={handleLogout} />
      <DeactivateDiv handleClick={handleDeactivate} />
    </section>
  );
}

export default LogoutSection;
