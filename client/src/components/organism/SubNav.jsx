import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function SubNav(props) {
  return (
    <section className="sub-nav-section">
      <NavLink to="/my/profile" activeClassName="clicked">
        <div className="sub-nav-div">프로필</div>
      </NavLink>
      <NavLink to="/my/event/enlisted" activeClassName="clicked">
        <div className="sub-nav-div">참가신청한 이벤트</div>
      </NavLink>
      <NavLink to="/my/event/hosting" activeClassName="clicked">
        <div className="sub-nav-div">주최한 이벤트 </div>
      </NavLink>
      <NavLink to="/my/event/liked" activeClassName="clicked">
        <div className="sub-nav-div">찜한 이벤트</div>
      </NavLink>
    </section>
  );
}

export default SubNav;
