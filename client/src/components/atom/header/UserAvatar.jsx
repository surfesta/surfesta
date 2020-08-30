import React from 'react';
export default function UserAvatar({ goProfile }) {
  return (
    <div>
      <div className="user-avatar" onClick={goProfile}>
        <div>E</div>
      </div>
    </div>
  );
}
