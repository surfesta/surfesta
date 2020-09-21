import React from 'react';

import EventDetailTemplateContainer from '../containers/EventDetailTemplateContainer';

export default function EventDetail(props) {
  const eventId = props.match.params.event_id;

  return (
    <div className='init-height'>
      <EventDetailTemplateContainer eventId={eventId} />
    </div>
  );
}
