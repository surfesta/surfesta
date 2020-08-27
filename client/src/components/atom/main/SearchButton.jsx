import React from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchButton() {
  return (
    <IconButton aria-label='search'>
      <SearchIcon />
    </IconButton>
  );
}
