import React from "react";
import { useEffect } from "react";
import EventsContainer from "../containers/EventsContainer";
import EventService from "../services/EventService";
import UserService from "../services/UserService";

export default function Home() {
  // useEffect(async () => {
  //   const users = await UserService.getUserDetail();
  //   const events = await EventService.getEvents();
  //   const profilePath = users.map((user) => user.profile_img);
  //   const thumbnail = events.map((event) => event.thumbnail);
  //   const imgPath = profilePath.concat(thumbnail);
  //   console.log(
  //     imgPath.filter((item) =>
  //       item.includes("https://surfesta.s3.ap-northeast-2.amazonaws.com")
  //     )
  //   );
  // }, []);
  return (
    <>
      <EventsContainer />
    </>
  );
}
