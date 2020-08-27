import React from 'react';
import SearchInput from '../molecule/main/SearchInput';
import SearchButton from '../atom/main/SearchButton';
import './Search.scss';

export default function Search() {
  return (
    <div className='search-wrap'>
      <div className='center'>
        <SearchInput />
        <div className='search-btn'>
          <SearchButton />
        </div>
      </div>
    </div>
  );
}
