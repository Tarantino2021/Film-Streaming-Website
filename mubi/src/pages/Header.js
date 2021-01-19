import React, { useContext } from "react";
import Tooltip from "../components/Header/Tooltip";
//link
import { Link } from "react-router-dom";
//svg
import { LogoWhite } from "../components/utils/svg";
//context
import MyGlobalContext from "../context/context";

function Header() {
  const { clicked, setClicked, setModal, modalState } = useContext(
    MyGlobalContext
  );

  const handleModelOpen = () => {
    setModal(true);
    setClicked(false);
  };

  return (
    <div className="header">
      <div className="nav">
        <Link onClick={() => setClicked(false)} to="/">
          <LogoWhite />
        </Link>
      </div>
      <div className="login">
        <h1 onClick={handleModelOpen}>
          {modalState === "loggedIn" ? "LOG OUT" : "LOG IN"}
        </h1>
        <div className="menu" onClick={() => setClicked(!clicked)}>
          <span></span>
          <span></span>
          <span></span>
          {clicked && (
            <div onClick={(e) => e.stopPropagation()}>
              <Tooltip />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
