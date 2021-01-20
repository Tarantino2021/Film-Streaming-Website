import React, { useContext } from "react";
import { Link } from "react-router-dom";

import WaysToWatch1 from "../../photos/WaysToWatch/WaysToWatch1.png";
import WaysToWatchLogo from "../../photos/WaysToWatch/WaysToWatchLogo.png";
//context
import MyGlobalContext from "../../context/context";

function WaysToWatchSectionOne() {
  const { modal, setModal } = useContext(MyGlobalContext);

  return (
    <div className="WaysToWatchSectionOne">
      <div className="WaysToWatchSectionOne_header">
        <h1>FilmArte</h1>
        <h1>START WATCHING ANYTIME, ANYWHERE</h1>
        <Link onClick={() => setModal(true)}>TRY 7 DAYS FREE</Link>
      </div>
      <div className="WaysToWatchSectionOne_body">
        <div className="WaysToWatchSectionOne_left">
          <h1>ON THE GO</h1>
          <span className="WaysToWatchSectionOne_textOne">
            Download films in HD
          </span>
          <span className="WaysToWatchSectionOne_textTwo">Watch offline</span>
          <span className="WaysToWatchSectionOne_textThree">
            Get Film of the Day notifications
          </span>
          <div className="LogoOne">
            <img src={WaysToWatchLogo} />
          </div>
        </div>
        <div className="WaysToWatchSectionOne_right">
          <img src={WaysToWatch1} />
        </div>
      </div>
    </div>
  );
}

export default WaysToWatchSectionOne;
