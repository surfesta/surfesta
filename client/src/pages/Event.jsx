import React from 'react';
import EventTemplate from '../components/template/EventTemplate';

export default function Event(props) {
  const { event_id } = props.match.params;
  return (
    <div>
      <h2>Event ID : {event_id}</h2>
      <EventTemplate />
    </div>
  );
}
