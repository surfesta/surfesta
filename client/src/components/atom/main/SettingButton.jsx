import React from 'react';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function SettingButton() {
  return (
    <IconButton aria-label='settings'>
      <MoreVertIcon />
    </IconButton>
  );
}
