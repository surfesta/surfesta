import React, { useRef, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SortList from './SortList';
import './Sort.scss';

export default function Sort({ sort, setSort, sortState }) {
  const [selected, setSelected] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const selectRef = useRef();
  const selectListRef = useRef();

  const handleClick = (e) => {
    if (e.target === selectListRef.current) return;
    selectRef.current.textContent = e.target.textContent;

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
    <div className='sort-wrap'>
      <button selected={selected} onClick={toggleModal}>
        <span ref={selectRef}>Newest</span>
        <span className='more'>
          <ExpandMoreIcon className={isShow ? 'rotataion' : ''} />
        </span>
      </button>
      <div className={isShow ? 'selectList-wrap show' : 'selectList-wrap'}>
        <SortList
          sort={sort}
          setSort={setSort}
          sortState={sortState}
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
