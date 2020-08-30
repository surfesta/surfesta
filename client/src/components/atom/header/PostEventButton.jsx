import React from 'react';

export default function PostEventButton({ handleClick }) {
  return (
    <button className="event-button" onClick={handleClick}>
      이벤트 주최하기
    </button>
  );
}
