import React, { useRef, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterList from './FilterList';
import './Filter.scss';

export default function Filter({ filter, setFilter, filterState }) {
  const [selected, setSelected] = useState(false);
  const selectRef = useRef();
  const selectListRef = useRef();

  const handleClick = (e) => {
    if (e.target === selectListRef.current) return;
    selectRef.current.textContent = e.target.textContent;
    setSelected(!selected);
  };
  return (
    <div className="filter-wrap">
      <button
        onClick={(e) => {
          setSelected(!selected);
        }}
      >
        <span ref={selectRef}>All Events</span>
        <span className="more">
          <ExpandMoreIcon className={selected ? 'arrow rotataion' : 'arrow'} />
        </span>
      </button>
      <div className="selectList-wrap">
        <FilterList
          selectListRef={selectListRef}
          selected={selected}
          setSelected={setSelected}
          handleClick={handleClick}
          filter={filter}
          setFilter={setFilter}
          filterState={filterState}
        />
      </div>
    </div>
  );
}
