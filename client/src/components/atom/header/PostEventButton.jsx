import React from 'react';
import './PostEventButton.scss';

function PostEventButton({ handleClick }) {
  return (
    <button className="event-button" onClick={handleClick}>
      {' '}
      이벤트 주최하기
    </button>
  );
}

export default React.memo(PostEventButton);
