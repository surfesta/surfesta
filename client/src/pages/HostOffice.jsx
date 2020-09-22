import React, { useEffect, useState } from 'react';
import HostTemplate from '../components/template/host/HostTemplate';
import { getCookieValue } from '../utils/getCookieValue';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Redirect } from 'react-router-dom';

export default function HostOffice({ match }) {
  const { event_id } = match.params;
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const clientCookie = getCookieValue('surf_auth');
  const [authDone, setAuthDone] = useState(false);

  useEffect(() => {
    if (user) setAuthDone(true);
    if (error) dispatch(push('/'));
  }, [setAuthDone, user, error]);

  if (!clientCookie) return <Redirect to='/' />;

  return (
    <div className='init-height'>
      {authDone && <HostTemplate event_id={event_id} />}
    </div>
  );
}
