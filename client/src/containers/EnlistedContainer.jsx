import React from 'react';
import Events from '../components/molecule/eventCategories/EnlistedCard';
import { useSelector, useDispatch } from 'react-redux';
import { startGetEvents } from '../redux/modules/events';
import EnlistedEvents from '../components/molecule/eventCategories/EnlistedEvents';
import EnlistedCard from '../components/molecule/eventCategories/EnlistedCard';

export default function EnlistedContainer() {
  // mapStateToProps
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);
  const user = useSelector(
    (state) => state.auth.user && state.auth.user.enlisted_events
  );
  console.log(user);

  // mapDispatchToProps
  const dispatch = useDispatch();
  const getEvents = React.useCallback(() => {
    dispatch(startGetEvents());
  }, [dispatch]);
  return (
    <EnlistedCard
      events={events}
      loading={loading}
      error={error}
      getEvents={getEvents}
    />
  );
}
