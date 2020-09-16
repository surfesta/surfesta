import React from 'react';
import ProfileThumb from '../../atom/profile/ProfileThumb';

function ProfileInfo({ ...props }) {
  return (
    <div className="profile-info">
      <ProfileThumb {...props} />
    </div>
  );
}

export default ProfileInfo;
