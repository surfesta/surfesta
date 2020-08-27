import React from 'react';
import EventInfo from '../organism/eventDetail/EventInfo';
import EventContents from '../organism/eventDetail/EventContents';

export default function EventDetailTemplate() {
  return (
    <div>
      <EventInfo />
      <EventContents />
    </div>
  );
}
