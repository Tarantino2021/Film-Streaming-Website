import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useTransform, useViewportScroll } from "framer-motion";
//context
import MyGlobalContext from "../../context/context";

function HomeBanner() {
  const { scrollYProgress } = useViewportScroll();
  const { modal, setModal } = useContext(MyGlobalContext);

  const TextOneY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-43%"]);
  const TextTwoY = useTransform(
    scrollYProgress,
    [0.14, 0.39],
    ["49.93%", "-10.94%"]
  );

  const TextTreeY = useTransform(
    scrollYProgress,
    [0.4, 0.48],
    ["53.57%", "0.5%"]
  );

  const TextOne = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const TextTwo = useTransform(scrollYProgress, [0.14, 0.3, 0.4], [0, 1, 0]);
  const TextTree = useTransform(scrollYProgress, [0.4, 0.48], [0, 1]);

  const CircleOne = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["rgb(255, 255, 255)", "#b1b1b1"]
  );
  const CircleTwo = useTransform(
    scrollYProgress,
    [0.2, 0.36, 0.4],
    ["#b1b1b1", "rgb(255, 255, 255)", "#b1b1b1"]
  );
  const CircleTree = useTransform(
    scrollYProgress,
    [0.4, 0.48],
    ["#b1b1b1", "rgb(255, 255, 255)"]
  );

  return (
    <>
      <div className="banner">
        <div className="banner__wrapper">
          {/* banner video */}
          <div className="banner__video__wrapper">
            <video
              className="banner__video"
              width="1920px"
              height="100%"
              loop
              autoPlay
              src="https://player.vimeo.com/external/424963577.sd.mp4?s=8229b9953901373aa629eef159783d52c4349d8f&profile_id=164"
              type="video/mp4"
              muted="muted"
            />
          </div>

          {/* banner btn */}
          <Link onClick={() => setModal(true)}>
            <div className="btn_wrapper">TRY IT NOW</div>
          </Link>

          {/* banner text */}
          <div className="banner_text_wrapper_outter">
            <div className="banner_text_wrapper_inner">
              <div className="banner_text_container_outter">
                <div className="banner_text_container_inner">
                  <motion.div
                    style={{ opacity: TextOne, y: TextOneY }}
                    className="text_wrapper"
                  >
                    <div className="text">Watch art-house cinema</div>
                  </motion.div>

                  <motion.div
                    style={{ opacity: TextTwo, y: TextTwoY }}
                    className="text_wrapper"
                  >
                    <div className="text">
                      Beautiful, inspiring,
                      <br />
                      <span> </span>visual movies.
                    </div>
                  </motion.div>
                  <motion.div
                    style={{ opacity: TextTree, y: TextTreeY }}
                    className="text_wrapper"
                  >
                    <div className="text">
                      A New Film
                      <br />
                      <span> </span>Every week.
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* banner circles */}
          <div class="circles_wrapper_outter">
            <div class="circles_wrapper_inner">
              <motion.div
                style={{ backgroundColor: CircleOne }}
                className="circle"
              ></motion.div>
              <motion.div
                style={{ backgroundColor: CircleTwo }}
                className="circle"
              ></motion.div>
              <motion.div
                style={{ backgroundColor: CircleTree }}
                className="circle"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
