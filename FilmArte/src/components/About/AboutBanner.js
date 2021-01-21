import React from "react";
import banner1 from "../../photos/About/banner1.jpg";

function AboutBanner() {
  return (
    <div className="AboutBanner">
      <img src={banner1} />
      <h1>What is FilmArte</h1>
      <p>
        A streaming platfrom. A film lover hub. An art-house platform. A cinema
        hub.
      </p>
      <div className="About_overlay" />
    </div>
  );
}

export default AboutBanner;
