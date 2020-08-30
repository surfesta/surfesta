import React from "react";
import LogoutDiv from "../molecule/profile/LogoutDiv";
import DeactivateDiv from "../molecule/profile/DeactivateDiv";
import "./Logout.scss";

function LogoutSection(props) {
  return (
    <section className="logout-section">
      <LogoutDiv />
      <DeactivateDiv />
    </section>
  );
}

export default LogoutSection;
