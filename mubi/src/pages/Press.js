import React from "react";
import PressBanner from "../components/Press/PressBanner";
import PressSectionOne from "../components/Press/PressSectionOne";
import PressSectionTwo from "../components/Press/PressSectionTwo";
import PressSectionThree from "../components/Press/PressSectionThree";
import Footer from "../components/Footer/Footer";

function Press() {
  return (
    <div className="press">
      <PressBanner />
      <PressSectionOne />
      <PressSectionTwo />
      <PressSectionThree />
      <Footer />
    </div>
  );
}

export default Press;
