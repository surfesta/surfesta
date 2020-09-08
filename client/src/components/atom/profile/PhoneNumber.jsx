import React from 'react';

export default function PhoneNumber({ user }) {
  return (
    <div className="form-div">
      <label>전화번호</label>
      <input
        type="text"
        name="phone-number"
        value={user && user.phone_number}
      />
    </div>
  );
}
