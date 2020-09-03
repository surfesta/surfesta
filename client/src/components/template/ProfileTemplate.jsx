import React, { useSelector } from 'react';
import { Redirect } from 'react-router-dom';
import ProfileSection from '../organism/Profile';
import LogoutSection from '../organism/Logout';
import './ProfileTemplate.scss';

function ProfileTemplate() {
  return (
    <div className="profile">
      <ProfileSection />
      <LogoutSection />
    </div>
  );
}

export default ProfileTemplate;
