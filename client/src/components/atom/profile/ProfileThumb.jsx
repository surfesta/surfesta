import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function ProfileThumb() {
  ///---------동욱의 테스트용 코드---------------
  const user = useSelector((state) => state.auth.user);
  ///----------------------------------------
  const titleRef = useRef(null);
  useEffect(() => {
    document.title = '내 정보 | Surfesta';
    const titleNode = titleRef.current;
    titleNode.setAttribute('tabindex', -1);
    titleNode.setAttribute(
      // screenreader에서 읽힐 수 있는 제목 컨텐츠 추가
      'aria-label',
      '나의 프로필 정보를 수정하는 페이지입니다.'
    );
    titleNode.focus();
  }, []);

  const divStyle = {
    border: '2px solid greenyellow',
    width: '300px',
    height: '300px',
    margin: '0 auto',
  };

  return (
    <div>
      <span id="profile-edit" ref={titleRef} className="title">
        기본 정보
      </span>
      <div style={divStyle}>
        {/*---------동욱의 테스트용 코드---------------*/}
        <img
          src={user && user.profile_img}
          alt="이 이미지는 이메일이 해쉬된 값입니다"
        />
        {/*----------------------------------------*/}
      </div>
    </div>
  );
}

export default ProfileThumb;
