import React from 'react';

export default function PhoneNumber({ phoneNumber, phoneNumChange }) {
  return (
    <div className="form-div">
      <label>전화번호</label>
      <input
        type="tel"
        name="phone_number"
        value={phoneNumber}
        onChange={phoneNumChange}
      />
    </div>
  );
}
