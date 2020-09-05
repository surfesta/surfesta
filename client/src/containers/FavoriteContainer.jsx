import React from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { startToggleFavInEvent } from '../redux/modules/events';

export default function FavoriteContainer() {
  // mapStateToProps
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  // mapDispatchToProps
  const dispatch = useDispatch();
  const togglefavInEvent = React.useCallback(() => {
    dispatch(startToggleFavInEvent(action));
  }, [dispatch]);
}
