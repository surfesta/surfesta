import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const NightButton = ({ onChange }) => (
  <IconButton onClick={onChange}>
    <Brightness2OutlinedIcon htmlColor="dimgrey" />
  </IconButton>
);
export default NightButton;
