import React, { useEffect } from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector, useDispatch } from 'react-redux';

export default function EventsContainer() {
  // mapStateToProps
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  return <EventsTemplate events={events} loading={loading} error={error} />;
}
