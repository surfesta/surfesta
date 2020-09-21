import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "../molecule/profile/ProfileForm";
import ProfileInfo from "../molecule/profile/ProfileInfo";
import { patchUserActionCreator } from "../../redux/modules/auth";
import "./Profile.scss";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  /* 이제 [inputValues, setInputValues] = useState({
    name:'',
    phoneNumber:'',
    profileImg:''
  })
  이렇게 하나의 객체로 담은 지역상태를 만들어보는건 어떨까요
  이렇게 객체로 관리하면서 context로 뿌려주기까지하면 
  지역상태로 리덕스와 동일한 역할도 수행할 수 있습니다.
  */
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [visible, setVisible] = useState(false);

  // page 컴포넌트인 MyPage 단에서 이미, user가 없으면 홈으로 보내기때문에 null체크가 불필요하다
  const userName = user.username;
  const userPhoneNumber = user.phone_number;
  const userProfileImg = user.profile_img;

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

  // const toggleVisibility = () => {
  //   setVisible(true);
  // };

  const handleSubmit = useCallback(() => {
    dispatch(patchUserActionCreator(name, phoneNumber, profileImg));

    function toggleVisibility() {
      return setVisible(true);
    }
    toggleVisibility();
  }, [dispatch, name, phoneNumber, profileImg, setVisible]);

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
        visible={visible}
        setVisible={setVisible}
      />
    </section>
  );
}

export default Profile;
