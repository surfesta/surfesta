import React from 'react';

export default function Name({ user, handleChange }) {
  return (
    <div className="form-div">
      <label className="label-style">이름</label>
      <input
        type="text"
        name="name"
        value={user && user.username}
        onChange={handleChange}
      />
    </div>
  );
}
