import React from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector, useDispatch } from 'react-redux';

/*
{
  events: [],
  loading: false,
  error: null
}
*/

export default function EventsContainer() {
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  const dispatch = useDispatch();
  const getEvents = React.useCallback(() => {
    // dispatch(startGetEvetnsActionCreator());
  }, [dispatch]);

  return (
    <EventsTemplate
      events={events}
      loading={loading}
      error={error}
      getEvents={getEvents}
    />
  );
}
