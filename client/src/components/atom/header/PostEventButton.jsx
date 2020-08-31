import React from 'react';

export default function PostEventButton({ handleClick }) {
  return (
    <div className="event-button" onClick={handleClick}>
      <button> 이벤트 주최하기</button>
    </div>
  );
}
