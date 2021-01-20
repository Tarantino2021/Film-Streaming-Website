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
          <h2 className="GiftsSectionThree__header">Watch Anywhere</h2>
          <p className="GiftsSectionThree__text">
            Watch FilmArte at the comfort zone of your home. Great cinema comes
            straight to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GiftsSectionThree;
