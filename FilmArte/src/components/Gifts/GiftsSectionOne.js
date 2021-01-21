import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import MyGlobalContext from "../../context/context";

function GiftsSectionOne() {
  const { setModal } = useContext(MyGlobalContext);

  return (
    <div className="GiftsSectionOne">
      <div className="GiftsSectionOne__content">
        <div className="GiftsSectionOne__content__center">
          <div className="GiftsSectionOne__content__top"></div>
          <h1 className="GiftsSectionOne__header">The Gift of Art-House</h1>
          <p className="GiftsSectionOne__text">
            Give someone who loves cinema the opportunity to be part of our
            community and enjoy hand-picked cinema.
          </p>

          <Link onClick={() => setModal(true)} className="GiftsSectionOne__btn">
            GIFT NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GiftsSectionOne;
