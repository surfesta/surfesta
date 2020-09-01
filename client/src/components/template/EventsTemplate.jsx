import React from 'react';
import Card from '../organism/Card';
import './EventsTemplate.scss';
import Search from '../organism/Search';
import Filter from '../organism/Filter';

// Presentational Component
export default function EventsTemplate({
  events,
  loading,
  error,
  getEvents,
  test,
}) {
  console.log('이벤트리스트 : ', events, loading, error);
  return (
    <main className="main">
      <h2 className="a11y-hidden">이벤트 검색</h2>
      <Search />
      <Filter />
      <section className="cards">
        <h2 className="a11y-hidden">이벤트 리스트</h2>
        <Card eventId={1} />
        <Card eventId={2} />
        <Card eventId={3} />
        <Card eventId={4} />
        <Card eventId={5} />
      </section>
    </main>
  );
}
