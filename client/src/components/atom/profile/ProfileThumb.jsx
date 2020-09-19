import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { validateFileInput } from "../../../utils/validateFileInput";
import UploadService from "../../../services/UploadService";

function ProfileThumb({ profileImg, setProfileImg }) {
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const titleNode = titleRef.current;
    titleNode.setAttribute("tabindex", -1);
    titleNode.setAttribute(
      "aria-label",
      "나의 프로필 정보를 수정하는 페이지입니다."
    );
    titleNode.focus();
  }, []);

  const onChange = useCallback(
    async (e) => {
      const _file_data = e.target.files[0];
      if (!validateFileInput(_file_data)) return;
      const formData = new FormData();
      formData.append("file", _file_data);

      try {
        const { filePath } = await UploadService.uploadImage(formData);
        setProfileImg(filePath);
      } catch (err) {
        console.warn(err);
      }
    },
    [validateFileInput, setProfileImg]
  );

  return (
    <div id="profile-edit">
      <h2 ref={titleRef} className="title">
        기본 정보
      </h2>
      <div className="thumb-div">
        <input
          type="file"
          className="custom-thumbnail-input"
          id="customFile"
          onChange={onChange}
          accept="image/jpeg, image/png, image/jpg, image/webp"
          ref={imgRef}
        />
        <label
          className="custom-thumbnail-label profile-thumb"
          htmlFor="customFile"
        >
          <img className="profile-thumb" src={profileImg} alt="" />
        </label>
        <span className="thumb-guide">
          png, jpg, jpeg 이미지만 업로드 가능해요.
        </span>
      </div>
    </div>
  );
}

export default ProfileThumb;
