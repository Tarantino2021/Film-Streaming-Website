import React from "react";
import BannerImage from "../../photos/Press/pressHeader.jpg";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function PressBanner() {
  return (
    <div className="PressBanner">
      <img src={BannerImage} />
      <div className="PressBanner_overlay" />
    </div>
  );
}

export default PressBanner;
