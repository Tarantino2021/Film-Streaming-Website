import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function HomeParralaxSection({
  picture,
  textOne,
  textTwo,
  textTree,
  textFour,
  textFive,
  logo,
}) {
  const { scrollYProgress } = useViewportScroll();

  const TransformY = useTransform(scrollYProgress, [0, 1], ["-39%", "38%"]);

  return (
    <>
      <div className="HomeParralaxSection">
        <div className="HomeParralaxSection__image__wrapper">
          <motion.img
            style={{ translateY: TransformY }}
            className="HomeParralaxSection__image"
            src={picture}
          />
        </div>

        <div className="HomeParralaxSection__text_wrapper">
          <div className="HomeParralaxSection__text">
            {textOne}
            <br />
            <span> </span> {textTwo}
            <br />
            <span> </span> {textTree}
            <br />
            <span> </span> {textFour}
            <br />
            {textFive}
          </div>
          {logo}
        </div>
      </div>
    </>
  );
}

export default HomeParralaxSection;
