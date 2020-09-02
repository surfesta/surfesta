import React, { useRef } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Filter.scss';

export default function Filter() {
  const [selected, setSelected] = React.useState(false);
  const selectRef = useRef();
  const selectListRef = useRef();

  return (
    <div className="filter-wrap">
      <button
        selected={selected}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <span ref={selectRef}>Our Events </span>{' '}
        <i role="img" aria-label="아이콘">
          🎉
        </i>
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
          <li>Our Events</li>
          <li>Online Events</li>
          <li>Offline Events</li>
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
