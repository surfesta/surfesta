import React, { useState } from 'react';
import Card from '../organism/main/Card';
import './EventsTemplate.scss';
import Search from '../organism/Search';
import Filter from '../organism/Filter';

// Presentational Component
export default function EventsTemplate({
  events,
  loading,
  error,
  imgSrc,
  searchedKeyword,
}) {
  const filterState = {
    ALL: 'ALL',
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE',
  };

  const { ALL, ONLINE, OFFLINE } = filterState;
  const [filter, setFilter] = useState(ALL);

  return (
    <main className="main">
      <h2 className="a11y-hidden">이벤트 검색</h2>
      <Search searchedKeyword={searchedKeyword} />
      <Filter filter={filter} setFilter={setFilter} filterState={filterState} />
      <section className="cards-wrap">
        <h2 className="a11y-hidden">이벤트 리스트</h2>

        {error && (
          <div className="img-wrap">
            <img src="/img/error.png" alt="에러" />
            {/* <span>
              Illustration by <a href="undefined">Maria Shukshina</a> from
              <a href="https://icons8.com/">Icons8</a>
            </span> */}
          </div>
        )}
        {imgSrc && (
          <div className="img-wrap nosearch">
            <img src={imgSrc} alt="검색결과를 찾을 수 없습니다." />
          </div>
        )}
        <div className="cards">
          {events &&
            filter === ALL &&
            events.map((event) => {
              return event.isOpen && <Card event={event} key={event._id} />;
            })}
          {events &&
            filter === ONLINE &&
            events.map((event) => {
              return (
                event.isOpen &&
                event.isOnline && <Card event={event} key={event._id} />
              );
            })}
          {events &&
            filter === OFFLINE &&
            events.map((event) => {
              return (
                event.isOpen &&
                !event.isOnline && <Card event={event} key={event._id} />
              );
            })}
        </div>
      </section>
    </main>
  );
}
