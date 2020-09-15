import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './ProfileThumb.scss';
import axios from 'axios';

function ProfileThumb() {
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

  const onChange = async (e) => {
    const _file_data = e.target.files[0];
    console.log(_file_data);
    const { type, size, name } = _file_data;

    // 7 메가바이트
    if (size > 7000000) {
      alert(
        `7MB 이하 용량의 이미지를 업로드해주세요. ${
          size * 0.000001 - 7
        }MB 초과`,
      );
      return;
    }
    if (
      type !== 'image/jpg' &&
      type !== 'image/jpeg' &&
      type !== 'image/png' &&
      type !== 'image/webp'
    ) {
      alert(`${type}는 지원하지 않는 형식의 타입입니다.`);
      return;
    }

    const formData = new FormData();
    formData.append('file', _file_data);

    imgRef.current.parentNode.classList.add('active');

    try {
      const { data } = await axios.post('/api/v1/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { filePath } = data;
      setUploadedFile({ filePath });
      console.log(filePath);

      const { responsedata } = await axios.patch('/api/v1/users', {
        profile_img: filePath,
      });
      console.log(responsedata);
    } catch (err) {
      console.log(err);
    }
  };
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
        <label className="custom-file-label" htmlFor="customFile">
          {uploadedFile && (
            <div>
              <img
                className="profile-thumb"
                src={
                  uploadedFile.filePath
                    ? uploadedFile.filePath
                    : user && user.profile_img
                }
                alt=""
              />
            </div>
          )}
        </label>
        <span className="thumb-guide">
          png, jpg, jpeg 이미지만 업로드 가능해요.
        </span>
      </div>
    </div>
  );
}

export default ProfileThumb;
