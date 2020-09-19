import React, { useState } from "react";
import Card from "../organism/main/Card";
import "./EventsTemplate.scss";
import Search from "../organism/Search";
import Filter from "../organism/Filter";
import Sort from "../organism/Sort";

// Presentational Component
export default function EventsTemplate({
  events,
  error,
  imgSrc,
  searchedKeyword,
}) {
  const sortState = {
    NEWEST: "NEWEST",
    OLDEST: "OLDEST",
    MOSTLIKED: "MOSTLIKED",
    MOSTPOPULAR: "MOSTPOPULAR",
    CHEAPEST: "CHEAPEST",
    MOSTEXPENSIVE: "MOSTEXPENSIVE",
  };

  const {
    NEWEST,
    OLDEST,
    MOSTLIKED,
    MOSTPOPULAR,
    CHEAPEST,
    MOSTEXPENSIVE,
  } = sortState;

  const filterState = {
    ALL: "ALL",
    ONLINE: "ONLINE",
    OFFLINE: "OFFLINE",
  };

  const { ALL, ONLINE, OFFLINE } = filterState;

  const [sort, setSort] = useState(NEWEST);
  const [filter, setFilter] = useState(ALL);

  // Newest
  let _events =
    sort === NEWEST &&
    events.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  // Oldest
  _events =
    sort === OLDEST &&
    events.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });

  // Most liked
  _events =
    sort === MOSTLIKED &&
    events.sort((a, b) => {
      return b.like_count - a.like_count;
    });

  // Most popular
  _events =
    sort === MOSTPOPULAR &&
    events.sort((a, b) => {
      return b.cur_count / b.max_count - a.cur_count / a.max_count;
    });

  // Cheapest
  _events =
    sort === CHEAPEST &&
    events.sort((a, b) => {
      return a.price - b.price;
    });

  // Most expensice
  _events =
    sort === MOSTEXPENSIVE &&
    events.sort((a, b) => {
      return b.price - a.price;
    });

  return (
    <main className="main">
      <h2 className="a11y-hidden">이벤트 검색</h2>
      <Search searchedKeyword={searchedKeyword} />
      <div className="select-wrap">
        <Filter
          filter={filter}
          setFilter={setFilter}
          filterState={filterState}
        />
        <Sort setSort={setSort} sortState={sortState} />
      </div>

      <section className="cards-wrap">
        <h2 className="a11y-hidden">이벤트 리스트</h2>

        {error && (
          <div className="img-wrap">
            <img src="/img/error.png" alt="에러" />
          </div>
        )}
        {imgSrc && (
          <div className="img-wrap nosearch">
            <img src={imgSrc} alt="검색결과를 찾을 수 없습니다." />
          </div>
        )}
        <div className="cards">
          {Array.isArray(events) &&
            filter === ALL &&
            events.map((event) => {
              return event.isOpen && <Card event={event} key={event._id} />;
            })}
          {Array.isArray(events) &&
            filter === ONLINE &&
            events.map((event) => {
              return (
                event.isOpen &&
                event.isOnline && <Card event={event} key={event._id} />
              );
            })}
          {Array.isArray(events) &&
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
