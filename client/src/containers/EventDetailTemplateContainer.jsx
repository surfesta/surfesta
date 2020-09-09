import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EventDetailTemplate from '../components/template/EventDetailTemplate';
import { startGetEvents } from '../redux/modules/events';

export default function EventDetailTemplateContainer({ eventId }) {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.events.events);
  const [event] = events.filter((event) => event._id === eventId);

  const getEvents = useCallback(() => {
    dispatch(startGetEvents());
  }, [dispatch]);

  useEffect(() => {
    getEvents();
    return getEvents();
  }, [getEvents]);

  return <EventDetailTemplate event={event} />;
}
