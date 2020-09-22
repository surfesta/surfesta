import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EnlistedCard from '../components/molecule/eventCategories/EnlistedCard';

export default function EnlistedContainer() {
  const user = useSelector((state) => state.auth.user);
  const events = user && user.enlisted_events;
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  return (
    <>
      {events && (
        <EnlistedCard events={events} loading={loading} error={error} />
      )}
      {!events.length && (
        <p className='no-event-text'>
          아직 참가신청한 이벤트가 없네요!
          <img src='/img/emoji01.png' alt='이모지' />
        </p>
      )}
    </>
  );
}
