import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import './UserSlot.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export default function UserSlot({ user, handleClick, hostingEvent }) {
  const [attendance, setAttendance] = useState(false);

  useEffect(() => {
    if (hostingEvent.attended_users.some((u) => u._id === user._id))
      setAttendance(true);
  }, [hostingEvent.attended_users]);

  const handleToggle = useCallback(() => {
    setAttendance(!attendance);
    handleClick(user._id, !attendance);
  }, [attendance, handleClick]);

  return (
    <div className="user-slot">
      <div className="user-profile">
        <img src={user.profile_img} className="user-profile-img" />
        <span>{user.username}</span>
      </div>
      <div className="user-profile-email">{user.email}</div>
      <div className="user-profile-number">{'0' + user.phone_number}</div>
      <div className="user-profile-check" onClick={handleToggle}>
        <CheckIcon className={attendance ? 'O' : 'X'} />
      </div>
    </div>
  );
}
