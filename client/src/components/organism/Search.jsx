import React from 'react';
import SearchInput from '../molecule/main/SearchInput';
import SeracheButton from '../atom/main/SearchButton';

export default function Search() {
  return (
    <div className='search'>
      <SearchInput />
      <SeracheButton />
    </div>
  );
}
