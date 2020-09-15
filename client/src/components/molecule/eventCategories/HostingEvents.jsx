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
        <section className='cards-wrap'>
          <h2>공개 이벤트</h2>
          <div className='cards'>
            <HostingContainer isOpen={true} />
          </div>
          <h2>비공개 이벤트</h2>
          <div className='cards'>
            <HostingContainer isOpen={false} />
          </div>
        </section>
      </div>
    </>
  );
}

export default HostingEvents;
