import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import AboutSectionThree from "../components/About/AboutSectionThree";
import AboutSectionFour from "../components/About/AboutSectionFour";
import AboutSectionFive from "../components/About/AboutSectionFive";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <AboutBanner />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSectionFive />
      <Footer />
    </div>
  );
}

export default About;
