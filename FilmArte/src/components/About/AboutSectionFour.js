import React from "react";
import poster1 from "../../photos/About/poster1.jpg";
import poster2 from "../../photos/About/poster2.jpg";
import poster3 from "../../photos/About/poster3.jpg";
import poster4 from "../../photos/About/poster4.jpg";

function AboutSectionFour() {
  return (
    <div className="AboutSectionFour">
      <div className="AboutSectionFour_header">
        <h1>FILMARTE RELEASES</h1>
        <h3>
          We think that cinema needs to be seen in the movie theatres, but in
          the worlds where most of people need to find new ideas. We offer you
          unique art form.
        </h3>
      </div>
      <div className="AboutSectionFour_posters">
        <img src={poster1} />
        <img src={poster2} />
        <img src={poster3} />
        <img src={poster4} />
      </div>
    </div>
  );
}

export default AboutSectionFour;
