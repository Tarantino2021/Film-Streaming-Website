import React from "react";
import pta from "../../photos/Press/pta.jpg";
import barry from "../../photos/Press/barry.jpg";

function PressSectionOne() {
  return (
    <div className="PressSectionOne">
      <h3>Things people said about our platfrom</h3>
      <div className="PressSectionOne_top">
        <img src={barry} />
        <div className="PressSectionOne_top_textWrapper">
          <h1>
            ‘FilmArte is a unique platform for filmmakers <br />I truly think
            it’s a great gift to film students.""
          </h1>
          <h2>Barry Jenkins</h2>
        </div>
      </div>
      <div className="PressSectionOne_bottom">
        <img src={pta} />
        <div className="PressSectionOne_bottom_textWrapper">
          <h1>"I love how FilmArte offers us so many hidden gems of cinema"</h1>
          <h2>Paul Thomas Anderson</h2>
        </div>
      </div>
    </div>
  );
}

export default PressSectionOne;
