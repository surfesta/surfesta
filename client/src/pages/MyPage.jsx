import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import HeaderTemplate from '../components/template/HeaderTemplate';
import ProfileTemplate from '../components/template/ProfileTemplate';
import SubNavTemplate from '../components/template/SubNavTemplate';
import EnlistedEvents from '../components/molecule/eventCategories/EnlistedEvents';
import HostingEvents from '../components/molecule/eventCategories/HostingEvents';
import LikedEvents from '../components/molecule/eventCategories/LikedEvents';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

function MyPage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) dispatch(push('/'));
  }, []);
  return (
    <>
      <SubNavTemplate />
      <section>
        <Route path="/my/profile" component={ProfileTemplate} />
        <Route path="/my/event/enlisted" component={EnlistedEvents} />
        <Route path="/my/event/hosting" component={HostingEvents} />
        <Route path="/my/event/liked" component={LikedEvents} />
      </section>
    </>
  );
}

export default MyPage;
