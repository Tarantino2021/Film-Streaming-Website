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
          <h2 className="GiftsSectionFour__header">Take movies with you</h2>
          <p className="GiftsSectionFour__text">
            Take movies and watch offline in HD on your iOS or Android device.
          </p>
          <div className="GiftsSectionFour__btn__wrapper_one">
            <a
              href="https://apps.apple.com/app/apple-store/id626148774"
              target="_blank"
            >
              <img src={GiftIconBadge} />
            </a>
          </div>
          <div className="GiftsSectionFour__btn__wrapper_two">
            <a
              href="https://play.google.com/store/apps/details?id=com.mubi"
              target="_blank"
            >
              <img src={GiftIconBadge} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftsSectionFour;
