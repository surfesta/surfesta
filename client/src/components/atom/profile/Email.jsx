import React from 'react';

export default function Email({ user }) {
  return (
    <div className="form-div">
      <label>이메일</label>
      <input type="text" name="email" value={user && user.email} readOnly />
    </div>
  );
}
