import React from 'react';
import SearchContainer from '../containers/SearchContainer';

export default function Search(props) {
  console.log('??');
  const keyword = props.match.params.keyword;
  return (
    <div className='init-height'>
      <SearchContainer searchedKeyword={keyword} />
    </div>
  );
}
