import React from "react";
import GiftsSectionOne from "../components/Gifts/GiftsSectionOne";
import GiftsSectionTwo from "../components/Gifts/GiftsSectionTwo";
import GiftsSectionThree from "../components/Gifts/GiftsSectionThree";
import GiftsSectionFour from "../components/Gifts/GiftsSectionFour";
import GiftsSectionFiveGrid from "../components/Gifts/GiftsSectionFiveGrid";

function Gifts() {
  return (
    <>
      <div className="gifts"></div>
      <div className="Gifts__body">
        <div className="Gifts__body_wrapper">
          <GiftsSectionOne />
          <GiftsSectionTwo />
          <GiftsSectionThree />
          <GiftsSectionFour />
          <GiftsSectionFiveGrid />
        </div>
      </div>
    </>
  );
}

export default Gifts;
