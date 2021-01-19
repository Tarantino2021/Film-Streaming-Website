import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="PressSectionFooter">
      <h1>Useful Links</h1>
      <div className="PressSectionFooter_wrapper">
        <div className="PressSectionFooter_left">
          <ul>
            <li>
              <Link to="/gifts">Gift MUBI</Link>
            </li>
            <li>
              <Link to="/memberships">Memberships</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="PressSectionFooter_center">
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/press">Press</Link>
            </li>
            <li>
              <Link to="/devices">Ways to Watch</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
