import React, { useEffect, useCallback } from 'react';

import HeaderTemplate from '../components/template/HeaderTemplate';
import EventDetailTemplateContainer from '../containers/EventDetailTemplateContainer';

export default function EventDetail(props) {
  const eventId = props.match.params.event_id;

  return (
    <div>
      <HeaderTemplate />
      <EventDetailTemplateContainer eventId={eventId} />
    </div>
  );
}
