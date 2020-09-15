import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileBtn from '../../atom/profile/ProfileBtn';
import Email from '../../atom/profile/Email';
import Name from '../../atom/profile/Name';
import Password from '../../atom/profile/Password';
import PhoneNumber from '../../atom/profile/PhoneNumber';
import { startPatchUser } from '../../../redux/modules/profile';

function ProfileDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userName = (user && user.username) || '';
  const userPhoneNumber = (user && user.phone_number) || '';
  const userPassword = (user && user.password) || '';

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setName(userName);
    setPhoneNumber(userPhoneNumber);
  }, [userName, userPhoneNumber]);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const phoneNumChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      dispatch(startPatchUser(name, phoneNumber));
    },
    [dispatch, name, phoneNumber]
  );

  return (
    <div>
      <form className="profile-form">
        <Email user={user} />
        <Name name={name} nameChange={nameChange} />
        <PhoneNumber
          phoneNumber={phoneNumber}
          phoneNumChange={phoneNumChange}
        />
        <Password />
        <div className="form-btn">
          <ProfileBtn name="제출 하기" handleClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
