import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './EventDetailTemplate.scss';
import EventInfo from '../organism/eventDetail/EventInfo';
import EventContents from '../organism/eventDetail/EventContents';

export default function EventDetailTemplate({ event }) {
  return (
    <main className="main">
      <div className="eventDetail">
        <EventInfo event={event} />
        <EventContents event={event} />
      </div>
    </main>
  );
}
