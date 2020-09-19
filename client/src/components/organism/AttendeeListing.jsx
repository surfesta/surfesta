import React from 'react';
import UserSlot from '../molecule/UserSlot';

export default function AttendeeListing({ hostingEvent, handleClick }) {
  return (
    <>
      <div className="listed-users">
        {hostingEvent &&
          hostingEvent.enlisted_users.map((user) => (
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
