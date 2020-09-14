import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  size: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function UserAvatar() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  return (
    <NavLink to="/my/profile">
      <Avatar className={classes.size} alt={user.username} src={user.profile_img}>
        U
      </Avatar>
    </NavLink>
  );
}
