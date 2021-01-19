import React, { useContext } from "react";
import sectionOne2 from "../../photos/About/sectionOne2.jpg";
//playbtn
import { IoMdPlay } from "react-icons/io";
//react router
import { Link } from "react-router-dom";
//context
import MyGlobalContext from "../../context/context";

function AboutSectionOne() {
  const { modal, setModal, handleClickTrailer } = useContext(MyGlobalContext);

  return (
    <div className="AboutSectionOne">
      <div className="AboutSectionOne_header">
        <h3>Every day we introduce a new…</h3>
        <h1>FILM OF THE DAY</h1>
      </div>
      <div
        className="AboutSectionOne_image"
        onClick={() => handleClickTrailer("BtsgH_KkW1M")}
      >
        <img src={sectionOne2} />
        <div className="AboutSectionOne_image_playBtn">
          <a>
            <IoMdPlay />
          </a>
        </div>
        <div className="AboutSectionOne_image_content">
          <div className="AboutSectionOne_image_text_wrapper">
            <h1>"The Color of Pomegranates"</h1>
            <span>SERGEI PARAJANOV, Armenia,1969</span>
            <p>
              A super-stylized, surreal biography of Armenian troubadour Sayat
              Nova, whose life is depicted through non-narrative amalgamations
              of poetic images, hailed as revolutionary by Mikhail Vartanov.
            </p>
          </div>
        </div>
        <div className="AboutSectionOne_image_overlay" />
      </div>
      <div className="AboutSectionOne_text">
        <p>
          From new directors to award-winners. From everywhere on earth.
          Beautiful, interesting, incredible movies — a new one, every single
          day. Always chosen by us.
        </p>
      </div>
    </div>
  );
}

export default AboutSectionOne;
