import React from 'react';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function SettingButtons({ event }) {
  const eventId = event._id;
  return (
    <>
      <IconButton aria-label="enlistedUsers">
        <PeopleIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <Link
          to={{
            pathname: `/Revise/${eventId}`,
            state: {
              event,
            },
          }}
        >
          <EditIcon />
        </Link>
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
}
