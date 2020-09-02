import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProfileTemplate from '../template/ProfileTemplate';
import MyPage from '../../pages/MyPage';
import EnlistedEvents from '../molecule/eventCategories/EnlistedEvents';
import HostingEvents from '../molecule/eventCategories/HostingEvents';
import LikedEvents from '../molecule/eventCategories/LikedEvents';

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
