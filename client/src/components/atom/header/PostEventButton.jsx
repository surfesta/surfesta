import React from 'react';
import { Link } from 'react-router-dom';

export default function PostEventButton({ handleClick }) {
  return (
    <button className="event-button" onClick={handleClick}>
      <button> 이벤트 주최하기</button>
    </button>
  );
}
