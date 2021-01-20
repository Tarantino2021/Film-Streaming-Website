import React from "react";
import GiftIconBadge from "../../photos/Gifts/GiftIconBadge.png";
import GiftIconOne from "../../photos/Gifts/GiftIconOne.png";
import { Link, Redirect } from "react-router-dom";

function GiftsSectionFour() {
  return (
    <div className="GiftsSectionFour">
      <div className="GiftsSectionFour__content">
        <div className="GiftsSectionFour__content_center">
          <div className="GiftsSectionFour__logo">
            <img src={GiftIconOne} />
          </div>
          <h2 className="GiftsSectionFour__header">Watch it Now</h2>
          <p className="GiftsSectionFour__text">
            Download movies and watch them whenever you want. Or stream them
            live.
          </p>
          <div className="GiftsSectionFour__btn__wrapper_one">
            <a href="https://www.apple.com/shop" target="_blank">
              <img src={GiftIconBadge} />
            </a>
          </div>
          <div className="GiftsSectionFour__btn__wrapper_two">
            <a href="https://play.google.com/store" target="_blank">
              <img src={GiftIconBadge} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftsSectionFour;
