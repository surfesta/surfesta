import React from 'react';
import UserSlot from '../molecule/UserSlot';

export default function AttendeeListing({ event }) {
  return (
    <>
      <div className="listed-users">
        {event &&
          event.enlisted_users.map((user) => (
            <UserSlot user={user} key={user._id} />
          ))}
      </div>
    </>
  );
}
