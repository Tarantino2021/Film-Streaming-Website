import React from "react";
import banner3 from "../../photos/Memberships/banner3.jpg";

function MembershipsBanner() {
  return (
    <div className="MembershipsBanner">
      <img src={banner3} />
      <h1>MEMBERSHIPS</h1>
      <div className="MembershipsBanner_overlay" />
    </div>
  );
}

export default MembershipsBanner;
