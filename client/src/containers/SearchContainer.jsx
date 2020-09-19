import React, { useEffect } from 'react';
import EventsTemplate from '../components/template/EventsTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { startSearchEvents } from '../redux/modules/events';

export default function SearchContainer({ searchedKeyword }) {
  // mapStateToProps
  const events = useSelector((state) => state.events.searchedEvents);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);
  const imgSrc = events && !events.length && '/img/nosearch.png';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startSearchEvents(searchedKeyword));
  }, [dispatch, searchedKeyword]);

  return (
    <>
      {events && (
        <EventsTemplate
          events={events}
          loading={loading}
          error={error}
          imgSrc={imgSrc}
          searchedKeyword={searchedKeyword}
        />
      )}
      {!events && <main className='init-height'></main>}
    </>
  );
}
