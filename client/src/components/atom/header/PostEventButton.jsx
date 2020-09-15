import React from 'react';
import { NavLink } from 'react-router-dom';
import './PostEventButton.scss';

export default function PostEventButton() {
  return (
    <NavLink to="/createEvent">
      <button className="event-button"> 이벤트 주최하기</button>
    </NavLink>
  );
}
