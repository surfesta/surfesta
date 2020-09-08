import React, { useEffect } from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { startGetEvents } from '../redux/modules/events';
import { startGetUser } from '../redux/modules/user';

export default function EventsContainer() {
  // mapStateToProps
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);
  const user = useSelector((state) => state.auth.user);
  const userId = user && user._id;

  // mapDispatchToProps
  const dispatch = useDispatch();
  const getEvents = React.useCallback(() => {
    dispatch(startGetEvents());
  }, [dispatch]);

  useEffect(() => {
    dispatch(startGetUser(userId));
  }, [userId]);

  return (
    <EventsTemplate
      events={events}
      loading={loading}
      error={error}
      getEvents={getEvents}
    />
  );
}
