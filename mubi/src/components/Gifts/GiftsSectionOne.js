import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import MyGlobalContext from "../../context/context";

function GiftsSectionOne() {
  const { modal, setModal } = useContext(MyGlobalContext);

  return (
    <div className="GiftsSectionOne">
      <div className="GiftsSectionOne__content">
        <div className="GiftsSectionOne__content__center">
          <div className="GiftsSectionOne__content__top"></div>
          <h1 className="GiftsSectionOne__header">The Gift of Great Cinema</h1>
          <p className="GiftsSectionOne__text">
            Give someone you love, or even just like, a hand-picked film every
            day. Only $29.99 for three months or $79.99 for a year.
          </p>

          <Link onClick={() => setModal(true)} className="GiftsSectionOne__btn">
            GIFT MUBI
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GiftsSectionOne;
