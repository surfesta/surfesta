import React from "react";
import ProfileBtn from "../../atom/profile/ProfileBtn";
import Email from "../../atom/profile/Email";
import Name from "../../atom/profile/Name";
import PhoneNumber from "../../atom/profile/PhoneNumber";
import { useSelector } from "react-redux";

function ProfileForm({
  user,
  name,
  phoneNumber,
  nameChange,
  phoneNumChange,
  handleSubmit,
}) {
  return (
    <form className="profile-form">
      <Email email={user.email} />
      <Name name={name} nameChange={nameChange} />
      <PhoneNumber phoneNumber={phoneNumber} phoneNumChange={phoneNumChange} />
      <div className="form-btn">
        <ProfileBtn name="제출 하기" handleClick={handleSubmit} />
      </div>
    </form>
  );
}

export default ProfileForm;
