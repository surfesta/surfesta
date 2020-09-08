import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileBtn from '../../atom/profile/ProfileBtn';
import Email from '../../atom/profile/Email';
import Name from '../../atom/profile/Name';
import Password from '../../atom/profile/Password';
import PhoneNumber from '../../atom/profile/PhoneNumber';

function ProfileDetails() {
  const user = useSelector((state) => state.auth.user);
  const userEmail = user && user.email;
  const userName = user && user.username;
  const userPhoneNumber = user && user.phone_number;
  const userPassword = user && user.password;

  const [values, setValues] = useState({
    email: userEmail,
    username: userName,
    phone_number: userPhoneNumber,
    password: userPassword,
  });
  console.log(userName);

  const handleChange = (e) => {
    const { email, username, phone_number, password } = e.target;
    setValues({
      ...values,
    });
  };
  // console.log();
  // const [inputText, setInputText] = useState(values.username);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setInput({
  //     [value]: e.target.current,
  //   });
  // };

  // const { value } = e.target.current.value;
  // console.log(value);
  // value.current[target.name].value = target.value;
  // value.current[target.name].isChange = !value.current[target.name].isChange;

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
