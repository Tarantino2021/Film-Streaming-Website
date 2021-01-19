import React from "react";
import pta from "../../photos/Press/pta.jpg";
import barry from "../../photos/Press/barry.jpg";

function PressSectionOne() {
  return (
    <div className="PressSectionOne">
      <h3>Some nice things people have said about us recently</h3>
      <div className="PressSectionOne_top">
        <img src={barry} />
        <div className="PressSectionOne_top_textWrapper">
          <h1>
            ‘MUBI is so affordable and so wonderfully curated. <br />I truly
            think it’s a great gift to film students.
          </h1>
          <h2>Barry Jenkins</h2>
        </div>
      </div>
      <div className="PressSectionOne_bottom">
        <img src={pta} />
        <div className="PressSectionOne_bottom_textWrapper">
          <h1>
            ‘We’re huge fans of MUBI and wanted to be a part of what they do.’
          </h1>
          <h2>Paul Thomas Anderson</h2>
        </div>
      </div>
    </div>
  );
}

export default PressSectionOne;
