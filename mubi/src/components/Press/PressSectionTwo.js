import React from "react";
import HeaderOne from "../../photos/Press/hederOne.png";
import HeaderTwo from "../../photos/Press/hederTwo.png";

function PressSectionTwo() {
  return (
    <div className="PressSectionTwo">
      <div className="PressSectionTwo_left">
        <img src={HeaderTwo} />
        <h1>
          'The Diversity and the quality of the selections are exhilarating'
        </h1>
        <h2>Glenn Kenny</h2>
        <span>Jan 2017</span>
      </div>
      <div className="PressSectionTwo_right">
        <img src={HeaderOne} />
        <h1>
          'It is like Netflix for people who want to stop just watching trash
          all the time’
        </h1>
        <h2>Christopher Hooton</h2>
        <span>Apr 2015</span>
      </div>
    </div>
  );
}

export default PressSectionTwo;
