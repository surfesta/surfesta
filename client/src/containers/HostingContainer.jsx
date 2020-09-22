import React from 'react';
import { useSelector } from 'react-redux';
import HostingCards from '../components/molecule/eventCategories/HostingCard';

function HostingContainer(props) {
  const user = useSelector((state) => state.auth.user);
  const events = user && user.hosting_events;
  const isOpen = props.isOpen;
  return (
    <>
      {events && <HostingCards events={events} isOpen={isOpen} />}

      {!events.length && (
        <p className='no-event-text'>
          새로운 이벤트를 주최해보세요.
          <img src='/img/emoji02.png' alt='이모지' />
        </p>
      )}
    </>
  );
}

export default HostingContainer;
