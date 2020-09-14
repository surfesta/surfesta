import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function ProfileThumb() {
  const user = useSelector((state) => state.auth.user);

  const titleRef = useRef(null);

  useEffect(() => {
    const titleNode = titleRef.current;
    titleNode.setAttribute('tabindex', -1);
    titleNode.setAttribute(
      'aria-label',
      '나의 프로필 정보를 수정하는 페이지입니다.'
    );
    titleNode.focus();
  }, []);

  return (
    <div id="profile-edit">
      <h2 ref={titleRef} className="title">
        기본 정보
      </h2>
      <div className="thumb-div">
        <img
          className="profile-thumb"
          src={user && user.profile_img}
          alt="이 이미지는 이메일이 해쉬된 값입니다"
        />
        <span className="thumb-guide">
          png, jpg, jpeg 이미지만 업로드 가능해요.
        </span>
      </div>
    </div>
  );
}

export default ProfileThumb;
