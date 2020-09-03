import React, { useSelector } from 'react';
import { Route, Redirect } from 'react-router-dom';
import HeaderTemplate from '../components/template/HeaderTemplate';
import ProfileTemplate from '../components/template/ProfileTemplate';
import SubNavTemplate from '../components/template/SubNavTemplate';
import EnlistedEvents from '../components/molecule/eventCategories/EnlistedEvents';
import HostingEvents from '../components/molecule/eventCategories/HostingEvents';
import LikedEvents from '../components/molecule/eventCategories/LikedEvents';

function MyPage() {
  return (
    <div>
      <HeaderTemplate />
      <SubNavTemplate />
      <section>
        <Route path="/my/profile" component={ProfileTemplate} />
        <Route path="/my/event/enlisted" component={EnlistedEvents} />
        <Route path="/my/event/hosting" component={HostingEvents} />
        <Route path="/my/event/liked" component={LikedEvents} />
      </section>
    </div>
  );
}

export default MyPage;
