import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { validateFileInput } from '../../../utils/validateFileInput';

function ProfileThumb({ profileImg, setProfileImg }) {
  const user = useSelector((state) => state.auth.user);

  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState({});

  useEffect(() => {
    const titleNode = titleRef.current;
    titleNode.setAttribute('tabindex', -1);
    titleNode.setAttribute(
      'aria-label',
      '나의 프로필 정보를 수정하는 페이지입니다.',
    );
    titleNode.focus();
  }, []);

  const onChange = useCallback(
    async (e) => {
      const _file_data = e.target.files[0];
      console.log(_file_data);

      if (!validateFileInput(_file_data)) return;
      const formData = new FormData();
      formData.append('file', _file_data);

      //let it userService
      try {
        const { data } = await axios.post('/api/v1/uploads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(data);
        const { filePath } = data;
        setUploadedFile({ filePath });
        setProfileImg(filePath);
      } catch (err) {
        console.log(err);
      }
      //let it userService
    },
    [setUploadedFile, validateFileInput],
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
