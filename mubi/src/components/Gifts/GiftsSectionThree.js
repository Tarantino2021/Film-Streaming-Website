import React from "react";
//svg
import { SectionLogo } from "../utils/svg";

function GiftsSectionThree() {
  return (
    <div className="GiftsSectionThree">
      <div className="GiftsSectionThree__content">
        <div className="GiftsSectionThree__content_center">
          <div className="GiftsSectionThree__logo">
            <SectionLogo />
          </div>
          <h2 className="GiftsSectionThree__header">Anytime, anywhere</h2>
          <p className="GiftsSectionThree__text">
            Watch MUBI wherever you are. Stream or download any film. Watch at
            home, or on any device.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GiftsSectionThree;
