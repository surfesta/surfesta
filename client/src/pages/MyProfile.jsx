import React from "react";
import HeaderTemplate from "../components/template/HeaderTemplate";
import ProfileTemplate from "../components/template/ProfileTemplate";

function MyProfile() {
  return (
    <div>
      <HeaderTemplate />
      <section>
        <ProfileTemplate />
      </section>
    </div>
  );
}

export default MyProfile;
