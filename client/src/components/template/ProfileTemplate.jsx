import React from 'react';
import ProfileSection from '../organism/Profile';
import LogoutSection from '../organism/Logout';
import { Helmet } from 'react-helmet';
import './ProfileTemplate.scss';

function ProfileTemplate() {
  return (
    <>
      <Helmet>
        <title>내 정보 | Surfesta</title>
      </Helmet>
      <div className="profile">
        <ProfileSection />
        <LogoutSection />
      </div>
    </>
  );
}

export default ProfileTemplate;
