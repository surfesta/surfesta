import React from 'react';
import { useSelector } from 'react-redux';
import LikedCard from '../components/molecule/eventCategories/LikedCard';

function LikedContainer(props) {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const events = user && user.liked_events;
  console.log(events);
  return <LikedCard events={events} />;
}

export default LikedContainer;
