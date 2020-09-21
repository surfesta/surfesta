import React, { useRef, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterList from './FilterList';
import './Filter.scss';

export default function Filter({ filter, setFilter, filterState }) {
  const [selected, setSelected] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const selectRef = useRef();
  const selectListRef = useRef();

  const handleClick = (e) => {
    if (e.target === selectListRef.current) return;

    toggleModal();
  };

  const toggleModal = () => {
    setIsShow(!isShow);

    !selected && setSelected(true);
    selected &&
      setTimeout(() => {
        setSelected(false);
      }, 100);
  };

  return (
    <div className='filter-wrap'>
      <button onClick={toggleModal}>
        <span>{filter} Events</span>
        <span className='more'>
          <ExpandMoreIcon className={isShow ? 'arrow rotataion' : 'arrow'} />
        </span>
      </button>
      <div className={isShow ? 'selectList-wrap show' : 'selectList-wrap '}>
        <FilterList
          filter={filter}
          setFilter={setFilter}
          filterState={filterState}
          selected={selected}
          setSelected={setSelected}
          setIsShow={setIsShow}
          selectListRef={selectListRef}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
