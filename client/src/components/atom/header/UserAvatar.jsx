import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: deepOrange[500],
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function UserAvatar({ goProfile }) {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return (
    <div>
      <div onClick={goProfile}>
        <Avatar
          className={classes.small}
          alt={user.username}
          src={user.profile_img}
        >
          U
        </Avatar>
      </div>
    </div>
  );
}
