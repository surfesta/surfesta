import React, { useRef } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Filter.scss';

export default function Filter({ filter, setFilter, filterState }) {
  const { ALL, ONLINE, OFFLINE } = filterState;

  const [selected, setSelected] = React.useState(false);
  const selectRef = useRef();
  const selectListRef = useRef();

  const filterEvents = (type) => {
    setFilter(type);
  };

  return (
    <div className="filter-wrap">
      <button
        selected={selected}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <span ref={selectRef}>Our Events </span>
        <span className="more">
          <ExpandMoreIcon className={selected ? 'arrow rotataion' : 'arrow'} />
        </span>
      </button>
      <div className="selectList-wrap">
        <ul
          className={selected ? 'show' : 'hide'}
          ref={selectListRef}
          onClick={click}
        >
          <li
            onClick={() => {
              filterEvents(ALL);
            }}
            className={filter === ALL ? 'act' : undefined}
          >
            Our Events
          </li>
          <li
            onClick={() => {
              filterEvents(ONLINE);
            }}
            className={filter === ONLINE ? 'act' : undefined}
          >
            Online Events
          </li>
          <li
            onClick={() => {
              filterEvents(OFFLINE);
            }}
            className={filter === OFFLINE ? 'act' : undefined}
          >
            Offline Events
          </li>
        </ul>
      </div>
    </div>
  );

  function click(e) {
    if (e.target === selectListRef.current) return;
    selectRef.current.textContent = e.target.textContent;
    setSelected(!selected);
  }
}
