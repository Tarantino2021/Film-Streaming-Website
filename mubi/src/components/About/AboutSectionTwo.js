import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
//images
import sectionTwo1 from "../../photos/About/sectionTwo1.jpg";
import sectionTwo2 from "../../photos/About/sectionTwo2.jpg";
import sectionTwo3 from "../../photos/About/sectionTwo3.jpg";
//svg
import { LogoBlack } from "../utils/svg";
//animation/
import { useInView } from "react-intersection-observer";

function AboutSectionTwo() {
  //Animation1
  const animation = useAnimation();

  const [sliderSection, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  //animation2
  const animationTwo = useAnimation();

  const [sliderSectionTwo, inViewTwo] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  useEffect(() => {
    if (inViewTwo) {
      animationTwo.start("visible");
    }
  }, [animationTwo, inViewTwo]);

  //animation3
  const animationTree = useAnimation();

  const [sliderSectionTree, inViewTree] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  return (
    <>
      <div className="AboutSectionTwo">
        <h1 className="AboutSectionTwo__text">NOW SHOWING ON FILMARTE</h1>
        <div className="AboutSectionTwo_bottom">
          <div className="AboutSectionTwo_videos__wrapper">
            <div className="AboutSectionTwo_video">
              <motion.img
                src={sectionTwo1}
                ref={sliderSection}
                animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                  hidden: { opacity: 0 },
                }}
                whileHover={{ opacity: 0.9 }}
              />
              <div className="AboutSectionTwo_info">
                <h3>Paris,Texas</h3>
                <span>Wim Wenders, </span>
                <span>1980</span>
              </div>
            </div>

            <div className="AboutSectionTwo_video">
              <motion.img
                src={sectionTwo2}
                ref={sliderSectionTwo}
                animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,

                    transition: {
                      delay: 0.3,
                      duration: 1.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                  hidden: { opacity: 0 },
                }}
                whileHover={{ opacity: 0.9 }}
              />
              <div className="AboutSectionTwo_info">
                <h3>Love</h3>
                <span>Gaspar Noe, </span>
                <span>2018</span>
              </div>
            </div>
            <div className="AboutSectionTwo_video" ref={sliderSectionTree}>
              <motion.img
                src={sectionTwo3}
                animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,

                    transition: {
                      delay: 0.6,
                      duration: 1.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                  hidden: { opacity: 0 },
                }}
                whileHover={{ opacity: 0.9 }}
              />
              <div className="AboutSectionTwo_info">
                <h3>Tree Colors:Blue</h3>
                <span>Ksistow Kieslowsky, </span>
                <span>1995</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSectionTwo;
