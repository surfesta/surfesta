import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import './UserSlot.scss';

export default function UserSlot({ user }) {
  return (
    <div className="user-slot">
      <div className="user-profile">
        <img src={user.profile_img} className="user-profile-img" />
        <span>{user.username}</span>
      </div>
      <div className="user-profile-email">{user.email}</div>
      <div className="user-profile-number">{'0' + user.phone_number}</div>
      <div className="user-profile-check">
        <CheckIcon className={false ? 'O' : 'X'} />
      </div>
    </div>
  );
}
