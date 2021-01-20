import React, { useState, useEffect } from "react";
import { AboutData } from "../utils/data";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

function AboutSectionThree() {
  const [ImageIndex, setImageIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const handleNext = () => {
    setImageIndex((ImageIndex + 1) % AboutData.length);
  };

  const handlePrev = () => {
    setImageIndex((ImageIndex - 1 + AboutData.length) % AboutData.length);
  };

  const handleDot = (item) => {
    setImageIndex(item);
  };

  useEffect(() => {
    if (playing) {
      let timeout = setTimeout(() => {
        setImageIndex((ImageIndex + 1) % AboutData.length);
      }, 4000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [ImageIndex, playing]);

  if (!Array.isArray(AboutData) || AboutData.length <= 0) {
    return null;
  }

  return (
    <div className="AboutSectionThree">
      <div className="AboutSectionThree_header">
        <h1>VISUALS</h1>
        <h3>
          Our collection infludes hand-picked artistic cinema and undiscovered
          art-films.
        </h3>
      </div>
      <div
        onMouseEnter={() => setPlaying(false)}
        onMouseLeave={() => setPlaying(true)}
        className="AboutSectionThree_Slider"
      >
        {AboutData.map((data, index) => {
          const { img, header } = data;
          return (
            <>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: index === ImageIndex ? 1 : 0 }}
                transition={{ duration: 0.1, ease: [0.6, 0.01, -0.05, 0.9] }}
                src={img}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: index === ImageIndex ? 1 : 0 }}
                transition={{
                  duration: 0.1,
                  delay: 0.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
                className="AboutSectionThree_Slider_text_wrapper"
              >
                <h1>{header}</h1>
              </motion.div>
            </>
          );
        })}
        <BsArrowRight
          onClick={() => handleNext()}
          className="AboutSectionThree_Slider_arrowRight"
        />
        <BsArrowLeft
          onClick={() => handlePrev()}
          className="AboutSectionThree_Slider_arrowLeft"
        />
        <div className="AboutSectionThree_dot__wrapper">
          <div className="AboutSectionThree_dot__wrapper_inner">
            {[...Array(AboutData.length)].map((_, index) => (
              <div
                className={
                  ImageIndex === index
                    ? "AboutSectionThree_dot active"
                    : "AboutSectionThree_dot"
                }
                onClick={() => handleDot(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionThree;
