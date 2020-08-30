import React from 'react';
import { Link } from 'react-router-dom';

export default function PostEventButton({ handleClick }) {
  return (
    <button className="event-button" onClick={handleClick}>
      <Link to="/createEvent"> 이벤트 주최하기</Link>
    </button>
  );
}
