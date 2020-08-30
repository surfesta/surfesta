import React from 'react';
import ProfileBtn from '../../atom/profile/ProfileBtn';
import Email from '../../atom/profile/Email';
import Name from '../../atom/profile/Name';
import Password from '../../atom/profile/Password';
import PhoneNumber from '../../atom/profile/PhoneNumber';

function ProfileDetails(btnContext) {
  return (
    <div>
      <form className="profile-form">
        <Email />
        <Name />
        <PhoneNumber />
        <Password />
        <div className="form-btn">
          <ProfileBtn name="제출 하기" />
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
