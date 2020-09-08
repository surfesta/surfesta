import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileBtn from '../../atom/profile/ProfileBtn';
import Email from '../../atom/profile/Email';
import Name from '../../atom/profile/Name';
import Password from '../../atom/profile/Password';
import PhoneNumber from '../../atom/profile/PhoneNumber';

function ProfileDetails() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const [values, setValues] = useState({
    email: user && user.email,
    username: user && user.username,
    phone_number: user && user.phone_number,
    password: user && user.password,
  });

  // const [inputText, setInputText] = useState(values.username);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setInput({
  //     [value]: e.target.current,
  //   });
  // };

  const handleChange = ({ target }) => {
    console.log(target);
    // value.current[target.name].value = target.value;
    // value.current[target.name].isChange = !value.current[target.name].isChange;
  };

  return (
    <div>
      <form className="profile-form">
        <Email user={user} handleChange={handleChange} />
        <Name user={user} handleChange={handleChange} />
        <PhoneNumber user={user} handleChange={handleChange} />
        <Password user={user} handleChange={handleChange} />
        <div className="form-btn">
          <ProfileBtn name="제출 하기" />
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
