import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import HomeParralaxSection from "../components/Home/HomeParralaxSection";
import HomeParralaxSectionTwo from "../components/Home/HomeParralaxSectionTwo";
import HomeSectionTwo from "../components/Home/HomeSectionTwo";
import HomeSectionLast from "../components/Home/HomeSectionLast";
import HomeOne from "../photos/Home/home1.jpg";
//svg
import { SectionLogo } from "../components/utils/svg";

function Home() {
  return (
    <>
      <div className="test"></div>
      <HomeBanner />
      <div className="all_home_sections_wrapper">
        <HomeParralaxSection
          picture={HomeOne}
          textOne={"Stream or download"}
          textTwo={"our unique collection"}
          textTree={"of art-house cinema."}
          textFour={"All devices included."}
          logo={<SectionLogo />}
        />
        <HomeSectionTwo />
        <HomeParralaxSectionTwo />
        <HomeSectionLast />
      </div>
    </>
  );
}

export default Home;
