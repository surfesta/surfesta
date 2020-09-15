import React from 'react';
import { Helmet } from 'react-helmet';
import HostingContainer from '../../../containers/HostingContainer';

function HostingEvents(props) {
  return (
    <>
      <Helmet>
        <title>주최한 이벤트 | Surfesta</title>
      </Helmet>
      <div>
        <section className="cards-wrap">
          <div className="cards">
            <HostingContainer />
          </div>
        </section>
      </div>
    </>
  );
}

export default HostingEvents;
