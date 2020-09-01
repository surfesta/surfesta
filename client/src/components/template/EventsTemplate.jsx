import React from 'react';
import Card from '../organism/Card';
import './EventsTemplate.scss';
import Search from '../organism/Search';
import Filter from '../organism/Filter';

// Presentational Component
export default function EventsTemplate({ events, loading, error, getEvents }) {
  console.log('이벤트리스트 : ', events, loading, error);
  React.useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <main className="main">
      <h2 className="a11y-hidden">이벤트 검색</h2>
      <Search />
      <Filter />
      <section className="cards-wrap">
        <h2 className="a11y-hidden">이벤트 리스트</h2>

        {loading && <span className="loading-text">로딩 중!!!!!</span>}
        {error && <span className="error-text">에러닷!!!!!!!!</span>}
        <div className="cards">{error === null && <Card eventId={1} />}</div>
      </section>
    </main>
  );
}
