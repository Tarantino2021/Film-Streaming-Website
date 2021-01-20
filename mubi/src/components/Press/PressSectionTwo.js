import React from "react";
import HeaderOne from "../../photos/Press/hederOne.png";
import HeaderTwo from "../../photos/Press/hederTwo.png";

function PressSectionTwo() {
  return (
    <div className="PressSectionTwo">
      <div className="PressSectionTwo_left">
        <img src={HeaderTwo} />
        <h1>'The Diversity and the quality of the selections are amazing'</h1>
        <h2>Liv Tyler</h2>
        <span>Jan 2020</span>
      </div>
      <div className="PressSectionTwo_right">
        <img src={HeaderOne} />
        <h1>
          'It is like cinema for people who want to sit at home and enjoy"
        </h1>
        <h2>George Benson</h2>
        <span>Apr 2019</span>
      </div>
    </div>
  );
}

export default PressSectionTwo;
