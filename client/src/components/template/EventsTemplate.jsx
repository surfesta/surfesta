import React, { useEffect } from 'react';
import Card from '../organism/main/Card';
import './EventsTemplate.scss';
import Search from '../organism/Search';
import Filter from '../organism/Filter';
import errorImg from '../../img/error.png';

// Presentational Component
export default function EventsTemplate({ events, loading, error }) {
  return (
    <main className="main">
      <h2 className="a11y-hidden">이벤트 검색</h2>
      <Search />
      <Filter />
      <section className="cards-wrap">
        <h2 className="a11y-hidden">이벤트 리스트</h2>

        {error && (
          <div className="error-img">
            <img src={errorImg} alt="에러" />
            {/* <span>
              Illustration by <a href="undefined">Maria Shukshina</a> from{' '}
              <a href="https://icons8.com/">Icons8</a>
            </span> */}
          </div>
        )}
        <div className="cards">
          {events &&
            events.map((event) => {
              return event.isOpen && <Card event={event} key={event._id} />;
            })}
        </div>
      </section>
    </main>
  );
}
