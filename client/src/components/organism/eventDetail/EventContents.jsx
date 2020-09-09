import React from 'react';
import './EventContents.scss';
import OfflineContent from '../../molecule/eventDetail/OfflineContent';

export default function EventContents({ event }) {
  const content = event && event.content;
  const isOnline = event && event.isOnline;

  const innerHtml = (content) => ({ __html: content });

  return (
    <div className="eventContents-wrap">
      <div
        className="content"
        dangerouslySetInnerHTML={innerHtml(content)}
      ></div>
      {isOnline && <OfflineContent event={event} />}
    </div>
  );
}
