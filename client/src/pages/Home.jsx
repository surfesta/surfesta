import React from "react";
import HeaderTemplate from "../components/template/HeaderTemplate";
import CreateEvent from "./CreateEvent";

export default function Home() {
  return (
    <>
      <HeaderTemplate />
      <CreateEvent />
    </>
  );
}
