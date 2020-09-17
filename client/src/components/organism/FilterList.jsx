import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

export default function FilterList({
  selectListRef,
  selected,
  setSelected,
  handleClick,
  filter,
  setFilter,
  filterState,
}) {
  const { ALL, ONLINE, OFFLINE } = filterState;

  useEffect(() => {
    window.document.body.addEventListener('click', (e) => {
      if (e.target.matches('.filter-wrap *')) return;
      setSelected(false);
    });
    return () => {
      window.document.body.removeEventListener('click', (e) => {
        if (e.target.matches('.filter-wrap *')) return;
        setSelected(false);
      });
    };
  }, []);

  return (
    <ul
      className={selected ? 'show' : 'hide'}
      ref={selectListRef}
      onClick={handleClick}
    >
      <li
        onClick={() => {
          setFilter(ALL);
        }}
        className={filter === ALL ? 'act' : undefined}
      >
        All Events
      </li>
      <li
        onClick={() => {
          setFilter(ONLINE);
        }}
        className={filter === ONLINE ? 'act' : undefined}
      >
        Online Events
      </li>
      <li
        onClick={() => {
          setFilter(OFFLINE);
        }}
        className={filter === OFFLINE ? 'act' : undefined}
      >
        Offline Events
      </li>
    </ul>
  );
}
