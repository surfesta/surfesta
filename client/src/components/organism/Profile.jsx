import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { patchUserActionCreator } from "../../redux/modules/auth";
import ProfileForm from "../molecule/profile/ProfileForm";
import ProfileInfo from "../molecule/profile/ProfileInfo";
import "./Profile.scss";

function ProfileSection() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userName = (user && user.username) || "";
  const userPhoneNumber = (user && user.phone_number) || "";
  const userProfileImg = (user && user.profile_img) || "";

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImg, setProfileImg] = useState("");

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
        setPhoneNumber={setProfileImg}
      />
      <ProfileForm
        className="profile-form"
        user={user}
        name={name}
        phoneNumber={phoneNumber}
        nameChange={nameChange}
        phoneNumChange={phoneNumChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
}

export default ProfileSection;
