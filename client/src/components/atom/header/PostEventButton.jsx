import React from 'react';
import './PostEventButton.scss';

export default function PostEventButton({ handleClick }) {
  return (
    <div onClick={handleClick}>
      <button className="event-button"> 이벤트 주최하기</button>
    </div>
  );
}
