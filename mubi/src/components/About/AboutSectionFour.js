import React from "react";
import poster1 from "../../photos/About/poster1.jpg";
import poster2 from "../../photos/About/poster2.jpg";
import poster3 from "../../photos/About/poster3.jpg";
import poster4 from "../../photos/About/poster4.jpg";

function AboutSectionFour() {
  return (
    <div className="AboutSectionFour">
      <div className="AboutSectionFour_header">
        <h1>MUBI RELEASES</h1>
        <h3>
          We believe cinema should be viewed on screens of all shapes and sizes.
          Our curators scour film festivals for the most exciting and original
          new films, which we bring to the big screen with the same care and
          attention we give to our curated platform.
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
