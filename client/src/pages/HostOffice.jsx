import React from 'react';
import HostTemplate from '../components/template/host/HostTemplate';

export default function HostOffice({ match }) {
  const { event_id } = match.params;
  return (
    <>
      <HostTemplate event_id={event_id} />
    </>
  );
}
