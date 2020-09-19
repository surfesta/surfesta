import React from "react";

export default function Email({ email }) {
  return (
    <div className="form-div">
      <label>이메일</label>
      <input type="text" name="email" value={email} readOnly />
    </div>
  );
}
