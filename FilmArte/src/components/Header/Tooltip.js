import React, { useContext } from "react";
import { Link } from "react-router-dom";
//socialIcons/
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { ImTumblr2 } from "react-icons/im";
//framer motions
import { motion } from "framer-motion";
//context
import MyGlobalContext from "../../context/context";
//data
import { menuData } from "../utils/data";

function Tooltip() {
  const { setClicked } = useContext(MyGlobalContext);

  return (
    <div>
      <motion.div className="Tooltip">
        <div className="Tooltip__arrow"></div>
        <ul>
          {menuData.map((item) => (
            <li>
              <Link onClick={() => setClicked(false)} to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}

          <li className="Tooltip_border"></li>
          <div className="Tooltip__social">
            <ImFacebook2 />
            <ImTwitter />
            <FaPinterest />
            <ImTumblr2 />
          </div>
        </ul>
      </motion.div>
    </div>
  );
}

export default Tooltip;
