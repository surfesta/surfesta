import React from 'react';
import Card from '../../organism/main/Card';
export default function EnlistedCard({ events }) {
  return events.map((event) => <Card event={event} key={event._id} />);
}
