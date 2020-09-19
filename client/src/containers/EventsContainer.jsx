import React from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector } from 'react-redux';

export default function EventsContainer() {
  // mapStateToProps
  const events = useSelector((state) => state.events.events);
  const error = useSelector((state) => state.events.error);

  return (
    <>
      {events.length && <EventsTemplate events={events} error={error} />}
      {!events.length && <main className='init-height'></main>}
    </>
  );
}
