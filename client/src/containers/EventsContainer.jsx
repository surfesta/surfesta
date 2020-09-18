import React from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function EventsContainer() {
  // mapStateToProps
  const events = useSelector((state) => state.events.events);
  const error = useSelector((state) => state.events.error);
  // !events.length && console.log('render');

  return <EventsTemplate events={events} error={error} />;
}
