import React from 'react';
import './EventDetailTemplate.scss';
import EventInfo from '../organism/eventDetail/EventInfo';
import EventContents from '../organism/eventDetail/EventContents';

export default function EventDetailTemplate() {
  return (
    <main className="main">
      <div className="eventDetail">
        <EventInfo />
        <EventContents />
      </div>
    </main>
  );
}
