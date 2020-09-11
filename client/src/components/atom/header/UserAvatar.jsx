import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  size: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function UserAvatar({ goProfile }) {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  return (
    <div onClick={goProfile}>
      <Avatar
        className={classes.size}
        alt={user.username}
        src={user.profile_img}
      >
        U
      </Avatar>
    </div>
  );
}
