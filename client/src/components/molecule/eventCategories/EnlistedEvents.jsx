import React from "react";
import { Helmet } from "react-helmet";
import EnlistedContainer from "../../../containers/EnlistedContainer";

export default function EnlistedEvents() {
  return (
    <>
      <section className="cards-wrap">
        <div className="cards">
          <EnlistedContainer />
        </div>
      </section>
    </>
  );
}
