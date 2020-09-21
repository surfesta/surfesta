import React from 'react';
import { useSelector } from 'react-redux';
import LikedCard from '../components/molecule/eventCategories/LikedCard';

function LikedContainer(props) {
  const user = useSelector((state) => state.auth.user);
  const events = user && user.liked_events;

  return (
    <>
      {events && <LikedCard events={events} />}
      {!events.length && (
        <p className='no-event-text'>
          관심있는 이벤트를 찜해보세요!
          <img src='/img/emoji03.png' alt='이모지' />
        </p>
      )}
    </>
  );
}

export default LikedContainer;
