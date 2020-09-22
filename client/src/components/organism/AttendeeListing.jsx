import React from 'react';
import UserSlot from '../molecule/UserSlot';

export default function AttendeeListing({
  hostingEvent,
  handleClick,
  filteredUsers,
}) {
  console.log(filteredUsers.length);
  return (
    <>
      <div className="listed-users">
        {hostingEvent && filteredUsers.length == 0
          ? hostingEvent.enlisted_users.map((user) => (
              <UserSlot
                hostingEvent={hostingEvent}
                user={user}
                key={user._id}
                handleClick={handleClick}
              />
            ))
          : filteredUsers.map((user) => (
              <UserSlot
                hostingEvent={hostingEvent}
                user={user}
                key={user._id}
                handleClick={handleClick}
              />
            ))}
      </div>
    </>
  );
}
