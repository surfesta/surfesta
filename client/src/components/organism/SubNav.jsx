import React from 'react';
import { Route } from 'react-router-dom';
import MyProfile from '../../pages/MyProfile';
import EnlistedEvents from '../molecule/eventCategories/EnlistedEvents';
import HostingEvents from '../molecule/eventCategories/HostingEvents';
import LikedEvents from '../molecule/eventCategories/LikedEvents';

function SubNav(props) {
  return (
    <div>
      <h1>참가신청한 이벤트</h1>
      {/* <Route path="/my/profile" component={MyProfile} /> */}
      <Route path="/my/event/enlisted" component={EnlistedEvents} />
      <Route path="/my/event/hosting" component={HostingEvents} />
      <Route path="/my/event/liked" component={LikedEvents} />
    </div>
  );
}

export default SubNav;
