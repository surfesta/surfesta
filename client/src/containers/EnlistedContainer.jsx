import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EnlistedCard from "../components/molecule/eventCategories/EnlistedCard";

export default function EnlistedContainer() {
  const user = useSelector((state) => state.auth.user);
  const events = user && user.enlisted_events;
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  return <EnlistedCard events={events} loading={loading} error={error} />;
}
