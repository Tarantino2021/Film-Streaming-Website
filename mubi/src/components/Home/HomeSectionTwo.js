import React, { useRef, useEffect } from "react";
import image1 from "../../photos/Home/image1.jpg";
import image2 from "../../photos/Home/image2.jpg";
import image3 from "../../photos/Home/image3.jpg";
import { motion, useAnimation, useViewportScroll } from "framer-motion";

//animation/
import { useInView } from "react-intersection-observer";

function HomeSectionTwo() {
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

  useEffect(() => {
    if (inViewTree) {
      animationTree.start("visible");
    }
  }, [animationTree, inViewTree]);

  return (
    <>
      <div className="HomeSectionTwo">
        <div className="HomeSectionTwo__top">
          <div className="HomeSectionTwo__logo__wrapper">
            <h1>FilmArte</h1>
          </div>

          <div className="HomeSectionTwo__text">
            From cult classics to modern visuals.
            <br />
            <span> </span>From the greatest ever filmmakers,
            <br />
            <span> </span>to the young talents living now.
            <br />
            <span> </span>Every film you love hand-picked.
          </div>
        </div>

        <div className="HomeSectionTwo_bottom">
          <div className="HomeSectionTwo_videos__wrapper">
            <div className="HomeSectionTwo_video">
              <motion.img
                src={image1}
                ref={sliderSection}
                animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                  hidden: { opacity: 0, y: "200px" },
                }}
                whileHover={{ opacity: 0.9 }}
              />
            </div>

            <div className="HomeSectionTwo_video">
              <motion.img
                src={image2}
                ref={sliderSectionTwo}
                animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 1.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                  hidden: { opacity: 0, y: "200px" },
                }}
                whileHover={{ opacity: 0.9 }}
              />
            </div>
            <div className="HomeSectionTwo_video" ref={sliderSectionTree}>
              <motion.img
                src={image3}
                animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.6,
                      duration: 1.2,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  },
                  hidden: { opacity: 0, y: "200px" },
                }}
                whileHover={{ opacity: 0.9 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSectionTwo;
