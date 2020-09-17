import React from "react";

export default function Email({ user }) {
  const email = user && user.email;
  return (
    <div className="form-div">
      <label>이메일</label>
      <input type="text" name="email" value={email} readOnly />
    </div>
  );
}
