import React from 'react';
import EventTemplate from '../components/template/EventDetailTemplate';
import HeaderTemplate from '../components/template/HeaderTemplate';

export default function EventDetail(props) {
  const { event_id } = props.match.params;
  return (
    <div>
      <HeaderTemplate />
      <h2>Event ID : {event_id}</h2>
      <EventTemplate />
    </div>
  );
}
