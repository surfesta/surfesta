import React from 'react';
import ProfileSection from '../organism/Profile';
import LogoutSection from '../organism/Logout';
import './ProfileTemplate.scss';

function ProfileTemplate(btnContext) {
  return (
    <div className="profile">
      <ProfileSection />
      <LogoutSection />
    </div>
  );
}

export default ProfileTemplate;
