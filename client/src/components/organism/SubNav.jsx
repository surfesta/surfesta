import React from 'react';
import { Link } from 'react-router-dom';

function SubNav(props) {
  return (
    <section className="sub-nav-section">
      <div>
        <Link to="/my/profile">프로필</Link>
      </div>
      <div>
        <Link to="/my/event/enlisted">참가신청한 이벤트</Link>
      </div>
      <div>
        <Link to="/my/event/hosting">주최한 이벤트</Link>
      </div>
      <div>
        <Link to="/my/event/liked">찜한 이벤트</Link>
      </div>
    </section>
  );
}

export default SubNav;
