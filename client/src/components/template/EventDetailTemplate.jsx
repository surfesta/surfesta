import React, { useEffect } from 'react';
import './EventDetailTemplate.scss';
import EventInfo from '../organism/eventDetail/EventInfo';
import EventContents from '../organism/eventDetail/EventContents';
import { Helmet } from 'react-helmet';

export default function EventDetailTemplate({ event }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = event.title;
  const thumbnail = event.thumbnail;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta property='og:image' content={thumbnail} />
      </Helmet>
      <main className='main'>
        <div className='eventDetail'>
          <EventInfo event={event} />
          <EventContents event={event} />
        </div>
      </main>
    </>
  );
}
