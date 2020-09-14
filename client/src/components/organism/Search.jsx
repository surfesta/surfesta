import React, { useRef, useEffect, useCallback, useState } from 'react';
import SearchButton from '../atom/main/SearchButton';
import './Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { startSearchEvents } from '../../redux/modules/events';

export default function Search({ searchedKeyword }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(searchedKeyword);
  const inputRef = useRef();

  const searchEvents = () => {
    const keyword = inputRef.current.value.trim();

    dispatch(startSearchEvents(keyword));
    keyword !== '' && dispatch(push(`/search/${keyword}`));
  };

  const submit = (e) => {
    e.preventDefault();
    searchEvents();
  };

  return (
    <div className="search-wrap">
      <div className="center">
        <form onSubmit={submit}>
          <input
            placeholder="어떤 이벤트를 찾고 계세요?"
            aria-label="검색"
            ref={inputRef}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value ? value : ''}
          />
        </form>
        <div className="search-btn" onClick={searchEvents}>
          <SearchButton />
        </div>
      </div>
    </div>
  );
}
