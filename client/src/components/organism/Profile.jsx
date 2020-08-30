import React from 'react';
import ProfileForm from '../molecule/profile/ProfileForm';
import ProfileInfo from '../molecule/profile/ProfileInfo';
import './Profile.scss';

function ProfileSection() {
  return (
    <section className="profile-section">
      <ProfileInfo className="profile-info" />
      <ProfileForm className="profile-form" />
    </section>
  );
}

export default ProfileSection;
