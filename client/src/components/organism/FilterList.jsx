import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

export default function FilterList({
  filter,
  setFilter,
  filterState,
  selected,
  setSelected,
  setIsShow,
  selectListRef,
  handleClick,
}) {
  const { ALL, ONLINE, OFFLINE } = filterState;

  useEffect(() => {
    window.document.body.addEventListener('click', (e) => {
      if (e.target.matches('.filter-wrap *')) return;
      setIsShow(false);
      setTimeout(() => {
        setSelected(false);
      }, 100);
    });
    return () => {
      window.document.body.removeEventListener('click', (e) => {
        if (e.target.matches('.filter-wrap *')) return;
        setIsShow(false);
        setTimeout(() => {
          setSelected(false);
        }, 100);
      });
    };
  }, []);

  return (
    selected && (
      <ul ref={selectListRef} onClick={handleClick}>
        <li
          onClick={() => {
            setFilter(ALL);
          }}
          className={filter === ALL ? 'act' : null}
        >
          All Events
        </li>
        <li
          onClick={() => {
            setFilter(ONLINE);
          }}
          className={filter === ONLINE ? 'act' : null}
        >
          Online Events
        </li>
        <li
          onClick={() => {
            setFilter(OFFLINE);
          }}
          className={filter === OFFLINE ? 'act' : null}
        >
          Offline Events
        </li>
      </ul>
    )
  );
}
