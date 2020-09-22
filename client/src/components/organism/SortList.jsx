import React, { useEffect } from 'react';

export default function SortList({
  sort,
  setSort,
  sortState,
  selected,
  setSelected,
  setIsShow,
  selectListRef,
  handleClick,
}) {
  const {
    NEWEST,
    OLDEST,
    MOSTLIKED,
    MOSTPOPULAR,
    CHEAPEST,
    MOSTEXPENSIVE,
  } = sortState;

  useEffect(() => {
    window.document.body.addEventListener('click', (e) => {
      if (e.target.matches('.sort-wrap *')) return;
      setIsShow(false);
      setTimeout(() => {
        setSelected(false);
      }, 100);
    });
    return () => {
      window.document.body.addEventListener('click', (e) => {
        if (e.target.matches('.sort-wrap *')) return;
        setIsShow(false);
        setTimeout(() => {
          setSelected(false);
        }, 100);
      });
    };
  }, []);

  const toggleClassName = (state) => (state === sort ? 'act' : null);

  return (
    selected && (
      <ul ref={selectListRef} onClick={handleClick}>
        <li
          onClick={(e) => {
            setSort(NEWEST);
          }}
        >
          Newest
        </li>
        <li
          onClick={() => {
            setSort(OLDEST);
          }}
        >
          Oldest
        </li>
        <li
          onClick={() => {
            setSort(MOSTLIKED);
          }}
        >
          Most liked
        </li>
        <li
          onClick={() => {
            setSort(MOSTPOPULAR);
          }}
        >
          Most popular
        </li>
        <li
          onClick={() => {
            setSort(CHEAPEST);
          }}
        >
          Cheapest
        </li>
        <li
          onClick={() => {
            setSort(MOSTEXPENSIVE);
          }}
        >
          Most expensive
        </li>
      </ul>
    )
  );
}
