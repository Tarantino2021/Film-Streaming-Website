import React, { useContext } from "react";
import sectionOne2 from "../../photos/About/sectionOne2.jpg";
//playbtn
import { IoMdPlay } from "react-icons/io";

//context
import MyGlobalContext from "../../context/context";

function AboutSectionOne() {
  const { handleClickTrailer } = useContext(MyGlobalContext);

  return (
    <div className="AboutSectionOne">
      <div className="AboutSectionOne_header">
        <h3>Every week we bring new visuals...</h3>
        <h1>OUR FILM CHOICE</h1>
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
          Bringing the visual art to your home screen. Sign up and you will see
          the the underground cinema. If you are a film love, you want to
          discover new art, FilmArte is the place to be for you to discover
          art-house gems.
        </p>
      </div>
    </div>
  );
}

export default AboutSectionOne;
