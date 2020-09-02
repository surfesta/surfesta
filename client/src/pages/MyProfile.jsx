import React from 'react';
import HeaderTemplate from '../components/template/HeaderTemplate';
import ProfileTemplate from '../components/template/ProfileTemplate';
import SubNavTemplate from '../components/template/SubNavTemplate';

function MyProfile() {
  return (
    <div>
      <HeaderTemplate />
      <SubNavTemplate />
      <section>
        <ProfileTemplate />
      </section>
    </div>
  );
}

export default MyProfile;
