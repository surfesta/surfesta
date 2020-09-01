import React, { useEffect, useRef } from 'react';

function ProfileThumb() {
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
      <div id="profile-edit">
        <h2 ref={titleRef} className="title">
          기본 정보
        </h2>
      </div>
      <div style={divStyle}>Thumbnail</div>
    </div>
  );
}

export default ProfileThumb;
