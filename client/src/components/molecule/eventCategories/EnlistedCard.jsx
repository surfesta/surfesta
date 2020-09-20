import React from "react";
import Card from "../../organism/main/Card";
export default function EnlistedCard({ events }) {
  return (
    <>
      {events &&
        events.map((event) => {
          return <Card event={event} key={event._id} />;
        })}
    </>
  );
}
