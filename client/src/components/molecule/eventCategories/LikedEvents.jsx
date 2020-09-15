import React from 'react';
import { Helmet } from 'react-helmet';
import LikedContainer from '../../../containers/LikedContainer';

function LikedEvents(props) {
  return (
    <>
      <Helmet>
        <title>찜한 이벤트 | Surfesta</title>
      </Helmet>
      <section className="cards-wrap">
        <div className="cards">
          <LikedContainer />
        </div>
      </section>
    </>
  );
}

export default LikedEvents;
