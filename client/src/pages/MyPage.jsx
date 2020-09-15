import React from 'react';
import { Route } from 'react-router-dom';
import ProfileTemplate from '../components/template/ProfileTemplate';
import SubNavTemplate from '../components/template/SubNavTemplate';
import EnlistedEvents from '../components/molecule/eventCategories/EnlistedEvents';
import HostingEvents from '../components/molecule/eventCategories/HostingEvents';
import LikedEvents from '../components/molecule/eventCategories/LikedEvents';

function MyPage() {
  return (
    <>
      <SubNavTemplate />
      <section>
        <Route path='/my/profile' component={ProfileTemplate} />
        <Route path='/my/event/enlisted' component={EnlistedEvents} />
        <Route path='/my/event/hosting' component={HostingEvents} />
        <Route path='/my/event/liked' component={LikedEvents} />
      </section>
    </>
  );
}

export default MyPage;
