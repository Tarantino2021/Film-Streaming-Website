import React, { useContext } from "react";
import image4 from "../../photos/Gifts/image4.jpg";
import image5 from "../../photos/Gifts/image5.jpg";
import image6 from "../../photos/Gifts/image6.jpg";
//playbtn
import { IoMdPlay } from "react-icons/io";
//framer motion
import { motion, useTransform, useViewportScroll } from "framer-motion";
//react router
import { Link } from "react-router-dom";
//svg
import { SectionLogoBlue } from "../utils/svg";
import { IoIosArrowDown } from "react-icons/io";
//datas
import { GiftGridData } from "../utils/data";
import Gift13 from "../../photos/Gifts/GiftImg13.jpg";
import Gift14 from "../../photos/Gifts/GiftImg14.jpg";
//context
import MyGlobalContext from "../../context/context";
import YouTube from "react-youtube";
//Api
import apiRequests from "../utils/apiRequests";

function GiftsSectionFiveGrid() {
  const {
    youtubeModal,
    setYoutubeModal,
    setModal,
    handleClickTrailer,
    trailer,
  } = useContext(MyGlobalContext);

  const { scrollYProgress } = useViewportScroll();
  const ScrollOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  console.log(trailer);

  return (
    <div className="GiftsSectionFiveGrid">
      <div className="GiftsSectionFiveGrid_content">
        <div className="GiftsSectionFiveGrid__content_center">
          <h2 className="GiftsSectionFiveGrid__header">Now Showing</h2>
          <p className="GiftsSectionFiveGrid__text">
            Sign up now to start watching our hand-picked line-up.
          </p>
          <div className="GiftsSectionFiveGrid__grid_wrapper_outter">
            <div className="GiftsSectionFiveGrid_grid_content">
              <div className="GiftsSectionFiveGrid_grid__content_center">
                <div className="GiftsSectionFiveGrid_grid__wrapper_inner">
                  {GiftGridData.map((data) => (
                    <div
                      onClick={() => handleClickTrailer(data.trailer)}
                      key={data.id}
                      className="GiftsSectionFiveGrid_grid__container"
                    >
                      <img src={data.image} />
                      <div className="GiftsSectionFiveGrid_grid__info">
                        <h3>{data.title}</h3>
                        <span>{data.director}, </span>
                        <span>{data.year}</span>
                      </div>
                      <a>
                        <IoMdPlay />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="GiftsSectionFiveGrid_grid__container_Bottom">
                  <div
                    className="GiftsSectionFiveGrid_grid__container-1"
                    onClick={() => handleClickTrailer("LTNZmOJxuAc")}
                  >
                    <img src={Gift13} />
                    <div className="GiftsSectionFiveGrid_grid__info_bottom">
                      <h3>Lobster</h3>
                      <span>Yorgos Lanthimos, </span>
                      <span>2018</span>
                    </div>
                    <Link>
                      <IoMdPlay />
                    </Link>
                  </div>
                  <div
                    className="GiftsSectionFiveGrid_grid__container-2"
                    onClick={() => handleClickTrailer("QU6IWDPw20E")}
                  >
                    <img src={Gift14} />
                    <div className="GiftsSectionFiveGrid_grid__info_bottom">
                      <h3>8½</h3>
                      <span>Federico Fellini, </span>
                      <span>1963</span>
                    </div>
                    <Link>
                      <IoMdPlay />
                    </Link>
                  </div>
                  <div className="GiftsSectionFiveGrid_grid__container-3">
                    <h1>WATCH GREAT CINEMA</h1>
                    <p>
                      A hand-picked selection of the best films from around the
                      globe.
                    </p>
                    <SectionLogoBlue className="GiftsSectionFiveGrid_logo" />
                    <Link
                      onClick={() => setModal(true)}
                      className="GiftsSectionFiveGrid_btn"
                    >
                      GIFT MUBI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          style={{ opacity: ScrollOpacity }}
          className="GiftsSectionFiveGrid_grid_arrowDown"
        >
          <h3>Scroll Down</h3>
          <IoIosArrowDown />
        </motion.div>
      </div>
    </div>
  );
}

export default GiftsSectionFiveGrid;
