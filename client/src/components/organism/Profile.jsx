import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileForm from '../molecule/profile/ProfileForm';
import ProfileInfo from '../molecule/profile/ProfileInfo';
import { patchUserActionCreator } from '../../redux/modules/auth';
import './Profile.scss';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImg, setProfileImg] = useState('');

  const userName = (user && user.username) || '';
  const userPhoneNumber = (user && user.phone_number) || '';
  const userProfileImg = (user && user.profile_img) || '';

  useEffect(() => {
    setName(userName);
    setPhoneNumber(userPhoneNumber);
    setProfileImg(userProfileImg);
  }, [userName, userPhoneNumber, userProfileImg]);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const phoneNumChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = useCallback(() => {
    dispatch(patchUserActionCreator(name, phoneNumber, profileImg));
  }, [dispatch, name, phoneNumber, profileImg]);

  return (
    <section className="profile-section">
      <ProfileInfo
        className="profile-info"
        profileImg={profileImg}
        setProfileImg={setProfileImg}
      />
      <ProfileForm
        className="profile-form"
        nameChange={nameChange}
        phoneNumChange={phoneNumChange}
        handleSubmit={handleSubmit}
        user={user}
        name={name}
        phoneNumber={phoneNumber}
      />
    </section>
  );
}

export default Profile;
