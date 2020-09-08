import React, { useRef } from 'react';

export default function Name({ user, handleChange }) {
  const nameInput = useRef();
  console.log(nameInput);
  return (
    <div className="form-div">
      <label className="label-style">이름</label>
      <input
        type="text"
        name="name"
        value={user && user.username}
        ref={nameInput}
        onChange={handleChange}
      />
    </div>
  );
}
