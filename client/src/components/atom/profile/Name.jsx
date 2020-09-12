import React from 'react';

export default function Name({ name, nameChange }) {
  return (
    <div className="form-div">
      <label className="label-style">이름</label>
      <input
        type="text"
        name="username"
        value={name === null ? '' : name}
        onChange={nameChange}
      />
    </div>
  );
}
