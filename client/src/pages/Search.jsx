import React from 'react';
import SearchContainer from '../containers/SearchContainer';

export default function Search(props) {
  const keyword = props.match.params.keyword;
  return <SearchContainer searchedKeyword={keyword} />;
}
