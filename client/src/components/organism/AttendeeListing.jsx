import React from 'react';
import UserSlot from '../molecule/UserSlot';

export default function AttendeeListing({ hostingEvent, handleClick, users }) {
  console.log(users);
  return (
    <>
      <div className="listed-users">
        {users
          ? hostingEvent.enlisted_users.map((user) => (
              <UserSlot
                hostingEvent={hostingEvent}
                user={user}
                key={user._id}
                handleClick={handleClick}
              />
            ))
          : users.map((user) => (
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
