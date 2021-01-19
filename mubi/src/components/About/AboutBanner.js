import React from "react";
import banner1 from "../../photos/About/banner1.jpg";
import banner2 from "../../photos/About/banner2.jpg";
import banner3 from "../../photos/About/banner3.jpg";
import banner4 from "../../photos/About/banner4.png";

function AboutBanner() {
  return (
    <div className="AboutBanner">
      <img src={banner1} />
      <h1>What is MUBI</h1>
      <p>
        A streaming service? A curator? A publisher? A distributor? A cinema
        lover? Yes.
      </p>
      <div className="About_overlay" />
    </div>
  );
}

export default AboutBanner;
