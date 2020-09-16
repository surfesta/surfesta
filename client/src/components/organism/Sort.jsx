import React, { useRef, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Sort.scss';

export default function Sort({ sort, setSort, sortState }) {
  const {
    NEWEST,
    OLDEST,
    MOSTLIKED,
    MOSTPOPULAR,
    CHEAPEST,
    MOSTEXPENSIVE,
  } = sortState;

  const [selected, setSelected] = useState(false);
  const selectRef = useRef();
  const selectListRef = useRef();

  const click = (e) => {
    if (e.target === selectListRef.current) return;
    selectRef.current.textContent = e.target.textContent;
    setSelected(!selected);
  };

  return (
    <div className='sort-wrap'>
      <button
        selected={selected}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <span ref={selectRef}>Newest</span>
        <span className='more'>
          <ExpandMoreIcon className={selected ? 'rotataion' : ''} />
        </span>
      </button>
      <div className='selectList-wrap'>
        <ul
          className={selected ? 'show' : 'hide'}
          ref={selectListRef}
          onClick={click}
        >
          <li
            onClick={() => {
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
      </div>
    </div>
  );
}
