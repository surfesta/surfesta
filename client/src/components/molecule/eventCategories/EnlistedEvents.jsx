import React from 'react';
import EnlistedContainer from '../../../containers/EnlistedContainer';

export default function EnlistedEvents() {
  return (
    <>
      <h1>참가신청한 이벤트</h1>
      <section className="cards-wrap">
        <div className="cards">
          <EnlistedContainer />;
        </div>
      </section>
    </>
  );
}
