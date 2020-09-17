import React from 'react';
import { useSelector } from 'react-redux';
import HostingCards from '../components/molecule/eventCategories/HostingCard';

function HostingContainer(props) {
  const user = useSelector((state) => state.auth.user);
  const events = user && user.hosting_events;
  const isOpen = props.isOpen;
  return <HostingCards events={events} isOpen={isOpen} />;
}

export default HostingContainer;
