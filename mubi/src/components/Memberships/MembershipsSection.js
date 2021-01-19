import React, { useContext } from "react";
import { SectionCheckMark } from "../utils/svg";
import { SectionX } from "../utils/svg";
import { Link } from "react-router-dom";
import { MembershipData } from "../utils/data";
//context
import MyGlobalContext from "../../context/context";

function MembershipsSection() {
  const { modal, setModal } = useContext(MyGlobalContext);

  return (
    <div className="MembershipsSection">
      <div className="MembershipsSection_wrapper">
        <div className="MembershipsSection_table">
          <h2>MUBI</h2>
          {MembershipData.map((data) => (
            <div className="MembershipsSection_tableRow">
              <div className="MembershipsSection_tableRow_border" />
              <h1>{data.title}</h1>
              {data.checkMark}
            </div>
          ))}
          <div className="MembershipsSection_tableRow_last">
            <h1>Monthly price</h1>
            <h3>
              <span>$10.99</span>/month
            </h3>
          </div>
        </div>
        <Link
          className="MembershipsSection_button"
          onClick={() => setModal(true)}
        >
          Start Your Membership
        </Link>
      </div>
    </div>
  );
}

export default MembershipsSection;
