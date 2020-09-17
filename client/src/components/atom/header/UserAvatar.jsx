import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  default: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: '#2c3035',
  },
}));

function UserAvatar() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  return (
    <Avatar
      className={classes.default}
      alt={user.username}
      src={user.profile_img}
    >
      U
    </Avatar>
  );
}

export default UserAvatar;
