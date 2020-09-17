import React from "react";
import ProfileBtn from "../../atom/profile/ProfileBtn";
import Email from "../../atom/profile/Email";
import Name from "../../atom/profile/Name";
import PhoneNumber from "../../atom/profile/PhoneNumber";

function ProfileForm({
  user,
  name,
  nameChange,
  phoneNumber,
  phoneNumChange,
  handleSubmit,
}) {
  return (
    <div>
      <form className="profile-form">
        <Email user={user} />
        <Name name={name} nameChange={nameChange} />
        <PhoneNumber
          phoneNumber={phoneNumber}
          phoneNumChange={phoneNumChange}
        />
        <div className="form-btn">
          <ProfileBtn name="제출 하기" handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
