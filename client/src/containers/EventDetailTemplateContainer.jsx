import React from 'react';
import { useSelector } from 'react-redux';
import EventDetailTemplate from '../components/template/EventDetailTemplate';

export default function EventDetailTemplateContainer({ eventId }) {
  const events = useSelector((state) => state.events.events);
  const [event] = events.filter((event) => event._id === eventId);

  return (
    <>
      {events.length && <EventDetailTemplate event={event} />}
      {!events.length && <div className='init-height'></div>}
    </>
  );
}
