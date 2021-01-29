import React from "react";
import ContactSection from "../components/Contact/ContactSection";
//socialIcons/
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { ImTumblr2 } from "react-icons/im";

function Contact() {
  return (
    <>
      <div className="Contact"></div>
      <div className="Contact__body">
        <div className="ContactSection_overlay" />
        <div className="Contact__body_wrapper">
          <ContactSection />
        </div>
        <div className="Contact_socialIcons">
          <ImFacebook2 />
          <ImTwitter />
          <FaPinterest />
          <ImTumblr2 />
        </div>
      </div>
    </>
  );
}

export default Contact;
