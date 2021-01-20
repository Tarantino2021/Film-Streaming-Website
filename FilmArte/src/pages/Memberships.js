import React from "react";
import MembershipsBanner from "../components/Memberships/MembershipsBanner";
import MembershipsSection from "../components/Memberships/MembershipsSection";
import Footer from "../components/Footer/Footer";

function Memberships() {
  return (
    <div className="Memberships">
      <MembershipsBanner />
      <MembershipsSection />
      <Footer />
    </div>
  );
}

export default Memberships;
