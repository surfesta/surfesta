import React from 'react';
import HostingContainer from '../../../containers/HostingContainer';

function HostingEvents(props) {
  return (
    <div>
      <section className="cards-wrap">
        <h2>공개 이벤트</h2>
        <div className="cards">
          <HostingContainer isOpen={true} />
        </div>
        <h2>비공개 이벤트</h2>
        <div className="cards">
          <HostingContainer isOpen={false} />
        </div>
      </section>
    </div>
  );
}

export default HostingEvents;
