import React from "react";
import WaysToWatch2 from "../../photos/WaysToWatch/WaysToWatch2.png";
import WaysToWatchLogo2 from "../../photos/WaysToWatch/WaysToWatchLogo2.png";

function WaysToWatchSectionTwo() {
  return (
    <div className="WaysToWatchSectionTwo">
      <div className="WaysToWatchSectionTwo_content">
        <div className="WaysToWatchSectionTwo_line" />
        <div className="WaysToWatchSectionTwo_left">
          <img src={WaysToWatch2} />
        </div>
        <div className="WaysToWatchSectionTwo_right">
          <h1>ON YOUR SCREEN</h1>
          <span className="WaysToWatchSectionTwo_textOne">
            Watch on every device
          </span>
          <span className="WaysToWatchSectionTwo_textTwo">
            at your own comfort
          </span>
          <span className="WaysToWatchSectionTwo_textThree">
            On your phone and TV
          </span>

          <img src={WaysToWatchLogo2} />
        </div>
      </div>
    </div>
  );
}

export default WaysToWatchSectionTwo;
