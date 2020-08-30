import React from 'react';
import ProfileThumb from '../../atom/profile/ProfileThumb';
import ThumbGuidance from '../../atom/profile/ThumbGuidance';

function ProfileInfo() {
  return (
    <div className="profile-info">
      <ProfileThumb />
      <ThumbGuidance />
    </div>
  );
}

export default ProfileInfo;
