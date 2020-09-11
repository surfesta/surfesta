import React, { useEffect } from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { startGetEvents } from '../redux/modules/events';

export default function EventsContainer() {
  // mapStateToProps
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  // mapDispatchToProps
  const dispatch = useDispatch();

  return <EventsTemplate events={events} loading={loading} error={error} />;
}
