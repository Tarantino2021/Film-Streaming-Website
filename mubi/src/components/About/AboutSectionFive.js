import React from "react";
import sectionFive1 from "../../photos/About/sectionFive1.jpg";
import sectionFive2 from "../../photos/About/sectionFive2.jpg";
import sectionFive3 from "../../photos/About/sectionFive3.jpg";
import sectionFiveLogo from "../../photos/About/sectionFiveLogo.jpg";

function AboutSectionFive() {
  return (
    <div className="AboutSectionFive">
      <div className="AboutSectionFive_header">
        <h1>ANYTIME,ANYWYWERE</h1>
        <h3>
          Watch on all possible devices our hand-picked cinema.
          <br />
          We offer you all the possibilites
        </h3>
      </div>
      <div className="AboutSectionFive_images">
        <img className="img1" src={sectionFive1} />
        <img className="img2" src={sectionFive2} />
        <img className="img3" src={sectionFive3} />
      </div>
      <div className="AboutSectionFive_logo">
        <img src={sectionFiveLogo} />
      </div>
    </div>
  );
}

export default AboutSectionFive;
