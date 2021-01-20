import React from "react";
import WaysToWatchSectionOne from "../components/WaysToWatch/WaysToWatchSectionOne";
import WaysToWatchSectionTwo from "../components/WaysToWatch/WaysToWatchSectionTwo";
import WaysToWatchSectionThree from "../components/WaysToWatch/WaysToWatchSectionThree";
import Footer from "../components/Footer/Footer";

function WaysToWatch() {
  return (
    <div>
      <WaysToWatchSectionOne />
      <WaysToWatchSectionTwo />
      <WaysToWatchSectionThree />
      <Footer />
    </div>
  );
}

export default WaysToWatch;
