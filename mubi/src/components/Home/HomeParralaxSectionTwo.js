import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import HomeTwo from "../../photos/Home/home2.jpeg";

function HomeParralaxSectionTwo() {
  const { scrollYProgress } = useViewportScroll();

  const TransformY = useTransform(scrollYProgress, [0, 1], ["-39%", "38%"]);

  return (
    <>
      <div className="HomeParralaxSection_Two">
        <div className="HomeParralaxSection__image__wrapper_Two">
          <motion.img
            style={{ translateY: TransformY }}
            className="HomeParralaxSection__image_Two"
            src={HomeTwo}
          />
        </div>

        <div className="HomeParralaxSection__text_wrapper_Two">
          <div className="HomeParralaxSection__text_Two">
            JOIN THE WORLD'S BIGGEST
            <br />
            <span> </span> COMMUNITY OF FILM LOVERS.
            <br />
            <span> </span> EXPLORE AND DISCUSS GREAT
            <br />
            <span> </span> CINEMA WITH OVER 10,886,174
            <br />
            MEMBERS.
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeParralaxSectionTwo;
